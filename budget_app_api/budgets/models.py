from django.db import models

# Create your models here.

class Budget(models.Model):
    category = models.CharField(max_length=25, null=False)
    sub_category = models.CharField(max_length=25, null=False)
    amount = models.FloatField(null=False)
    month = models.DateField(null=False)


class Transactions(models.Model):
    name = models.CharField(max_length=50, null=False)
    date = models.DateField(null=True)
    amount = models.FloatField(null=True)
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)