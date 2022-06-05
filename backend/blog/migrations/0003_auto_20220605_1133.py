# Generated by Django 3.2 on 2022-06-05 11:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20220605_1041'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('-publish', 'title', 'published')},
        ),
        migrations.RemoveField(
            model_name='post',
            name='created',
        ),
        migrations.AddField(
            model_name='post',
            name='publish',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='post',
            name='edited',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
