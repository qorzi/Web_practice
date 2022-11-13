from django.shortcuts import render, redirect
from .models import User
from .forms import CustomUserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.views.decorators.http import require_POST

# Create your views here.
def index(request):
    users = User.objects.all()
    context = {
        'users': users
    }
    return render(request, 'accounts/index.html', context)

def signup(request):
    if request.method == 'POST':
        #base 이후 작성
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # 회원가입 후 로그인
            auth_login(request, user)
            return redirect('accounts:index')
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
			#로그인
			auth_login(request, form.get_user())
			return redirect('accounts:index')
	else:
		form = AuthenticationForm
	context = {
		'form':form,
	}
	return render(request, 'accounts/login.html', context)

def logout(request):
    auth_logout(request)
    return redirect('accounts:index')

@require_POST
def delete(request):
    #삭제후 로그아웃 해야함 - 세션 정보를 잃어버림
    #로그아웃으로 세션 제거(필수x)
    if request.user.is_authenticated:
        request.user.delete()
        auth_logout(request)
        
    return redirect('accounts:index')