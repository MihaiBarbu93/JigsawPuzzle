from flask import Flask, request, redirect, render_template
from flask_ngrok import run_with_ngrok
import sys
sys.path.append('/home/alex/Documents/WEB MODULE 2/JIGSAW/JigsawPuzzle/static/images')
# sys.path.append("D:\Codecool\JigsawPuzzle\static\images")
# sys.path.append("/Users/Silviu/Documents/Codecool/web_module/TW4_web/JigsawPuzzle/static/images")
# sys.path.append("/home/www/Desktop/webModule/TWW4/JigsawPuzzle/static/images")
import crop_image as crp

app = Flask(__name__)
working_path='/home/alex/Documents/WEB MODULE 2/JIGSAW/JigsawPuzzle/static'
# working_path = "D:\Codecool\JigsawPuzzle\static"
# working_path = "/Users/Silviu/Documents/Codecool/web_module/TW4_web/JigsawPuzzle/static"
# working_path = "/home/www/Desktop/webModule/TWW4/JigsawPuzzle/static"



@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')



@app.route('/settings/<category>')
def settings(category):
    return render_template('settings.html', category=category)


@app.route('/game/<category>/<image>')
def game(image, category):
    puzzle_height = int(request.args.get("puzzleHeight"))
    puzzle_width = int(request.args.get("puzzleWidth"))
    image_path = f'{working_path}/images/{category}/{image}.jpeg'
    image_info = crp.cropImage(image_path, [puzzle_width, puzzle_height])
    image_info.update({'img_width': puzzle_width, 'img_height': puzzle_height})
    table_grid_ids = sorted(image_info['pieces_ids'])
    return render_template('game.html', image_info=image_info,image_name=image, category=category, table_grid_ids = table_grid_ids)
    

if __name__ == '__main__':
    app.run(debug=True)