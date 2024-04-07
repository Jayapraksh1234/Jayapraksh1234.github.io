from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('movie.html')

@app.route('/movie/search')
def search_movies():
    search_term = request.args.get('q')
    url = f"http://www.omdbapi.com/?s={search_term}"
    response = requests.get(url)
    data = response.json()
    
    if 'Search' in data:
        movies = data['Search']
        movie_list = []
        for movie in movies:
            movie_data = {
                'title': movie.get('Title', 'N/A'),
                'genre': movie.get('Genre', 'N/A'),
                'rating': movie.get('imdbRating', 'N/A')
            }
            movie_list.append(movie_data)
        return jsonify({
            'movies': movie_list
        })
    else:
        return jsonify({'error': 'No movies found for the search term'})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)


