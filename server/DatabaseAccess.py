from flask_sqlalchemy import SQLAlchemy

from index import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Shops.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)
