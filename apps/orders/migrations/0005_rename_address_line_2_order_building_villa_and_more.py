# Generated by Django 5.0 on 2024-03-24 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_order_coupon_price_alter_order_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='address_line_2',
            new_name='building_villa',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='address_line_1',
            new_name='district',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='state_province_region',
            new_name='street',
        ),
        migrations.AddField(
            model_name='order',
            name='department',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]