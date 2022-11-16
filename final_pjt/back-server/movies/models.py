from django.db import models
# from django.contrib.auth import get_user_model
# from django.conf import settings

# Create your models here.
# class Genre(models.Model):
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name  

class Movie(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.DateField( auto_now=False, auto_now_add=False)
    popularity = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.TextField(null=True)
    # genres = models.ManyToManyField(Genre, related_name='movies_genre')
    # like_users = models.ManyToManyField(get_user_model(), related_name='like_movies')

#     def __str__(self):
#         return self.title

# class Grade(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
#     grade = models.IntegerField(blank=True, null=True)