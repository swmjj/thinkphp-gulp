$("#wallet-link").click(function () {
    $.accountLinkInit && $.accountLinkInit()
})

$("#header-more-dropdown").hover(function () {
    $('.header-dropdown').stop(false, true).slideDown();
}, function () {
    $('.header-dropdown').stop(false, true).slideUp();
})