var tech = ["mashable" ,"techcrunch" , "ars-technica" , "hacker-news" , "techradar", "the-verge"];


$(document).on("click", "#tech", function(e) {
    $("#articles").empty();
    e.preventDefault();

    for (var i=0 ; i<tech.length ; i++){
        var source = tech[i];
        var queryURL = "https://api.cognitive.microsoft.com/bing/v5.0/news/search?";
        
        $(function() {
        var params = {
            // Request parameters
            "q": "microsoft",
            "count": "10",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
        };
        
        $.ajax({
            url: queryURL + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{4fb523cea4d446cb8de0801daebdf1fe}");
            },
            type: "GET",
            // Request body
            data: "{body}",

        }).done(function(response) {
            console.log(response);

            // var results = response.articles;

            // console.log(response);

            // for (var i = 0; i < results.length; i++) {
            //     var topicDiv = $("<div class='topicDiv'>");
            //     var imgTag = $("<img height=100 width=150>");
            //     var imgURL = results[i].urlToImage;
            //     var p = $("<p>").prepend(results[i].title);
            //     imgTag.attr("src", results[i].urlToImage);
            //     topicDiv.prepend(imgTag);
            //     topicDiv.append(p);
            //     $("#articles").prepend(topicDiv);
            // }
        }); //done


        } // function

} //loop


}); // onclick event