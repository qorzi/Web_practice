from django.shortcuts import render, redirect, get_list_or_404, get_object_or_404
from .models import Movie, Genre, Grade
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import MovieSerializer, GradeSerializer
# Create your views here.

# 영화 추가 삭제 수정
@api_view(['POST', 'DELETE', 'PUT'])
def movies(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # serializer.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

#영화 저장
@api_view(['POST'])
def movies_save(request):
    if request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # serializer.save()
            serializer.save(user=request.user)
    return Response(status=status.HTTP_202_ACCEPTED)

# 평점 추가 변경
@api_view(['POST', 'PUT'])
def movies_grade(request, grade_pk):
    grade = get_object_or_404(Grade, pk=grade_pk)

    # 구현 미완료
    if request.method == 'POST':
        grade.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = GradeSerializer(grade, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# 영화 좋아요 리스트 및 좋아요
@api_view(['GET', 'POST'])
def movies_like(request):

    if request.method == 'GET':
        user = request.user
        movies = user.like_movies.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        movie_pk = request.data.get('movieId')
        movie = get_object_or_404(Movie, pk=movie_pk)

        if movie.like_users.filter(pk=request.user.pk).exists():
            movie.like_users.remove(request.user)
        else:
            movie.like_users.add(request.user)
        return Response(status=status.HTTP_202_ACCEPTED)


# 사용자 기반 영화 추천
@api_view(['GET'])
def recommend(request):
    user = request.user

    # serializer = 
    # return Response(serializer.data, status=status.HTTP_200_OK)
    return

