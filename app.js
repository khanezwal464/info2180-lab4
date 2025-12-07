$(document).ready(function() {
    $("#search_Btn").click(function() {
        

        // Background turns grey when search button is clicked
        $("body").css("background-color", "#999");

        $.ajax({
            url: "superheroes.php",
            method: "GET",
            success: function(data) {
                alert(data);
            },
            error: function() {
                alert("Error! Unable to retrieve superheroes!");
                
            }
        });
    });
});

