from multiprocessing import context
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
	title = request.POST.get('title')
	content = request.POST.get('content')

	#2 <- 데이터 검증도 가능하고 짧음
	article = Article(title=title, contents=content)
	article.save()

	return redirect('articles:detail', article.pk)

def detail(request, pk):
	article = Article.objects.get(pk=pk)
	context = {
		'article': article, 
	}
	return render(request, 'articles/detail.html', context)
        
def delete(request, pk):
	article = Article.objects.get(pk=pk)
	article.delete()
	return redirect('articles:index')

def edit(request, pk):
	article = Article.objects.get(pk=pk)
	context = {
		'article': article
	}
	return render(request, 'articles/edit.html', context)

def update(request, pk):
	article = Article.objects.get(pk=pk)
	article.title = request.POST.get('title')
	article.content = request.POST.get('content')
	article.save()
	return redirect('articles:detail', article.pk)

	