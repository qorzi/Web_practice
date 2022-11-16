import requests
import json

TMDB_API_KEY = '38ee27fa3688e2ed93068da12e4c2386'

def make_movies_data():
    total_data = []

    # 1페이지부터 500페이지까지 (페이지당 20개, 총 10,000개)
    for i in range(1, 501):
        request_url = f'https://api.themoviedb.org/3/movie/popular?api_key={TMDB_API_KEY}&language=ko-KR&page={i}'
        movies = requests.get(request_url).json()

        for movie in movies['results']:
            if movie.get('release_date', ''):
                fields = {
                    # 'movie_id' : movie['id'],
                    'title' : movie['title'],
                    'release_date' : movie['release_date'],
                    'popularity' : movie['popularity'],
                    'vote_average' : movie['vote_average'],
                    'overview' : movie['overview'],
                    'poster_path' : movie['poster_path'],
                    # 'genre_ids' : movie['genre_ids']
                }
                
                data = {
                    # 'pk' : movie['id'],
                    'model': 'movies.movie',
                    'fields': fields
                }

                total_data.append(data)

    # with open('movie_data.json', 'w', encoding='utf-8') as w:
    with open('popular_movie_data.json', 'w', encoding='utf-8') as w:
        json.dump(total_data, w, indent="\t", ensure_ascii=False)

make_movies_data()

# 실행 방법
# Terminal 실행 -> python make_movies_json.py 입력 후 실행