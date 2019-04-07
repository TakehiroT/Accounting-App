from flask_script import Manager
from api_server import app
from api_server.Scripts.CreateDatabase import InitDataBase

if __name__ == '__main__':
    manager = Manager(app)
    manager.add_command('init_db', InitDataBase())
    manager.run()
