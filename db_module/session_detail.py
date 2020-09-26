from db_module.db_main import Base
from sqlalchemy import Column, Integer, String, BigInteger


class SessionDetail(Base):
    __tablename__ = 'session_detail'

    id = Column(Integer, primary_key = True)
    session_user_type = Column("session_user_type", String(50))
    session_user_detail = Column("session_user_detail", String(50))  # 'user_id' for 'user' table and 'hospital_id' for 'hospital' table
    create_time = Column("create_time", BigInteger)

    def __init__(self, session_user_detail, session_user_type, create_time):
        self.session_user_type = session_user_type
        self.session_user_detail = session_user_detail
        self.create_time = create_time