$("#bus").click(() => {
    $(".bus-list").toggleClass("active")
    $("#search-area").removeClass("search-area-margin")
})

$("#restaurant").click(() => {
    $(".restaurant-list").toggleClass("active")
    $("#content").toggleClass("display")
    $("#search-area").removeClass("search-area-margin")
})

$("#shop").click(() => {
    $(".shop-list").toggleClass("active")
    $("#search-area").removeClass("search-area-margin")
})