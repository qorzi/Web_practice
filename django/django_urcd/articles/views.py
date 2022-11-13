from django.shortcuts import render, redirect
from .models import Article

# Create your views here.
def index(request):
    articles = Article.objects.all()
    context = {
        'articles': articles
    }
    return render(request, 'articles/index.html/', context)

def new(request):
    return render(request, 'articles/new.html/')

def create(request):
		#사용자의 데이터를 받아서 DB에 저장
		title = request.GET.get('title')
		content = request.GET.get('content')

		#2 <- 데이터 검증도 가능하고 짧음
		article = Article(title=title, contents=content)
		article.save()

		return redirect('articles:index')
        