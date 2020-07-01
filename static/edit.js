



var products_str = $(".edit-products").val().replace(/'/g,'"')

var products = JSON.parse(products_str)


var buttonAddProduct = $(".button-add-product")

var button_edit = $(".button-edit-vendor") 


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

button_edit.on("click",function (){


  
    var nameVendor = $(".name-vendor").val()
    var cityVendor = $(".city-vendor").val()
    var cnpjVendor = $(".cnpj-vendor").val()


    var nameVendorOld = $(".name-vendor-old").val()
    var cityVendorOld = $(".city-vendor-old").val()
    var cnpjVendorOld = $(".cnpj-vendor-old").val()


    data = {
        name:nameVendor,
        city:cityVendor,
        cnpj:cnpjVendor,
        nameOld:nameVendorOld,
        cityOld:cityVendorOld,
        cnpjOld:cnpjVendorOld,
        products:products
    }




    $.post("http://localhost:3000/update",data,function(){


    })

    $(".name-vendor").val("")
    $(".city-vendor").val("")
    $(".cnpj-vendor").val("")


    $(".tbody_products tr").remove()

})



$(function(){
    $(".remove-button-products").on("click",function (){

        
        var row = $(this).parent().parent()

        var name= row.find(".name-product").text()
        var code = row.find(".code-product").text()
        var price = row.find(".price-product").text()

    
        event.preventDefault()
    
        
        row.fadeOut(1000)
    
        setTimeout(function(){
            
            row.remove()
    
        },1000)

   

        products = products.filter(function(product){


            return product.name!=name || product.code!=code || product.price!=price
    
    
        })

    
    })})





    function newRow(name,code,price){

        var row = $("<tr>")
    
        var columnName = $("<td>").addClass("name-product").text(name)
    
        var columnCode= $("<td>").addClass("code-product").text(code)
    
        var columnPrice= $("<td>").addClass("price-product").text(price)
    
        var columnRemove = $("<td>")
    
    
        var link = $("<a>").addClass("remove-button-products").attr("href","#").click(function (){

            
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
    
