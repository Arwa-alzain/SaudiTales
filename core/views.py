from django.shortcuts import render
from django.http import HttpResponse
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
def infoPlace(request):
    return render(request, 'frontend/InfoPlace.html',{
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