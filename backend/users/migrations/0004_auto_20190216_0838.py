# Generated by Django 2.1.7 on 2019-02-16 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20190216_0834'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_type',
            field=models.CharField(choices=[('Startup Worker', 'Startup Worker'), ('Startup', 'Startup'), ('Admin', 'Admin'), ('Gaurd', 'Gaurd'), ('Receptionist', 'Receptionist'), ('Librarian', 'Librarian'), ('Cafeteria', 'Cafeteria'), ('Others', 'Others')], max_length=100),
        ),
    ]