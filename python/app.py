from flask import Flask
from datetime import datetime
import os

app = Flask(__name__)

if __name__ == '__main__':
    app.run()


@app.route('/', methods=['GET'])
def get():
    now = datetime.now()
    fileName = 'files/' + now.strftime("%Y%m%d_%H%M%S") + '.txt'
    file = open(fileName, 'w')
    file.write(now.strftime("%d/%m/%Y %H:%M:%S"))
    file.close()
    return 'Sucesso em criar o ' + fileName
