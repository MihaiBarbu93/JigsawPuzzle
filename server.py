from flask import Flask, request, redirect, render_template
from flask_ngrok import run_with_ngrok
import sys
sys.path.append('D:/Codecool/JigsawPuzzle/static/images')
import crop_image as crp

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    if request.args:
        category = request.args.get('category')
        print(category)
        return render_template('index.html',category=category)
    return render_template('index.html')



@app.route('/settings/<category>')
def settings(category):

    return render_template('settings.html')


@app.route('/game/<image>')
def game(image):
    image_path = f'static/images/{image}.jpg'
    crp.cropImage(image_path, [2, 2])
    return render_template('game.html', image=image)
    

if __name__ == '__main__':
    app.run(debug=True)