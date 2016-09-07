var $ = require('jquery');
var printPassTypes = require('./lib/printPassTypes');

$(document).ready(function () {

    $.getJSON('/metropass-api', printPassTypes);
    var piggly = 'wiggly';
  /*  $('form').submit(e => {
        e.preventDefault();
        $.post('/metropass-api', {passtype: $('#passtype').val(), description: $('#description').val()}, printTerms);
        document.forms[0].reset();
    });
*/
});
