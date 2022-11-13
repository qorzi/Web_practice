from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.
def signup(request):
  if request.method == 'POST':
    form = CustomUserCreationForm(request.POST)
    if form.is_valid():
      user = form.save()
      auth_login(request, user)
      return redirect('articles:index')
  else:
    form = CustomUserCreationForm
  context = {
    'form': form,
  }
  return render(request, 'accounts/signup.html', context)

def login(request):
  if request.method == 'POST':
    form = AuthenticationForm(request, request.POST)
    if form.is_valid():
      auth_login(request, form.get_user())
      return redirect('articles:index')
  else:
    form = AuthenticationForm
  context = {
    'form': form
  }
  return render(request, 'accounts/login.html', context)

def logout(request):
  auth_logout(request)
  return redirect('articles:index')

def delete(request):
  if request.user.is_authenticated:
    request.user.delete()
    auth_logout(request)
    return redirect('articles:index')