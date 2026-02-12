
$("h1").css("color", "red");


// $(document).keydown( function(event){
//     $("h1").text(event.key);
// })

// $("button").click( function(){
//     $("h1").slideToggle();
// })

$("button").click( function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.7});
})
