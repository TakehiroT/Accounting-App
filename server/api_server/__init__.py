from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, static_folder="../../front/build/static", template_folder="../../front/build")
app.config.from_object('api_server.Config')

db = SQLAlchemy(app)

from api_server.Views import Entries
