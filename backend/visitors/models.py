from django.db import models
from rest_framework import serializers

ere_chocies = (
    ('enter', 'enter'),
    ('exit', 'exit')
)


class Visitor(models.Model):
    visitor_name = models.CharField(max_length=200)
    visitor_id = models.IntegerField()
    enter_r_exit = models.CharField(choices=ere_chocies, max_length=200)
    time = models.DateTimeField(auto_now_add=True)
    purpose = models.TextField(default='startup')
    by = models.IntegerField(default=0)

    def __str__(self):
        return str(self.visitor)


class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = '__all__'
