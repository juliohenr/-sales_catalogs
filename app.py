from flask import Flask
from flask_mysqldb import MySQL
import os
from flask import render_template, request,redirect, session, flash, url_for, send_from_directory


app = Flask(__name__)


@app.route('/')
def index():

    return render_template('principal.html')

@app.route('/new_vendor')
def new_vendor():

    return render_template('new_vendor.html')

@app.route('/criar', methods = ['POST',])
def criar():

    print(request.form)
    print("DATA Name FROM REQUEST: ",request.form["Name"])
    print("DATA CIty FROM REQUEST: ",request.form["City"])
    print("DATA CNPJ FROM REQUEST: ",request.form["CNPJ"])

    return redirect(url_for('new_vendor'))


if __name__ =='__main__':

    app.run(debug=True, port=3000)