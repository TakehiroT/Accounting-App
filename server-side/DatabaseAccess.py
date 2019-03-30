import sqlite3
import json
from contextlib import closing

user_database = "./User.db"

with closing(sqlite3.connect(user_database)) as conn:
    cursor = conn.cursor()
    #create_table = "create table users (id int, name varchar(64),password varchar(32))"

    #cursor.execute(create_table)

    #insert_sql = 'insert into users (id, name, password) values (?,?,?)'
    #users = [
    #    (2, 'Shota', 'ok12345'),
    #    (3, 'Nana', 'soajef3f'),
    #    (4, 'Tooru', 'kfov777'),
    #    (5, 'Saki', 'djekf834')
    #]
    #cursor.executemany(insert_sql, users)

    #conn.commit()

    select_sql = 'select * from users'
    cursor.execute(select_sql)
    data = cursor.fetchall()
    json_data = json.dumps(data, indent=4)
    print(json_data);
