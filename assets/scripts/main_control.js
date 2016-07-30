const documentEvents = function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
    });
}

$(document).ready(function() {
    documentEvents()
});
