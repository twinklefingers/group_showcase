$(document).ready(function() {
    console.log("Shiz werkin");
    loadPeeps();
    //AJAX
    function loadPeeps() {
        $.ajax({
            type: 'GET',
            url: '/people',
            success: function(response) {
                console.log("Load success");
                $('.peeps-container').empty();
                response.forEach(function(peep) {
                    appendDOM(peep);
                });
            }
        });
    };

    //send likes
    function sendLikes(name) {
        var url = '/people/' + name;
        $.ajax({
            type: 'POST',
            url: url,
            success: function(response) {
                console.log("Like Success");
                loadPeeps();
            },
            error: function() {
                console.log("Error: ");
            }
        });
    };

    function appendDOM(peep) {
        $('.peeps-container').append('<div class="people-spot"></div>');
        $el = $(".peeps-container").children().last();
        $el.append('<img class="peep-image" src="' + peep.url + '"></img>');
        $el.append('<h2 class="peep-name">' + peep.name + '</h2>');
        $el.append('<p class="peep-bio">' + peep.bio + '</p>');
        $el.append('<button class="likeButton"><span class="likeCounter">' + peep.likes + '</span>  LIKE ME!!</button>');
        $el.data("name", peep.name);
    }


    //event listener
    $('.peeps-container').on('click', '.likeButton', function() {
        var name = $(this).parent().data("name");
        console.log(name);
        sendLikes(name);
    });

});
