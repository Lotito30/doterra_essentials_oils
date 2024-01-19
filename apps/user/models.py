from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import os
from django.core.validators import MinLengthValidator, MaxLengthValidator
from apps.cart.models import Cart

class UserAccountmanager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
    
        email = self.normalize_email(email)
        user = self.model(email=email,**extra_fields)

        user.set_password(password)

        user.save()

        shopping_cart = Cart.objects.create(user=user)
        shopping_cart.save() 

        return user
    
    def create_superuser(self,email,password,**extra_fields):
        user = self.create_user(email,password,**extra_fields)

        user.is_superuser = True
        user.is_staff=True

        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone= models.CharField(
        max_length=12,
        validators=[
            MinLengthValidator(8),
            MaxLengthValidator(12)
        ]
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountmanager()

    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= ['first_name', 'last_name','phone']

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'
    
    def get_short_name(self):
        return self.first_name
    
    def get_phone(self):
        return self.phone
    
    def __str__(self):
        return self.email