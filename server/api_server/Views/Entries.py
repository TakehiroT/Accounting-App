from flask import session, request, jsonify

from api_server import app
from api_server import db
from api_server.Models.DB_Model import Shops

GET = 'GET'
POST = 'POST'

@app.route('/database/login', methods=[GET, POST])
def login():
    if request.method == POST:
        json = request.get_json()
        return 'ok'
