from importlib.resources import contents
from turtle import update
from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=20)
    contents = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)