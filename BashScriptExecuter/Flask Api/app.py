from flask import Flask
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True


@app.route('/')
def home():
    return "First flask data"


@app.route('/date')
def date():
    return subprocess.Popen('date', stdout=subprocess.PIPE).stdout.read()


app.run()
