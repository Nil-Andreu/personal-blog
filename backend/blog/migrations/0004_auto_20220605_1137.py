# Generated by Django 3.2 on 2022-06-05 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20220605_1133'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('-publish', 'title', 'status')},
        ),
        migrations.RenameField(
            model_name='post',
            old_name='published',
            new_name='status',
        ),
        migrations.AddField(
            model_name='post',
            name='body',
            field=models.TextField(default=' '),
            preserve_default=False,
        ),
    ]
