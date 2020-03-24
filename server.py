from flask import Flask, request, redirect, render_template
from flask_ngrok import run_with_ngrok

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/settings')
def settings():
    return render_template('settings.html')


@app.route('/game')
def game():
    return render_template('game.html')
    

if __name__ == '__main__':
    app.run(debug=True)