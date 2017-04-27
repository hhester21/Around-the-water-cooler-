 

 $(document).ready(function(){
  console.log("READY!");
  // Initialize variables
  var source = "";
  var sortBy = "";
  var author = "";
  var title = "";
  var description = "";
  var articleURL = ""; 
  var imageURL = "";
  var publishTime = "";
  var userInput = $('#user-query-input').val();
 
$('#query-submit').on('click', function() {
  userInput = $('#user-query-input').val();
  console.log(userInput);
});

 $('#time').on('click', function(){
  console.log("CLICK");

    // Set sourceQuery equal to user input
      var sourceQuery ="hacker-news"; 
      console.log(sourceQuery);
      // $(this).data("source");

    // Set the URL and API key to a variable, queryURL
      var queryURL ="https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=4d56dbec54a3487b9640e2c5ec04077e";
 console.log(queryURL);
    // Use ajax to make a call to the api with the "GET" method.
      $.ajax({url:queryURL,method:"GET"})

    // When it completes the call and receives a response...
      .done(function(response){
        console.log(response);
      for(var i = 0; i < 10; i++){
    // Create a variable containing a <div> tag
        var articleDiv = $('<div> "HI"');

    // Use the data from the API response to set variables for each piece of data that is retrieved
        source = response.source;
        sortBy = response.sortBy;    
        title = response.articles[i].title;
        author = response.articles[i].author;
        description = response.articles[i].description;
        articleURL = response.articles[i].url;
        imageURL = response.articles[i].urlToImage;
        publishTime = response.articles[i].publishedAt;

    // Create variables for the HTML of the text that will be displayed on the page.
        sourceText = $('<span>').text("Source: " + source);
        sortByText = $('<span>').text("Sorted by: " + sortBy); 
        titleText = $('<span>').html("Title: " + title + '<br>');
        authorText = $('<span>').html("Author: " + author + '<br>');
        descriptionText = $('<span>').text("Description: " + description);
        articleURLText = $('<span>').text("Article URL: " + articleURL);
        imageURLText = $('<span>').text("Image URL: " + imageURL);
        publishTimeText = $('<p>').text("Published at: " + publishTime);

        console.log(title);
        console.log(author);

    // Set resultImage to an <img> tag
        var resultImage = $('<img>');

    // Give the <img> tag an attribute 
        resultImage.attr('src',imageURL);

      // Append the article image to the articleDiv...
        articleDiv.append(resultImage);

    // Append the title of the article to the articleDiv
        articleDiv.append(titleText);
        // console.log(title);

    // Append the author of the article to the articleDiv
       articleDiv.append(authorText);

  

    // and the contents of the articleDiv variable to the #articleArea <div>
        $('#articleArea').append(articleDiv);

        $('#feed1').append(resultImage);
      }
      var imageTags = $('img');
      imageTags.width(200);
      imageTags.css({'border-radius': '20%'});
      // console.log(title);
      });
    