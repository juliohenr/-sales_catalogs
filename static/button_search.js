var countries = [

    {name:"USA"},
    {name:"UK"},
    {name:"BR"},
    {name:"Russia"},
    {name:"China"},
    {name:"Inglaterra"},
    {name:"Bolivia"}
]

var searchInput = $(".search-input");

var suggestionsPanel = $(".suggestions");

searchInput.on("input", function(){


    suggestionsPanel.text('')

    const input = searchInput.val()



    if(input!=""){

    console.log("entrei!")

    const input = searchInput.val()


    var suggestions = countries.filter(function(country){


        var digitado = input.toLowerCase()
    
        var comparavel = country.name.toLowerCase().substr(0,digitado.length)
    
        
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

        console.log(singleSuggestion)

    });}

})
