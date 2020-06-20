var buttonAddProduct = $(".button-add-product")




buttonAddProduct.on("click",function(){

    var nameProduct = $(".name-product").val()
    var codeProduct = $(".code-product").val()
    var priceProduct = $(".price-product").val()


    var table = $(".listProducts").find("tbody")



    var row = newRow(nameProduct,codeProduct,priceProduct)

    table.prepend(row)




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




    

