from flask import Flask, request, redirect, render_template
from flask_ngrok import run_with_ngrok

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
    return render_template('game.html', image=image)
    

if __name__ == '__main__':
    app.run(debug=True)