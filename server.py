from flask import Flask, request, redirect, render_template
from flask_ngrok import run_with_ngrok
import sys
sys.path.append('/Users/Silviu/Documents/Codecool/web_module/TW4_web/JigsawPuzzle/static/images')
sys.path.append('/home/alex/Documents/WEB MODULE 2/JIGSAW/JigsawPuzzle/static/images')
import crop_image as crp

app = Flask(__name__)
working_path = '/Users/Silviu/Documents/Codecool/web_module/TW4_web/JigsawPuzzle/static'



@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')



@app.route('/settings/<category>')
def settings(category):
    return render_template('settings.html')


@app.route('/game/<image>')
def game(image):
    image_path = f'{working_path}/images/{image}.jpg'
    image_info = crp.cropImage(image_path, [4, 4])
    print(image_info)
    return render_template('game.html', image_info=image_info)
    

if __name__ == '__main__':
    app.run(debug=True)