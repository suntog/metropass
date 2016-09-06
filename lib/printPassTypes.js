var $ = require('jquery');

module.exports = function printTerms(passTypes) {
    $('dl#metropass-types').empty();
    $.each(passTypes, function () {
        $('<dt>').text(this.passtype).appendTo('dl#metropass-types');
        $('<dd>').text(this.description).appendTo('dl#metropass-types');
        $('<dd>').text("Discount Rate:").appendTo('dl#metropass-types');
        $.each(this.discount, function (key, value){
          $('<dd>').text(`${key}: ${value}%`).appendTo('dl#metropass-types');
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
