var tech = ["mashable" ,"techcrunch" , "ars-technica" , "hacker-news" , "techradar", "the-verge"];


$(document).on("click", "#tech", function(e) {
    $("#articles").empty();
    e.preventDefault();

    // for (var i=0 ; i<tech.length ; i++){
        // var source = tech[i];
        // var queryNewsAPI = "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&&apiKey=4d56dbec54a3487b9640e2c5ec04077e";
        var params = {
        // Request parameters
            "Category": "technology",
            // "q": "microsoft",
            "count": "10",
            "offset": "1",
            "mkt": "en-us",
            "safeSearch": "Moderate",
            "originalImg" : "true",
        };

        var queryBingAPI = "https://api.cognitive.microsoft.com/bing/v5.0/news/search?"
    
        $.ajax({
            url: queryBingAPI + $.param(params),
            beforeSend: function(key){
            // Request headers
            key.setRequestHeader("Ocp-Apim-Subscription-Key","b588806aaab143e795e7aea9f56a9be6");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(response) {
            console.log(response);

            var results = response.value;

            for (var i = 0; i < results.length; i++) {
                var topicDiv = $("<div class='topicDiv'>");
                var imgTag = $("<img height=100 width=150>");
                var imgURL = results[i].image.contentUrl;
                imgTag.attr("src", results[i].image.contentUrl);
                topicDiv.prepend(imgTag);
                var p = $("<p>").prepend(results[i].name);              
                topicDiv.append(p);
                $("#articles").prepend(topicDiv);
            } //for loop
        });
    // } // for loop main
}); // onclick event