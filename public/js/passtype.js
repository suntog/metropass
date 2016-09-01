$(document).ready(function () {

    $.getJSON('/pass-types', printPass);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/pass-types', {passtype $('#passtype').val(), discount: $('#discount').val()}, printTerms);
        this.reset();
    });

});

function printPass(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.type).appendTo('body>dl');
        $('<dd>').text(this.discount).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/pass-types/' + $(this).text(),
            type: 'DELETE',
            success: printPass
        });
    });
}
