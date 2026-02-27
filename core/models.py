from django.db import models
from django.contrib.auth.models import User

# جدول المعالم السياحية
class Landmark(models.Model):  
    Destination = models.CharField(max_length=200)      # اسم المدينة
    Landmark_Name = models.CharField(max_length=200)      # اسم المعلم
    Description = models.TextField()              # وصف المعلم
    Image_Url = models.URLField(max_length=500, blank=True)  # رابط الصورة 

    def __str__(self):
        return self.Landmark_Name

# جدول المفضلة
class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    landmark = models.ForeignKey("Landmark", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'landmark')

    def __str__(self):
        return f"{self.user.username} - {self.landmark.Landmark_Name}"