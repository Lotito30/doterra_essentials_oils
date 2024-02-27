from django.db import models
from django.utils import timezone
from apps.category.models import Category

class Product(models.Model):
    name=models.CharField(max_length=255)
    photo=models.ImageField(upload_to='photos', height_field=None, width_field=None, max_length=None)
    description=models.TextField()
    price=models.DecimalField( max_digits=6, decimal_places=2)
    compare_price=models.DecimalField(max_digits=6, decimal_places=2)
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity=models.IntegerField(default=0)
    sold=models.IntegerField(default=0)
    date_created=models.DateTimeField( auto_now=False, auto_now_add=False,default=timezone.now)

    # GUDARDAR FEATURES PARA EL PRODUCT DETAIL

    def get_thumbnail(self):
        if self.photo:
            return self.photo.url
        return ''
    
    def save(self,*args, **kwargs):
        self.name = self.name.capitalize()
        super().save(*args, **kwargs)


    def __str__(self):
        return self.name
    
