
    //Initial array of animals
    var topics = ["cat","dog","frog","rabbit","turtle","hamster"];

//Function for the buttons creation
function buttonsTopics(){

$("#animal-buttons").empty();

//Looping through the array of the topics
for(var i=0; i<topics.length; i++){
    //generating buttons for each topic in the array
    var a =$("<button>");
    //Adding a class of animal-btn to our button
    a.addClass("animal-btn");
    //Adding a data-attribute
    a.attr("data-name", topics[i]);
    //Providing the initial button text
    a.text(topics[i]);
   //Adding the button to the animal-buttons div
   $("#animal-buttons").append(a);
   console.log(topics);

}

}




$("#animal-buttons").on("click", '.animal-btn', function(){
    var whichAnimal =$(this).attr("data-name");
    console.log(whichAnimal);
   
    //Define variable for the API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + whichAnimal + "&api_key=EUFpjo8f4hi5Cr9D57Ff05spEpNxgqgD";
    // var queryURL = "https://api.giphy.com/v1/gifs/random?q=" + whichAnimal + "&api_key=EUFpjo8f4hi5Cr9D57Ff05spEpNxgqgD";
    //Making the AJAX call to the queryURL using jQuery
        $.ajax({
            url: queryURL,
            method: "GET"
        })
      //Run this code when the API returns some data
        .then(function(response) {
            console.log(response);

        //  console.log(response.data.images.fixed_width.url);
        //  console.log(response.data.images.fixed_height_small_still.url);

        //  var movingGif = response.data.images.fixed_width.url;
        //  var stillGif = response.data.images.fixed_height_small_still.url;

        //Defining a variable that is the url of an image

        // var animalImage = $('<img src="' + stillGif + '">');
        //     $('#animalsGifs').prepend(animalImage);


            var results = response.data;
            for (var i=0; i< 10; i++){
                var gifDiv = $("<div class='gif'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animalImage = $("<img>");

                var movingGif = results[i].images.fixed_height.url;
                var stillGif = results[i].images.fixed_height_still.url;

                // animalImage.attr("src",results[i].images.fixed_height_still.url);
                // animalImage.attr("src",results[i].images.fixed_height_still.url);
                animalImage.attr("src", stillGif);
                // animalImage.attr("src", movingGif);
                // animalImage.attr("src",results[i].images.fixed_height.url);
                // animalImage.attr("src",results[i].images.fixed_height.url, data-state, "still", data-animate);
                gifDiv.prepend(p);
                gifDiv.prepend(animalImage);
                $("#animalsGifs").prepend(gifDiv);
                
            }

        })

})

        

$(".gif").on("click",function() {

    

    var movingGif = response.data.images.fixed_height.url;
    var stillGif = response.data.images.fixed_height_still.url;

     animalImage.attr("src",movingGif );
    //  animalImage.attr("src",stillGif );
     $('#animalsGifs').prepend(animalImage);

    //  gifDiv.prepend(animalImage);
            // $('#animalsGifs').prepend(gifDiv);
// })

    
    // var state = $(this).attr("data-state");
    // var state = $(this).attr(movingGif);
    var state = $(this).attr("src",stillGif);
//     // var state = $(this).attr("src",results[i].images.fixed_height_still.url);
    
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     // if (state === "still") {
        // if (state === stillGif) {
            if (state === state) {
//         // $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("src", $(this).attr("src",movingGif));
//         // $(this).attr( $(this).attr(movingGif));
//         // $(this).attr("src", $(this).attr("src",results[i].images.fixed_height.url));
//         // $(this).attr("data-state", "animate");
        $(this).attr("src",movingGif );
//         // $(this).attr("src",results[i].images.fixed_height_still.url, "src",results[i].images.fixed_height.url );
      } else {
//         // $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("src", $(this).attr(stillGif));
//         // $(this).attr("src", $(this).attr(stillGif));
//         // $(this).attr("src", $(this).attr("src",results[i].images.fixed_height_still.url));
//         $(this).attr("data-state", "still");
        $(this).attr("src",stillGif);
//         // $(this).attr("src",results[i].images.fixed_height_still.url, "still");
  }
})


// This function handles events where one button is clicked
$("#add-animal").on("click", function(event){
    // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        //// This line will grab the text from the animal-input box
        var animalNew = $("#animal-input").val().trim();
        // The form-animals the textbox is then added to our array
        topics.push(animalNew);
         // calling buttonsTopics which handles the processing of our topics array
        buttonsTopics();

});
// Calling the buttonsTopics function at least once to display the initial list of topics
buttonsTopics();
