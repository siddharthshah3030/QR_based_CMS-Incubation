# Generated by Django 2.1.7 on 2019-02-16 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0002_book_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='book',
            name='reader',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='book',
            name='rented',
            field=models.BooleanField(default=False),
        ),
    ]