from flask import request
from flask import session
from flask import render_template, redirect
from vaccine_blueprint import vaccine_blueprint

import utils


@vaccine_blueprint.route('/login', methods=['POST', 'GET'])
def login():
    # print(str(session.items()))
    error = ""
    print(request.method)
    if request.method == 'POST':
        validate_flag, user_type = utils.validate_login(request.form['userid'], request.form['password'])
        if validate_flag and user_type=="user":
            session['userid'] = request.form['userid']
            session.modified = True
            utils.insert_session_details(request.form['userid'], user_type)
            return redirect("http://127.0.0.1:5000/vaccine/patient_home")
            # return render_template('patient_home.html', error=error)

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
                if session_user_type=="user":
                    return render_template('patient_home.html', error=error)
                elif session_user_type=="hsp":
                    return render_template('hospital_home.html', error=error)
            else:
                error = "Session Expired"
                return render_template('login.html', error=error)

    return render_template('login.html', error=error)