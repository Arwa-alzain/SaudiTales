from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Landmark
import os
import joblib
import numpy as np
from PIL import Image
from sklearn.preprocessing import normalize
from sklearn.metrics.pairwise import cosine_similarity
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

# Create your views here.
def home(request):
    return render(request, 'frontend/home.html', {
        'is_login': False
    })
def explore(request):
    return render(request, 'frontend/explore.html',{
        'is_login': False
    })
def exploreResult(request):
    return render(request, 'frontend/exploreResult.html',{
        'is_login': False
    })
def infoPlace(request, landmark_id):
    # Fetch the landmark details using the provided landmark_id
    place = get_object_or_404(Landmark, id=landmark_id)
    return render(request, 'frontend/InfoPlace.html', {
        'place': place,
        'is_login': True
    })
def profile(request):
    return render(request, 'frontend/profile.html',{
        'is_login': True
    })

#registeration:
def register(request):
    return render(request, 'account/register.html')

def login(request):
    return render(request, 'account/login.html')

#admin dashboard:
def dashboard(request):
    return render(request, 'adminDashboard/dashboard.html')
def landmarks(request):
    return render(request, 'adminDashboard/landmarks.html')
def accountMange(request):
    return render(request, 'adminDashboard/AccountMang.html')

# for download the MobileNet module once when running the server
base_model = tf.keras.applications.MobileNetV2(weights='imagenet', include_top=False, pooling='avg')
# Download the features from landmark_features.pkl file 
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'ml_model', 'landmark_features.pkl')
landmark_features = joblib.load(MODEL_PATH)

# AI Landmark Recognition Model
def predict_landmark(request):
    landmark = None
    top_landmarks = []
    error_msg = None

    BASE_THRESHOLD = 0.60
    MARGIN_THRESHOLD = 0.02

    if request.method == 'POST' and request.FILES.get('image'):
        try:
            # 1 prepare image
            uploaded_img = request.FILES['image']
            img = Image.open(uploaded_img).convert('RGB')
            img = img.resize((224, 224))
            img_array = np.array(img)
            img_array = np.expand_dims(img_array, axis=0)
            img_array = preprocess_input(img_array)

            # 2️ Feature extraction
            query_feature = base_model.predict(img_array, verbose=0).flatten()
            query_feature = normalize([query_feature])[0]

            # 3️ Calculate the highest similarity for each landmark
            similarities = []
            for landmark_id, feature_list in landmark_features.items():
                max_score = -1
                for stored_feature in feature_list:
                    score = cosine_similarity([query_feature], [stored_feature])[0][0]
                    if score > max_score:
                        max_score = score
                similarities.append((landmark_id, max_score))

            # Sort results from highest to lower similarity
            similarities = sorted(similarities, key=lambda x: x[1], reverse=True)

            best_id, best_score = similarities[0]
            second_score = similarities[1][1]
            margin = best_score - second_score

            # 4️ Decision Logic
            if best_score >= BASE_THRESHOLD and margin > MARGIN_THRESHOLD:
                landmark = Landmark.objects.get(id=int(best_id))
            else:
                top_3_ids = [int(i) for i, s in similarities[:3]]
                top_landmarks = [Landmark.objects.get(id=lid) for lid in top_3_ids]

        except Exception as e:
            error_msg = f"An error occurred during processing: {str(e)}"

    return render(request, 'frontend/exploreResult.html', {
        'landmark': landmark,
        'top_landmarks': top_landmarks,
        'error': error_msg,
        'is_login': False
    })