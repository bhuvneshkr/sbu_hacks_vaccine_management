from flask import request
from flask import session
from flask import render_template
from vaccine_blueprint import vaccine_blueprint

import utils


@vaccine_blueprint.route('/logout', methods=['POST', 'GET'])
def logout():
    # print(str(session.items()))
    error = ""
    if request.method == 'POST':
        if ("userid" in session.keys()):
            validate_flag, session_user_type = utils.validate_session_user_detail(session["userid"])
            if validate_flag:
                error = ""
                utils.remove_session_details(session["userid"])
                return render_template('login.html', error=error)
            else:
                error = "Session Expired"
                return render_template('login.html', error=error)

    elif request.method == 'GET':
        if ("userid" in session.keys()):
            validate_flag, session_user_type = utils.validate_session_user_detail(session["userid"])
            if validate_flag:
                error = ""
                utils.remove_session_details(session["userid"])
                return render_template('login.html', error=error)
            else:
                error = "Session Expired"
                return render_template('login.html', error=error)

    return render_template('login.html', error=error)