from flask_sqlalchemy import SQLAlchemy
from DatabaseAccess import db
#from sqlalchemy.orm import relationship, backref
#from datetime import datetime



class Shops(db.Model):

    __tablename__ = "Shops"
    id = db.Column(db.Integer, primary_key=True)
    shop_name = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)


    #初期化
    def __init__(self, shop_name, password):
        self.shop_name = shop_name
        self.password = password
