



var button_send = $(".button-add-vendor") 





$(".button-show-products").on("click",function(){

    event.preventDefault()

    var row = $(this).parent().parent()

    row.nextUntil("tr.breakDown").slideToggle(200)
})





var buttonAddProduct = $(".button-add-product")

var products = []


buttonAddProduct.on("click",function(){

    var nameProduct = $(".name-product").val()
    var codeProduct = $(".code-product").val()
    var priceProduct = $(".price-product").val()


    var table = $(".listProducts").find("tbody")


    products.push({

        name:nameProduct,
        code:codeProduct,
        price:priceProduct


    })




    var row = newRow(nameProduct,codeProduct,priceProduct)

    table.prepend(row)

    $(".name-product").val("")
    $(".code-product").val("")
    $(".price-product").val("")


})



function newRow(name,code,price){

    var row = $("<tr>")

    var columnName = $("<td>").addClass("name-product").text(name)

    var columnCode= $("<td>").addClass("code-product").text(code)

    var columnPrice= $("<td>").addClass("price-product").text(price)

    var columnRemove = $("<td>")



   

    var link = $("<a>").addClass("remove-button-products").attr("href","#").click(function (){

        console.log("teste concluido")
        
        var row = $(this).parent().parent()

        var name= row.find(".name-product").text()
        var code = row.find(".code-product").text()
        var price = row.find(".price-product").text()

    
        event.preventDefault()
    
        //var row = $(this).parent().parent()
    
        
        row.fadeOut(1000)
    
        setTimeout(function(){
            
            row.remove()
    
        },1000)


        products = products.filter(function(product){


            return product.name!=name || product.code!=code || product.price!=price
    
    
            //return country.name.toLowerCase().startsWith(input)
    
        })
        
    
    })

    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete")



    link.append(icon)

    columnRemove.append(link)

    row.append(columnName)

    row.append(columnCode)

    row.append(columnPrice)

    row.append(columnRemove)


    return row
}





















button_send.on("click",function (){


    var nameVendor = $(".name-vendor").val()
    var cityVendor = $(".city-vendor").val()
    var cnpjVendor = $(".cnpj-vendor").val()


    data = {
        name:nameVendor,
        city:cityVendor,
        cnpj:cnpjVendor,
        products:products
    }


    console.log(data)

    $.post("http://localhost:3000/save",data,function(){


    console.log("Done!")

    })

    $(".name-vendor").val("")
    $(".city-vendor").val("")
    $(".cnpj-vendor").val("")


    $(".tbody_products tr").remove()

})






$(".button-edit").on("click",function (){


    console.log("entrou!")
    var row = $(this).parent().parent()
    
    
    
    var nameVendor = row.find(".name-column").text()
    var cityVendor = row.find(".city-column").text()
    var cnpjVendor = row.find(".cnpj-column").text()

    var products_str = row.find(".products-principal").text().replace(/'/g,'"')

    console.log(products_str)

    var products = JSON.parse(products_str)

    console.log(nameVendor)
    console.log(cityVendor)
    console.log(cnpjVendor)
    console.log(products)

    data = {
        name:nameVendor,
        city:cityVendor,
        cnpj:cnpjVendor,
        products:products
    }


    $.post("http://localhost:3000/edit_data",data,function(){



    console.log("Done!")

    })


})



