$(document).ready(function() {
    
    $('#get-data').click(function() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data) {

            let dane = $('#dane-programisty').text(`Imię: ${data.imie} Nazwisko: ${data.nazwisko} Zawód: ${data.zawod} Firma: ${data.firma}`);

            jqBody.append(dane);
        })
        .fail(function(error) {
            console.error(error);
        });

    });

});