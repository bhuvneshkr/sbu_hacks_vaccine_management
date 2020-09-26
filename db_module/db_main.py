import os
import random
from sqlalchemy import text
from sqlalchemy import create_engine
from sqlalchemy import inspect
from sqlalchemy import MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

### Do not change the below import order!!! 'Base' needs to be defined before importing below ORM classes
import db_module.user as user
import db_module.hospital
import db_module.session_detail as session_detail

engine = create_engine('sqlite:///vaccine.db')
conn = engine.connect()

def clear_tables():
    table_list = engine.table_names()
    for table_name in table_list:
        sql_query = text("DROP TABLE {}".format(table_name))
        result = conn.execute(sql_query)
    print("Tables successfully deleted")

def init_db():
    Base.metadata.create_all(engine)
    print("DB initialized successfully")

def print_metadata():
    print(engine.table_names())

def get_session():
    Session = sessionmaker()
    Session.configure(bind=engine)
    session = Session()
    return session

def insert_record(insert_obj, session):
    session.add(insert_obj)
    session.commit()

def get_user_id(session):
    row = session.query(user.User)
    session.commit()

    if row != None:
        user_id_list = []
        for val in row.all():
            user_id_list.append(val.user_detail)
        while True:
            user_id = "user" + str(random.randint(1111,9999))
            if user_id not in user_id_list:
                return user_id
    else:
        user_id = "user" + str(random.randint(1111,9999))
        return user_id

def insert_user(inp_obj):
    session = get_session()
    row = session.query(user.User).filter(user.User.email == inp_obj["email"]).first()
    if row != None:
        session.commit()
        return False, "Already Registered"
    user_detail = get_user_id(session)
    insert_obj = user.User(inp_obj["first_name"], inp_obj["last_name"], inp_obj["email"], inp_obj["address"], inp_obj["mobile"], user_detail, inp_obj["password"])
    insert_record(insert_obj, session)

    return True, user_detail

def validate_user_id(userid, password):
    session = get_session()
    row = session.query(user.User).filter(user.User.user_detail == userid, user.User.password == password).first()
    session.commit()

    if row != None:
        return True
    return False

def create_session_user_detail(user_detail, user_type, create_time):
    session = get_session()
    insert_obj = session_detail.SessionDetail(user_detail, user_type, create_time)
    insert_record(insert_obj, session)
    session.commit()

    return True, user_detail

def validate_session_user_detail(user_detail):
    session = get_session()
    row = session.query(session_detail.SessionDetail).filter(session_detail.SessionDetail.session_user_detail == user_detail).first()
    session.commit()

    if row != None:
        return True, row.session_user_detail, row.session_user_type, row.create_time
    return False, "","",""

def remove_session_user_detail(user_detail):
    session = get_session()
    row = session.query(session_detail.SessionDetail).filter(session_detail.SessionDetail.session_user_detail == user_detail)
    if row != None:
        row.delete()
    session.commit()


# from sqlalchemy import create_engine
#
# db_uri = 'sqlite:///db.sqlite'
# engine = create_engine(db_uri)
#
# # Create connection
# conn = engine.connect()
# # Begin transaction
# trans = conn.begin()
# conn.execute('INSERT INTO "EX1" (name) '
#              'VALUES ("Hello")')
# trans.commit()
# # Close connection
# conn.close()