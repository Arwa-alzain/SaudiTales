from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('explore/', views.explore, name='explore'),
    path('exploreResult/', views.exploreResult, name='exploreResult'),
    path('infoPlace/', views.infoPlace, name='infoPlace'),
    path('profile/', views.profile, name='profile'),

    #registeration:
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),

    #admin dashboard:
    path('dashboard/', views.dashboard, name='dashboard'),
    path('landmarks/', views.landmarks, name='landmarks'),
    path('accountMang/', views.accountMange, name='AccountManagement'),
]