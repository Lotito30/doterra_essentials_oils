from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL
from apps.orders.countries import Countries

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    street = models.CharField(max_length=255, default='')
    building_villa = models.CharField(max_length=255, default='')
    department = models.CharField(max_length=255, default='', null=True)
    city = models.CharField(max_length=255, default='')
    district = models.CharField(max_length=255, default='')
    zipcode = models.CharField(max_length=20, default='')
    phone = models.CharField(max_length=255, default='')
    country_region = models.CharField(
        max_length=255, choices=Countries.choices, default=Countries.United_Arab_Emirates)

    def __str__(self):
        return self.user
