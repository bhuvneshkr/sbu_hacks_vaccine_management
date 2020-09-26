from flask import Blueprint
from flask import request
from flask import render_template

vaccine_blueprint = Blueprint('vaccine_blueprint', __name__, url_prefix="/vaccine", static_folder="static")

@vaccine_blueprint.route('/')
def index():
    return "This is COVID-19 vaccine management app"
