from flask import Flask
import os
from flask import render_template, request,redirect, session, flash, url_for, send_from_directory
from help_db import Catalogue_DB

from flask_cors import CORS,cross_origin



app = Flask(__name__)

CORS(app, support_credentials=True)

client_db = Catalogue_DB()

@app.route('/')
def index():

    documents = client_db.list_documents()

    return render_template('principal.html',data=documents)

@app.route('/new_vendor')
def new_vendor():

    return render_template('new_vendor.html')

@app.route('/save', methods = ['POST',])
def save():
    

    products = []

    keys_products = list(request.form)[3:]

    for i in range(0,int(len(keys_products)/3)):

        products.append({"name":request.form["products[{}][name]".format(i)],
        
                        "code":request.form["products[{}][code]".format(i)],

                        "price":request.form["products[{}][price]".format(i)]})

    print(keys_products)
    print("DATA Name FROM REQUEST: ",request.form["name"])
    print("DATA CIty FROM REQUEST: ",request.form["city"])
    print("DATA CNPJ FROM REQUEST: ",request.form["cnpj"])
    print("DATA PRODUCT FROM REQUEST: ",products)#request.form.getlist('products[]'))



    #for i in range(0,len())


    client_db.insert_vendor(name=request.form["name"],
                            city=request.form["city"],
                            cnpj=request.form["cnpj"],
                            products = products)

    return redirect(url_for('new_vendor'))



@app.route('/delete', methods = ['POST',])
def delete():
    


    print("DATA Name FROM REQUEST: ",request.form["name"])
    print("DATA CIty FROM REQUEST: ",request.form["city"])
    print("DATA CNPJ FROM REQUEST: ",request.form["cnpj"])




    #for i in range(0,len())


    client_db.delete_vendor(cnpj=request.form["cnpj"],
                            name =request.form["name"],
                            city=request.form["city"])

    return redirect(url_for('index'))



if __name__ =='__main__':

    app.run(debug=True, port=3000)