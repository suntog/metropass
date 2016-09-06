var $ = require('jquery');
var printTerms = require('./lib/printPassTypes');

$(document).ready(function () {

    $.getJSON('/metropass-api', printTerms);
    $('form').submit(e => {
        e.preventDefault();
        $.post('/metropass-api', {passtype: $('#passtype').val(), description: $('#description').val()}, printTerms);
        document.forms[0].reset();
    });

});
