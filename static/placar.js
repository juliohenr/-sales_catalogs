$(".botao-remover").click(removeLinha)
$("#botao-placar").click(mostraPlacar)
$("#botao-sync").click(sincronizaPlacar)

function removeLinha(){

    event.preventDefault()

    var linha = $(this).parent().parent()
    
    linha.fadeOut(1000)

    setTimeout(function(){
        
        linha.remove()

    },1000)

}


function novaLinha(usuario,palavras){

    var linha = $("<tr>")

    var colunaUsuario = $("<td>").text(usuario)

    var colunaPalavras = $("<td>").text(palavras)

    var colunaRemover = $("<td>")

    var link = $("<a>").addClass("botao-remover").attr("href","#")

    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")



    link.append(icone)

    colunaRemover.append(link)

    linha.append(colunaUsuario)

    linha.append(colunaPalavras)

    linha.append(colunaRemover)


    return linha
}


function inserePlacar (){

    var tabela = $(".placar").find("tbody")

    var numeroPalavras = $("#contador-palavras").text()

    var usuario = $("#usuarios").val()

    var linha = novaLinha(usuario,numeroPalavras)

    linha.find(".botao-remover").click(removeLinha)

    tabela.prepend(linha)

    $(".placar").slideDown(600)

}


function scrollPlacar(){

    var posicaoPlacar = $(".placar").offset().top

    console.log(posicaoPlacar)

    $("body, html").animate({ scrollTop: posicaoPlacar+"px" }, "slow" )
}



function mostraPlacar (){

    $(".placar").stop().slideToggle(600)

}


function sincronizaPlacar (){

    var placar = [];

    var linhas = $("tbody>tr")

    linhas.each(function(){

        var usuario = $(this).find("td:nth-child(1)").text()

        var palavras = $(this).find("td:nth-child(2)").text()

        var score = {

            usuario: usuario,
            pontos: palavras
        };


        placar.push(score)

    })

    var dados = {

        placar:placar
    }


    $.post("http://localhost:3000/placar",dados,function(){


        $(".tooltip").tooltipster("open")

        console.log("Salvou no servidor")

    }).fail(function(){

        $(".tooltip").tooltipster("open").tooltipster("content","Falha ao sincronizar!")


    }).always(function(){

        setTimeout(

            function (){

                $(".tooltip").tooltipster("close")

            }, 1400
        )

        
    }

    )

}



function atualizaPlacar(){


    $.get("http://localhost:3000/placar",function (dados){


        $(dados).each(function(){

            var linha = novaLinha(this.usuario,this.pontos)

            linha.find(".botao-remover").click(removeLinha)

            $("tbody").append(linha)

        })


    })

}
