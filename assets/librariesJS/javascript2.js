var tech = ["mashable" ,"techcrunch" , "ars-technica" , "hacker-news" , "techradar", "the-verge"];


$(document).on("click", "#tech", function(e) {
    $("#articles").empty();
    e.preventDefault();


    //some code from dealing with the first API
    // for (var i=0 ; i<tech.length ; i++){
        // var source = tech[i];
        // var queryNewsAPI = "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&&apiKey=4d56dbec54a3487b9640e2c5ec04077e";

        //Parameters that we gonna request from bing
        var params = {
        // Request parameters
            "q": "microsoft", //regular search
            "count": "10", //amount of objects in request
            "offset": "1", // since bing for some reason doesn't give you the image with the first object and this crap doesn't want to pull another images , we will start from pulling next object in array so we will be able to work with images
            "mkt": "en-us", //market English-USA nothing to add here
            "safeSearch": "Moderate", //tells query to not to give you NSFW images but allows hard language texts
            "originalImg" : "true", // without this parameter bing gives you only the crappy image templates instead of real images
        };

        var queryBingAPI = "https://api.cognitive.microsoft.com/bing/v5.0/news/search?"  //bing endpoint
    
        $.ajax({
            url: queryBingAPI + $.param(params),
            beforeSend: function(key){
            // Request headers
            key.setRequestHeader("Ocp-Apim-Subscription-Key","b588806aaab143e795e7aea9f56a9be6");  // careful don't do much queries I've already used maybe 400 out of 1000
            },
            type: "GET",
            // Request body
            data: "{body}",  // ¯\_(ツ)_/¯ just don't touch it
        })
        .done(function(response) {
            console.log(response);

            var results = response.value; //simplified it 

            for (var i = 0; i < results.length; i++) {      //for loop to go through all objects in an array and to make appropriate containers for them
                var topicDiv = $("<div class='topicDiv'>");  
                var imgTag = $("<img height=100 width=150>");
                var imgURL = results[i].image.contentUrl;  // pulling out the images
                imgTag.attr("src", results[i].image.contentUrl);  // put the images into img tag 
                topicDiv.prepend(imgTag);                  // prepends img tag with pulled out image into newly created div tag
                var p = $("<p>").prepend(results[i].name); // defines a title of the article as var            
                topicDiv.append(p);                        //  prepends paragraph into the same div where article image goes
                $("#articles").prepend(topicDiv);          //  all this divs with the articles and images would go to the on big div . More divs to the god of divs!
            } //for loop
        });
    // } // for loop main
}); // onclick event