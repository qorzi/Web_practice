from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    # 영화 추가 삭제 수정
    path('movie/', views.movies),
    # 평가한 영화, 좋아요한 영화 저장
    path('save/', views.movies_save),
    # 영화 평점 저장 및 불러오기
    path('grade/', views.movies_grade),
    # 영화 좋아요 리스트 및 좋아요
    path('like/', views.movies_like),
    # 사용자 기반 영화 추천
    # path('recommend/', views.recommend)
]
