from django.db import models

class Landmark(models.Model):  
    Destination = models.CharField(max_length=200)      # اسم المدينة
    Landmark_Name = models.CharField(max_length=200)      # اسم المعلم
    Description = models.TextField()              # وصف المعلم
    Image_Url = models.URLField(max_length=500, blank=True)  # رابط الصورة 

def __str__(self):
    return self.Landmark_Name