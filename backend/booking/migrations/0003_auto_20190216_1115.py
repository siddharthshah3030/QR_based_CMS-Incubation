# Generated by Django 2.1.7 on 2019-02-16 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0002_auto_20190216_1048'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='authorised',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='item',
            name='img',
            field=models.ImageField(null=True, upload_to='../uploads/'),
        ),
    ]
