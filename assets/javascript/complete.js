/***************************************************************************************************************
Javascript for Calling the newsapi.org API
****************************************************************************************************************/
// Initialize variables
  var source = "";
  var sortBy = "";
  var author = "";
  var title = "";
  var description = "";
  var articleURL = ""; 
  var imageURL = "";
  var publishTime = "";
  var userInput = "";

    // Visibility Variables
  var feed1 = false;
  var feed2 = false;
  var feed3 = false;

  // Variables to target feeds
  var targetFeed1 = $('#feed-1');
  var targetFeed2 = $('#feed-2');
  var targetFeed3 = $('#feed-3');

  // Variables for removing feeds
  var removeFeed1 = $('#remove-feed-1');
  var removeFeed2 = $('#remove-feed-2');
  var removeFeed3 = $('#remove-feed-3');

  var sourceChoice = "";
  var categoryChoice = "";
  var callSource = "";

  




/***************************************************************************************************************
Javascript for Modal
****************************************************************************************************************/
$(document).ready(function(){

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
});
});