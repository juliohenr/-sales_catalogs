$(".button-show-products").on("click",function(){

    event.preventDefault()

    var row = $(this).parent().parent()

    row.nextUntil("tr.breakDown").slideToggle(200)
})
