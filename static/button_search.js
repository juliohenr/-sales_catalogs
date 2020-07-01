var names = []


var tableRegisters = $(".breakDown");

tableRegisters.each(function(){names.push({name:$(this).find(".name-column").text()})})

var searchInput = $(".search-input");

var suggestionsPanel = $(".suggestions");

var buttonSearch = $(".button-confirm-search")


buttonSearch.on("click",function(){


    tableRegisters.each(function(){

        
        
        if ($(this).find(".name-column").text()!=$(".search-input").val()){


            $(this).hide()


        }
    
    
    
    
    
    })





})



searchInput.on("input", function(){


    
    tableRegisters.each(function(){

        
        if ($(this).find(".name-column").text()!=$(".search-input").val()){


            $(this).show()


        }



    
    
    
    
    
    })
    
    
    
    
    
    suggestionsPanel.text('')

    const input = searchInput.val()



    if(input!=""){


    const input = searchInput.val()


    var suggestions = names.filter(function(name){


        var digitado = input.toLowerCase()
    
        var comparavel = name.name.toLowerCase().substr(0,digitado.length)
    
        
        return digitado==comparavel


        //return country.name.toLowerCase().startsWith(input)

    })



  
    suggestions.forEach(function(suggested){

        var singleSuggestion = $('<div></div>').text(suggested.name).click(function(){
            
            searchInput.val(suggested.name)

            suggestionsPanel.text('')

        });

        singleSuggestion.text(suggested.name)

        suggestionsPanel.append(singleSuggestion)


    });}

})




searchInput.on("focus", function(){


    
    tableRegisters.each(function(){


        
        
        if ($(this).find(".name-column").text()!=$(".search-input").val()){


            $(this).show()


        }

    
    })
    
    
    
    
    
    suggestionsPanel.text('')

    const input = searchInput.val()



    if(input!=""){


    const input = searchInput.val()


    var suggestions = names.filter(function(name){


        var digitado = input.toLowerCase()
    
        var comparavel = name.name.toLowerCase().substr(0,digitado.length)
    
        
        return digitado==comparavel


        //return country.name.toLowerCase().startsWith(input)

    })



  
    suggestions.forEach(function(suggested){

        var singleSuggestion = $('<div></div>').text(suggested.name).click(function(){
            
            searchInput.val(suggested.name)

            suggestionsPanel.text('')

        });

        singleSuggestion.text(suggested.name)

        suggestionsPanel.append(singleSuggestion)


    });}

})



$(".search-input").on("focusout",function(){


    setTimeout(function(){suggestionsPanel.text("")},500)
    

})