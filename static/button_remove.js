

$(".remove-button").click(removeLinha)



function removeLinha(){

    console.log("okay")

    
    var row = $(this).parent().parent()

    console.log(row)

    var column_cnpj = row.find(".cnpj-column").text()

    console.log(column_cnpj)

    var column_name = row.find(".name-column").text() 

    var column_city =  row.find(".city-column").text() 


    
    data = {

        name:column_name,
        city:column_city,
        cnpj:column_cnpj

    }

    console.log(data)


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
