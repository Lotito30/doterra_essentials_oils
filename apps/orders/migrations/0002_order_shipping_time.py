# Generated by Django 5.0 on 2024-01-29 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='shipping_time',
            field=models.CharField(default=None, max_length=255),
        ),
    ]