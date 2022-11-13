from rest_framework import serializers
from .models import Actor, Movie, Review


class ActorListSerializer(serializers.ModelSerializer):

  class Meta:
    model = Actor
    fields = ('id', 'name')

class ActorSerializer(serializers.ModelSerializer):

  class Meta:
    model = Actor
    fields = '__all__'

class MovieListSerializer(serializers.ModelSerializer):

  class Meta:
    model = Movie
    fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):

  class Meta:
    model = Movie
    fields = '__all__'

class ReviewListSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Review
    fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
  movie = MovieSerializer(read_only=True)
  class Meta:
    model = Review
    fields = '__all__'
