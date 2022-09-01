from cgitb import html
from unicodedata import name
from venv import create
from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
    path('articles/new.html/', views.new, name='new'),
    path('articles/index.html/', views.create, name='create'),
    path('articles/<int:pk>/', views.detail, name='detail'),
    path('articles/<int:pk>/delete/', views.delete, name='delete'),
    path('articles/<int:pk>/edit/', views.edit, name='edit'),
    path('articles/<int:pk>/update/', views.update, name='update'),
]
