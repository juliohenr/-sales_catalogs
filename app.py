from flask import Flask
import os
from flask import render_template, request,redirect, session, flash, url_for, send_from_directory
from help_db import Catalogue_DB



app = Flask(__name__)

client_db = Catalogue_DB()

@app.route('/')
def index():

    documents = client_db.list_documents()

    return render_template('principal.html',data=documents)

@app.route('/new_vendor')
def new_vendor():

    return render_template('new_vendor.html')

@app.route('/save', methods = ['POST',])
def criar():

    print(request.form)
    print("DATA Name FROM REQUEST: ",request.form["Name"])
    print("DATA CIty FROM REQUEST: ",request.form["City"])
    print("DATA CNPJ FROM REQUEST: ",request.form["CNPJ"])

    client_db.insert_vendor(name=request.form["Name"],
                            city=request.form["City"],
                            cnpj=request.form["CNPJ"])

    return redirect(url_for('new_vendor'))


if __name__ =='__main__':

    app.run(debug=True, port=3000)