 

 $('button').on("click", function(){

    // Set x equal to user input
      var x = $(this).data("animal");

    // Set the URL and API key to a variable, queryURL
      var queryURL = "http://newsapi.org/v1/articles?source=" + sourceQuery + "&apiKey=4d56dbec54a3487b9640e2c5ec04077e";

    // Use ajax to make a call to the api with the "GET" method.
      $.ajax({url:queryURL,method:"GET"})

    // When it completes the call and receives a response...

      .done(function(response){
      for(var i=0; i < 10; i++){

    // Create a variable containing a <div> tag
        var articleDiv = $('<div>');
        var p = $('<p>').text("Description: " + response.articles[i].title);

    // Set resultImage to an <img> tag
        var resultImage = $('<img>');

    // Give the <img> tag an attribute 
        resultImage.attr('src',response.articles[i].urlToImage);
        articleDiv.append(p);
        articleDiv.append(resultImage);
        $('#articleArea').append(articleDiv);
      }
      })
    })