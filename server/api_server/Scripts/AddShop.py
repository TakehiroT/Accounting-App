from DB_Model import Shops
from api_server import db

shops = Shops(shop_name='sanando', password='0000')
db.session.add(shops)
db.session.commit()

shop1 = Shops.query.all()
print(shop1)
