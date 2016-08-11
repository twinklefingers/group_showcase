$(document).ready(function() {
    console.log("Shiz werkin");
    loadPeeps();
    //listener

    //AJAX
    function loadPeeps() {
        $.ajax({
            type: 'GET',
            url: '/people',
            success: function(response) {
                response.forEach(function(peeps) {
                    appendDOM(peeps);
                });
            }
        });
    };

    function appendDOM(peeps) {
        $('.peeps-container').append('<div class="people-spot"></div>');
        $el = $(".peeps-container").children().last();
        $el.append('<img class="peep-image" src="' + peeps.url + '"></img>');
        $el.append('<h2 class="peep-name">' + peeps.name + '</h2>');
        $el.append('<p class="peep-bio">' + peeps.bio + '</p>');
    }


});
