from flask import request
from flask import session
from flask import render_template
from vaccine_blueprint import vaccine_blueprint

import utils

# sends user id
@vaccine_blueprint.route('/patient_home', methods=['POST', 'GET'])
def patient_home():
    # print(str(session.items()))
    error = ""
    if request.method == 'POST':
        request.form['userid']
        if validate_flag and user_type=="user":
            session['userid'] = "userid"
            session.modified = True
            return render_template('patient_home.html', error=error)
        elif validate_flag and user_type=="hsp":
            return render_template('hospital_home.html', error=error)
        elif len(request.form['userid'])>0 and len(request.form['password'])>0:
            error = 'Invalid username/password'
        else:
            return render_template('login.html', error=error)

    elif request.method == 'GET':
        if ("userid" in session.keys()):
            validate_flag, session_user_type = utils.validate_session_user_detail(session["userid"])
            if validate_flag:
                error = ""
                return render_template('patient_home.html', error=error)
            else:
                error = "Session Expired"
                return render_template('login.html', error=error)


    return render_template('login.html', error=error)