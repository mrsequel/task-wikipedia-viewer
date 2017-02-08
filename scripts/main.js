'use strict';

var $search = document.querySelector('.search');
var $find = document.querySelector('.find');

$search.addEventListener("keydown", function (e) {
    if (e.keyCode == "13") {
        document.querySelector('.container').innerHTML = "";
        var inputValue = $find.value;
        var api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=';
        var url = api + inputValue;
        console.log(url);
        $.getJSON(url, function (data) {
            $.each(data.query.pages, function (i) {
                $('.container').append("<h1><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid +
                    "' target='_blank'>" + data.query.pages[i].title + "</a></h1>");
            });

        });
    }
});
