import json

def json_reader():
    with open('countries.json') as json_data:
        data = json.load(json_data)
        return data