from db_module.db_main import Base
from sqlalchemy import Column, Integer, String, BigInteger


class Hospital(Base):
    __tablename__ = 'hospital'

    id = Column(Integer, primary_key = True)
    hospital_name = Column("hospital_name", String(50))
    operator_name = Column("operator_name", String(50))
    geo_loc = Column("geo_loc", String(50))
    address = Column("address", String(200))
    mobile = Column("mobile", BigInteger)
    user_detail = Column("user_detail", String(8))
    password = Column("password", String(20))


    def __init__(self, hospital_name, operator_name, geo_loc, address, mobile, password):
        self.hospital_name = hospital_name
        self.operator_name = operator_name
        self.geo_loc = geo_loc
        self.address = address
        self.mobile = mobile
        self.password = password