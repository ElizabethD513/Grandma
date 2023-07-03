$(".growing-image").click(function(e) {
    e.stopPropagation()
    $(".growing-image.enlarge").removeClass("enlarge");
    $(this).addClass("enlarge")

})  

$("body").click(function(e) {
    $(".growing-image.enlarge").removeClass("enlarge");

})  