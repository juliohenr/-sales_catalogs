from pymongo import MongoClient

client = MongoClient("localhost",port=27017)['sales-catalogue']

client["vendors"].insert_many([

{
    "Name" : "Marcela Amaral",
    "CNPJ" : "02828446000134",
    "City" : "rio de janeiro",
    "products" : [ 
        {
            "name" : "mesa",
            "code" : "123",
            "price" : "200"
        }, 
        {
            "name" : "cadeira",
            "code" : "350",
            "price" : "100"
        }, 
        {
            "name" : "casa",
            "code" : "520",
            "price" : "450"
        }
    ]
},

{
   
    "Name" : "Gabriel da Silva",
    "CNPJ" : "39501564000143",
    "City" : "Seropédica",
    "products" : [ 
        {
            "name" : "caneta",
            "code" : "523",
            "price" : "10"
        }, 
        {
            "name" : "lápis",
            "code" : "563",
            "price" : "12"
        }, 
        {
            "name" : "borracha",
            "code" : "456",
            "price" : "14"
        }
    ]
}
,

{
   
    "Name" : "Denison Cardoso",
    "CNPJ" : "25144592000146",
    "City" : "Nova Iguaçu",
    "products" : [ 
        {
            "name" : "computador",
            "code" : "582",
            "price" : "2000"
        }, 
        {
            "name" : "notebook",
            "code" : "630",
            "price" : "3000"
        }
    ]
}
,

{
    
    "Name" : "Ricardo Almeida",
    "CNPJ" : "02930089000110",
    "City" : "São Paulo",
    "products" : [ 
        {
            "name" : "caderno",
            "code" : "895",
            "price" : "10"
        }, 
        {
            "name" : "tablet",
            "code" : "456",
            "price" : "700"
        }
    ]
},

{
   
    "Name" : "Ronaldo Cardoso",
    "CNPJ" : "06914095000135",
    "City" : "Bauru",
    "products" : [ 
        {
            "name" : "televisão",
            "code" : "896",
            "price" : "1200"
        }, 
        {
            "name" : "video game",
            "code" : "789",
            "price" : "4000"
        }
    ]
},

{
    
    "Name" : "Geovanni Lacerda",
    "CNPJ" : "25533645000110",
    "City" : "Araçatuba",
    "products" : [ 
        {
            "name" : "teclado",
            "code" : "896",
            "price" : "100"
        }, 
        {
            "name" : "mouse",
            "code" : "789",
            "price" : "70"
        }
    ]
},

{
  
    "Name" : "Carlos Nunes",
    "CNPJ" : "03639738000191",
    "City" : "São Paulo",
    "products" : [ 
        {
            "name" : "quadros",
            "code" : "789",
            "price" : "70"
        }, 
        {
            "name" : "tinta",
            "code" : "789",
            "price" : "80"
        }
    ]
},

{
   
    "Name" : "Adriana Amaral",
    "CNPJ" : "67428110000120",
    "City" : "rio de janeiro",
    "products" : [ 
        {
            "name" : "mesa",
            "code" : "457",
            "price" : "70"
        }, 
        {
            "name" : "cadeira",
            "code" : "852",
            "price" : "50"
        }
    ]
},

{
    
    "Name" : "Julio Souza",
    "CNPJ" : "09389786000155",
    "City" : "São Paulo",
    "products" : [ 
        {
            "name" : "camisa",
            "code" : "852",
            "price" : "45"
        }, 
        {
            "name" : "short",
            "code" : "785",
            "price" : "107"
        }
    ]
},

{
 
    "Name" : "João Peixoto",
    "CNPJ" : "05138689000139",
    "City" : "Curitiba",
    "products" : [ 
        {
            "name" : "Jaqueta",
            "code" : "785",
            "price" : "500"
        }, 
        {
            "name" : "óculos",
            "code" : "856",
            "price" : "400"
        }
    ]
}


]

)