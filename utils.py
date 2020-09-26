from db_module import db_main


def validate_login(userid, password):
    if userid:
        if userid.strip()[:4] == "user":
            if password:
                validate_flag = db_main.validate_user_id(userid, password)
                return validate_flag, "user"
        elif userid.strip()[:3] == "hsp":
            if password:
                return validate_flag, "hsp"
        else:
            return False, "Invalid details"
    else:
        return False, "Invalid details"

def validate_userif(userid):
    if userid:
        return True

def validate_session_user_detail(user_detail):
    validate_flag, session_user_detail, session_user_type, create_time =  db_main.validate_session_user_detail(user_detail)

    if validate_flag:
        # check for expiry time
        validate_flag = True
        return validate_flag, session_user_type
    return validate_flag, session_user_type

def insert_session_details(user_id, user_type):
    db_main.create_session_user_detail(user_id, user_type, 100)

def remove_session_details(user_id):
    db_main.remove_session_user_detail(user_id)