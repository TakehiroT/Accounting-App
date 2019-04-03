from DatabaseAccess import db
from DB_Model import Shops

#shops = Shops(shop_name='toshiya', password='0410')
#db.session.add(shops)
#db.session.commit()

shop1 = Shops.query.first()
print(shop1.password)
