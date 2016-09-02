var $ = require('jquery');

module.exports = function printTerms(passTypes) {
    $('body>dl').empty();
    $.each(passTypes, function () {
        $('<dt>').text(this.passtype).appendTo('body>dl');
        $('<dd>').text(this.description).appendTo('body>dl');
        $('<dd>').text("Discount Rate:").appendTo('body>dl');
        $.each(this.discount, function (key, value){
          console.log(`key: ${key}, value: ${value}` );
          $('<dd>').text(`${key}: ${value}%`).appendTo('body>dl');
        });

    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/metropass-api/' + $(this).text(),
            type: 'DELETE',
            success: printPassTypes
        });
    });
};
