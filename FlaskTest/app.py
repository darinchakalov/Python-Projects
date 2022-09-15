from traceback import print_tb
from flask import Flask
from flask_cors import CORS
import script4
from requests import get

app = Flask(__name__)
CORS(app)

@app.route('/')
def jsonRunner():
    return script4.json_reader()
   

@app.route('/myip')
def ip_checker():
    external_ip = get('https://api.ipify.org').content.decode('utf8')
    return external_ip


if __name__ == '__main__':
    app.run()