

$(".remove-button").click(removeLinha)



function removeLinha(){


    
    var row = $(this).parent().parent()

    var column_cnpj = row.find(".cnpj-column").text()

    var column_name = row.find(".name-column").text() 

    var column_city =  row.find(".city-column").text() 


    
    data = {

        name:column_name,
        city:column_city,
        cnpj:column_cnpj

    }


    $.post("http://localhost:3000/delete",data,function(){
        
    
    event.preventDefault()

    //var row = $(this).parent().parent()

    row.nextUntil("tr.breakDown").hide(200)

    
    row.fadeOut(1000)

    setTimeout(function(){
        
        row.remove()

    },1000)
    
    
    })
        
    
    }
