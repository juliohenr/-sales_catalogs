var button_send = $(".button-add-vendor") 

$(".button-show-products").on("click",function(){

    event.preventDefault()

    var row = $(this).parent().parent()

    row.nextUntil("tr.breakDown").slideToggle(200)
})


$(".remove-button").click(removeLinha)




function removeLinha(){

    console.log("okay")

    var row = $(this).parent().parent()



    //
    var row = $(this).parent().parent()

    var column_cnpj = row.find(".cnpj_column")

    var column_name = row.find(".name_column")

    var column_city = row.find(".city_column")

    data = {

        name:column_name.text(),
        city:column_city.text(),
        cnpj:column_cnpj.text()

    }


    $.post("http://localhost:3000/delete",data,function(){
        
    
    event.preventDefault()

    //var row = $(this).parent().parent()

    row.nextUntil("tr.breakDown").hide(200)

    
    row.fadeOut(1000)

    setTimeout(function(){
        
        row.remove()

    },1000)
    
    
    console.log("teste concluido")})
        
    
    }


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

    var columnName = $("<td>").text(name)

    var columnCode= $("<td>").text(code)

    var columnPrice= $("<td>").text(price)

    var columnRemove = $("<td>")

    var link = $("<a>").addClass("botao-remover").attr("href","#")

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







