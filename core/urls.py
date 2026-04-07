from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('explore/', views.explore, name='explore'),
    path('exploreResult/', views.exploreResult, name='exploreResult'),
    # path('infoPlace/', views.infoPlace, name='infoPlace'),
    path('profile/', views.profile, name='profile'),

    #registeration:
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path("logout/", views.logout_view, name="logout"),

    #admin dashboard:
    path('dashboard/', views.dashboard, name='dashboard'),
    path('landmarks/', views.landmarks, name='landmarks'),
    path('accountMang/', views.accountMange, name='AccountManagement'),

    # for AI Landmark Recognition Model
    path('predict/', views.predict_landmark, name='predict_landmark'),

    path('infoPlace/<int:landmark_id>/', views.infoPlace, name='infoPlace'),
    path('toggle_favorite/<int:landmark_id>/', views.toggle_favorite, name='toggle_favorite'),
    path('delete-landmark/<int:landmark_id>/', views.delete_landmark, name='delete_landmark'),
]