from flask import request
from flask import render_template
from vaccine_blueprint import vaccine_blueprint

import utils


@vaccine_blueprint.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        print(request.form['username'])
        print(request.form['password'])
        if utils.validate_login(request.form['username'], request.form['password'])=="user":
            return render_template('patient_home.html', error=error)
    #         return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'

    return render_template('login.html', error=error)

