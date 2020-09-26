from db_module.db_main import Base
from sqlalchemy import Column, Integer, String, BigInteger


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key = True)
    first_name = Column("first_name", String(50))
    last_name = Column("last_name", String(50))
    email = Column("email", String(50))
    address = Column("address", String(200))
    mobile = Column("mobile", BigInteger)
    user_detail = Column("user_detail", String(8))
    password = Column("password", String(20))

    def __init__(self, first_name, last_name, email, address, mobile, user_detail, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.address = address
        self.mobile = mobile
        self.user_detail = user_detail
        self.password = password
