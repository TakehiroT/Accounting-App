from flask_script import Command
from api_server import db

class InitDataBase(Command):
    def run(self):
        print(db)
        db.create_all()
