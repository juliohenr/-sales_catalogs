$("#botao-frase").click(fraseAleatoria)
$("#botao-frase-id").click(buscaFrase)

function fraseAleatoria (){

    $("#spinner").show()

    $.get("http://localhost:3000/frases",trocaFraseAleatoria).fail(function(){


        $("#erro").show()

        setTimeout(function(){
            $("#erro").toggle()
        },2000)
    }).always(function(){

        $("#spinner").toggle()
    })

}

function trocaFraseAleatoria (data){
    
    var frase = $(".frase")

    var numeroAleatorio = Math.floor(Math.random()*data.length)

    var tempo = data[numeroAleatorio].tempo
    
    frase.text(data[numeroAleatorio].texto)

    atualizaTamanhoFrase()

    atualizaTempoIncial(tempo)
    
    }


function buscaFrase (){

    var fraseId = $("#frase-id").val()

    $("#spinner").show()

    console.log(fraseId)

    var dados = {id: fraseId}

    $.get("http://localhost:3000/frases",dados,trocaFrase).fail(function(){


        $("#erro").show()

        setTimeout(function(){
            $("#erro").toggle()
        },2000)
    }).always(function(){

        $("#spinner").toggle()
    })


}




function trocaFrase (data) {

    console.log(data)

    var frase = $(".frase")

    var tempo = data.tempo
    
    frase.text(data.texto)

    atualizaTamanhoFrase()

    atualizaTempoIncial(tempo)
}