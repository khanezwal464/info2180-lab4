$(document).ready(function() {
    // Click Event Handler
    $("#search_Btn").click(function() {
        
        const query = $("#search_Field").val().trim(); 

        $.ajax({
            url: "superheroes.php",
            method: "GET",
           
            data: { query: query }, 
            
            // Handling successful response 
            success: function(data) {
                // Hiding the heroE-Result div, replacing its content with the data from PHP and fading it back in.
                $("#heroResult").hide().html(data).fadeIn(200);
            },
            
            // Handling unsuccessful response
            error: function() {
                $("#heroResult").html("<p class='error'>Error! Unable to retrieve superheroes at this time!</p>");
            }
        });
    });
});
