from importlib.resources import contents
from tkinter import Menu
from django.shortcuts import render

# Create your views here.
def dinner(request, menu, cnt):

    context = {
        'menu': menu,
        'cnt': cnt
    }

    return render(request, 'dinner.html', context)