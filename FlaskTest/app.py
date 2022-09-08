from flask import Flask
from flask_cors import CORS
import json
import script4

app = Flask(__name__)
CORS(app)

@app.route('/')

# def json_reader():
#     with open('countries.json') as json_data:
#         data = json.load(json_data)
#         return data

def jsonRunner():
    return script4.json_reader()
   

if __name__ == '__main__':
    app.run()