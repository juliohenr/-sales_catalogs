from flask import Flask
import os
from flask import render_template, request,redirect, session, flash, url_for, send_from_directory
from help_db import Catalogue_DB

from flask_cors import CORS,cross_origin

global info,client_db

info = {"data":""}

app = Flask(__name__)

CORS(app, support_credentials=True)

client_db = Catalogue_DB()

@app.route('/')
def index():

    documents = client_db.list_documents()


    return render_template('principal.html',data=documents)


@app.route('/edit_data', methods = ['POST',])
def edit_data():


    products = []

    keys_products = list(request.form)[3:]

    for i in range(0,int(len(keys_products)/3)):

        products.append({"name":request.form["products[{}][name]".format(i)],
        
                        "code":request.form["products[{}][code]".format(i)],

                        "price":request.form["products[{}][price]".format(i)]})


    documents = [{'Name':request.form["name"],'CNPJ':request.form["cnpj"],'City':request.form["city"],'products':products}]



    info['data'] = documents

    
    
    return redirect(url_for('edit'))


@app.route('/edit', methods = ["GET","POST"])
def edit():

    documents = info['data']


    return render_template('edit.html',data=documents)




@app.route('/update', methods = ["POST",])
def update():


    products = []

    keys_products = list(request.form)[5:]

    for i in range(0,int(len(keys_products)/3)):

        products.append({"name":request.form["products[{}][name]".format(i)],
        
                        "code":request.form["products[{}][code]".format(i)],

                        "price":request.form["products[{}][price]".format(i)]})


    documents = {'Name':request.form["name"],
                'CNPJ':request.form["cnpj"],
                'City':request.form["city"],


                'NameOld':request.form["nameOld"],
                'CNPJOld':request.form["cnpjOld"],
                'CityOld':request.form["cityOld"],
                
                'products':products}


    client_db.update_vendor(name=request.form["name"],
                        city=request.form["city"],
                        cnpj=request.form["cnpj"],
                        name_old=request.form["nameOld"],
                        city_old=request.form["cityOld"],
                        cnpj_old=request.form["cnpjOld"],
                        products = products)

    return render_template('principal.html')

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


    client_db.insert_vendor(name=request.form["name"],
                            city=request.form["city"],
                            cnpj=request.form["cnpj"],
                            products = products)

    return redirect(url_for('new_vendor'))



@app.route('/delete', methods = ['POST',])
def delete():


    client_db.delete_vendor(cnpj=request.form["cnpj"],
                            name =request.form["name"],
                            city=request.form["city"])

    return redirect(url_for('index'))



if __name__ =='__main__':

    app.run(debug=True, port=3000)