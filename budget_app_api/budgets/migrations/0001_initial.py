# Generated by Django 4.0.3 on 2022-04-04 03:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Budget',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=25)),
                ('sub_category', models.CharField(max_length=25)),
                ('amount', models.FloatField()),
                ('month', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Transactions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('date', models.DateField(null=True)),
                ('amount', models.FloatField(null=True)),
                ('budget', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budgets.budget')),
            ],
        ),
    ]
