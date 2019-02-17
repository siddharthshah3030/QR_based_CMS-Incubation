from django.db import models
from django.contrib.auth.models import User

user_types = (
    ('Startup Worker', 'Startup Worker'),
    ('Startup', 'Startup'),
    ('Admin', 'Admin'),
    ('Gaurd', 'Gaurd'),
    ('Receptionist', 'Receptionist'),
    ('Librarian', 'Librarian'),
    ('Cafeteria', 'Cafeteria'),
    ('Others', 'Others'),
)


class Profile(models.Model):
    user = models.IntegerField()
    phone = models.CharField(max_length=10)
    dp = models.ImageField(null=True)
    user_type = models.CharField(
        choices=user_types,
        max_length=100,
    )

    def __str__(self):
        return str(self.user)
