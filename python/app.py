from flask import Flask
import os

app = Flask(__name__)

if __name__ == '__main__':
    app.run()


@app.route('/', methods=['GET'])
def get():
    file = open('files/a.txt', 'r')
    contents = file.read()
    file.close()
    return contents
