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
    });$('body').on('click', '.tab-content .checkbox', function () {
    $(this).toggleClass('checked');
    console.log(this);                
});


// On clicking the "Save My Preferences" button, get the topics and subtopics that the user picked.
$("#submit").on("click", function() {
    var subtopics = [];
    var i;
    var category = [];
    var subcategory = [];
    var picks = [];
    var finalPicks = [];
    var subtopicCount = [];
    var categories = [];
    var subcategories = [];
    var numSubMenus = [];
    var counter = 0;

// Form an array that holds the categories and subcategories selected as user preferences.
    subtopics = $("div").filter(".checked");
    for (i = 0; i < subtopics.length; i++) {
        categories.push(subtopics[i].parentElement.attributes.value.nodeValue);
        subcategories.push(subtopics[i].outerText);
        category.push({"category": subtopics[i].parentElement.attributes.value.nodeValue});
        subcategory.push({"subcategory": subtopics[i].outerText});
        picks.push({"value": category, subcategory});
        finalPicks.push(picks);
    }        

    console.log("categories: ", categories);
    console.log("subcategories: ", subcategories);
    console.log("subtopics: ", subtopics);
    console.log("category: ", category);
    console.log("subcategory: ", subcategory);
    console.log("picks: ", picks);
    console.log("finalPicks: ", finalPicks);

    var t = {};
    for (var i = 0, l = picks.length; i < l; i++)    {
    t[picks[i].value[i].category] = !t[picks[i].value[i].category] ? 1 : t[picks[i].value[i].category] + 1;
    }
    for (var prop in t) {
        numSubMenus.push(t[prop]);
    }
    console.log("t: ", t);
    console.log("numSubMenus", numSubMenus);

    // _.uniq is from the underscore.js library.
    var sortedCategories = _.uniq(categories);
    console.log("sortedCategories: ", sortedCategories);
    console.log(Object.keys(t).length);

    var counter = 0;
    
    // Create the <ul>, id="linklist", that will hold all of the "main topic" buttons.
    $("#main").append($("<ul>").attr({"class": "nav navbar-nav dropdown-menu", "id": "linklist", "role": "menu"}));
    
    // Dynamically create a button for each of the main topics, and append them to #linklist.
    for (var x = 0; x < sortedCategories.length; x++) {
        $("#linklist")
        .append($("<li>").attr("id", "topic" + [x])
        .append($("<a>").attr({"tab-index": -1, "class": "dropdown-submenu", "id": "link" + [x], "href": "#"})
        .text(sortedCategories[x]).append($("<span>").attr("class", "glyphicon glyphicon-chevron-right pull-right"))));    
        console.log("x: ", x);  

        // Dynamically create buttons for each of the checkbox subtopics, and append them to main topic buttons.
        $("#sublinks").append($("<ul>").attr({"class": "nav navbar-nav dropdown-submenu", "id": "sublinklist" + [x], "role": "menu"}));
        for (var z = 0; z < numSubMenus[x]; z++) {            
                $("#sublinklist" + [x])
                    .append($("<li>").attr("id", "subtopic" + [z])
                    .append($("<a>").attr({"tab-index": 1, "class": "dropdown-menu", "id": "sublink" + [z], "href": "#"})
                    .text(subcategory[counter].subcategory)));
                counter++;
                console.log("x: ", x);
                console.log("z: ", z);
                console.log("counter: ", counter);
                console.log("subcategory[z].subcategory: ", subcategory[z].subcategory);
                console.log("numSubMenus[z]: ", numSubMenus[z]);
        } 
    }   
});