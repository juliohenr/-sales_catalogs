
from pymongo import MongoClient


class Catalogue_DB:

    def __init__(self,port=27017):

        self.client = MongoClient("localhost",port=port)['sales-catalogue']
        

    def list_documents(self):

        return list(self.client["vendors"].find({}))

    def insert_vendor(self,name,cnpj,city,products):

        self.client["vendors"].insert_one({

            'Name': name,
            'CNPJ':cnpj,
            'City': city,
            'products': products}
        )

    def search_name(self,name):

        return self.client["vendors"].find_one({"name":name})

    def search_cnpj(self,cnpj):

        return self.client["vendors"].find_one({"cnpj":cnpj})