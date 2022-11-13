from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('detail/', views.details, name='details')
]
