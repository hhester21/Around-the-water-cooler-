


/***************************************************************************************************************
Javascript for Calling the newsapi.org API
****************************************************************************************************************/

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

  var c = $(".stoppable canvas")[0];
var w = c.width;
var h = c.height;
var img = $(".stoppable img")[0];


console.log(sourceChoice);

  // Feed Fader Function Logic
  function fader(){
    event.preventDefault();
    event.stopPropagation();
    if ((feed1 === false) && (feed2 === false) && (feed3 === false)){
      targetFeed1.fadeIn(1500);
      targetFeed1.css({
        "display" : "inline",});
      // feed1 = true;
    }
    else if((feed1 === true) && (feed2 === false) && (feed3 === false)){
      targetFeed2.fadeIn(1500);
      targetFeed2.css({
        "display" : "inline",
      });
      // feed2 = true;
    }
    else if((feed1 === true) && (feed2 === true) && (feed3 === false)){
      targetFeed3.fadeIn(1500);
      targetFeed3.css({
        "display" : "inline",
      });
      // feed3 = true;
      $('#add-feed').removeClass('btn-info');
      }
    else if((feed1 === false) && (feed2 === true) && (feed3 === false)){
      targetFeed1.fadeIn(1500);
      targetFeed1.css({
        "display" : "inline",
      });
      // feed1 = true;
    }
    else if((feed1 === false) && (feed2 === true) && (feed3 === true)){
      targetFeed1.fadeIn(1500);
      targetFeed1.css({
        "display" : "inline",
      });
      // feed1 = true;
      $('#add-feed').removeClass('btn-info');
    }
    else if((feed1 === false) && (feed2 === false) && (feed3 === true)){
      targetFeed1.fadeIn(1500);
      targetFeed1.css({
        "display" : "inline",
      });
      // feed1 = true;
    }
    else if((feed1 === true) && (feed2 === false) && (feed3 === true)){
      targetFeed2.fadeIn(1500);
      targetFeed2.css ({
        "display" : "inline",
      });
      // feed2 = true;
      $('#add-feed').removeClass('btn-info');
    }
    else if ((feed1 === true) && (feed2 === true) && (feed3 === true)){
      $('#errorModal').modal({
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
      });
    }
  };

// 'Add a Feed' User Decision Modal
function addFeed(event){
  event.preventDefault();
  event.stopPropagation();
  $('#add-a-feed-modal').modal({
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
}

function saveFeed(){
  event.stopPropagation();
   $('#save-feed').on('click', function(){
    sourceChoice = $('#source-choice').val();
    console.log(sourceChoice);
    categoryChoice = $('#category-choice').val();
    console.log(categoryChoice);
    apiCall();
    $('#add-a-feed-modal').modal('hide');
  })
}

function apiCall(){
      // Set the URL and API key to a variable, queryURL
  var queryURL ="https://newsapi.org/v1/articles?source=" + sourceChoice + "&apiKey=4d56dbec54a3487b9640e2c5ec04077e";
  console.log(queryURL);
   // Use ajax to make a call to the api with the "GET" method.
      $.ajax({url:queryURL,method:"GET"})

    // When it completes the call and receives a response...

      .done(function(response){
        console.log(response);



      for(var i = 0; i < 10; i++){
    // Create a variable containing a <div> tag
        var articleDiv = $('<div>');

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

      // Append the article image to the articleDiv
        articleDiv.append(resultImage);

    // Append the title of the article to the articleDiv
        articleDiv.append(titleText);
        // console.log(title);

    // Append the author of the article to the articleDiv
       articleDiv.append(authorText);  

    // and the contents of the articleDiv variable to the #articleArea <div>
    if ((feed1 === false) && (feed2 === false) && (feed3 === false)){
      $('#feed-1').append(articleDiv);
      $('#feed-1').append(resultImage);
      // feed1 = true;
    }
    else if((feed1 === true) && (feed2 === false) && (feed3 === false)){
     $('#feed-2').append(articleDiv);
      $('#feed-2').append(resultImage);
      // feed2 = true;
    }
    else if((feed1 === true) && (feed2 === true) && (feed3 === false)){
     $('#feed-3').append(articleDiv);
      $('#feed-3').append(resultImage);
      // feed3 = true;
      }
    else if((feed1 === false) && (feed2 === true) && (feed3 === false)){
    $('#feed-1').append(articleDiv);
      $('#feed-1').append(resultImage);
      // feed1 = true;
    }
    else if((feed1 === false) && (feed2 === true) && (feed3 === true)){
     $('#feed-1').append(articleDiv);
      $('#feed-1').append(resultImage);
      // feed1 = true;
    }
    else if((feed1 === false) && (feed2 === false) && (feed3 === true)){
     $('#feed-1').append(articleDiv);
      $('#feed-1').append(resultImage);
      // feed1 = true
    }
    else if((feed1 === true) && (feed2 === false) && (feed3 === true)){
     $('#feed-2').append(articleDiv);
      $('#feed-2').append(resultImage);
      // feed2 = true
    }
        // $('#feed-1').append(articleDiv);

        // $('#feed-1').append(resultImage);
      }

      var imageTags = $('img');
      imageTags.width(200);
      imageTags.css({'border-radius': '20%'});
      // console.log(title);
      });
}


$(document).ready(function(){

  $('#add-feed').on('click', function(event){
    addFeed(event);
    saveFeed();
    fader();
});

// $(document).ready(function(){

//   $('#edit-feed1').on('click', function(event){
//     addFeed(event)
//     saveFeed();
//     fader();
//   })
// })    

  removeFeed1.on('click', function(){
    targetFeed1.fadeOut(1500);
    feed1 = false;
    $('#add-feed').addClass('btn-info');
  });
  removeFeed2.on('click', function() {
    targetFeed2.fadeOut(1500);
    feed2 = false;
    $('#add-feed').addClass('btn-info');
  });
  removeFeed3.on('click', function(){
    targetFeed3.fadeOut(1500);
    feed3 = false;
    $('#add-feed').addClass('btn-info');
  });

      
 console.log(queryURL);
   
});



/***************************************************************************************************************
Javascript for Modal
****************************************************************************************************************/
$('body').on('click', '.tab-content .checkbox', function () {
    $(this).toggleClass('checked');
    console.log(this);                
});

$(document).ready(function() {
    $("#SelectAll").on("click", function () {
        
        //console.log("checkedoff: ", checkedoff);
        //$("checkedoff").removeClass("checked");
       $('.active input[type=checkbox]').trigger("click");
    });
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
// });


/***************************************************************************************************************
Javascript for Sign in / Register and Firebase
****************************************************************************************************************/
// Initialize Firebase
  
  var config = {
  apiKey: "AIzaSyDdkiKO4tgkjR_-IAquHX3a1mnwyox8wng",
  authDomain: "newsapi-project-51d65.firebaseapp.com",
  databaseURL: "https://newsapi-project-51d65.firebaseio.com",
  projectId: "newsapi-project-51d65",
  storageBucket: "newsapi-project-51d65.appspot.com",
  messagingSenderId: "123076474108"
  };


  firebase.initializeApp(config);
  
  var database = firebase.database();
  var auth = firebase.auth();
  
  var email = $("#getEmail").val();
  var password = $("#getPassword").val();

  //log in credentials
 var emailinput = $("#emailinput").val();
 var passwordinput = $("#passwordinput").val();


  // Register new user
  $("#confirmsignup").on("click", function(e) {
    // Prevent the page from refreshing
    event.preventDefault();
    // Get inputs
    email = $("#getEmail").val();
    password = $("#getPassword").val();
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });


  });

  // Log in user
  $("#signin").on("click", function(e) {
    event.preventDefault();

    emailinput = $("#emailinput").val();
    passwordinput = $("#passwordinput").val();
    console.log(emailinput);
      console.log(passwordinput);


    firebase.auth().signInWithEmailAndPassword(emailinput, passwordinput).catch(function(err) { 
        // Handle Errors here.
        var errorCode = err.code;
        var errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
    });

    var user = firebase.auth().currentUser;
    if (user) {
      console.log(user);
    } 
    else {
      console.log("nope");
    }
  });


/***************************************************************************************************************
Validation form
****************************************************************************************************************/

$(document).on("click", "#confirmsignup", function(e) {
        e.preventDefault(); // prevents page from reloading
        $("#alertsDiv").empty(); // empties div with alerts 

        //resets input fields colors and shadows to default                                                             
        $("#getUserid").css('border-color', '#ccc');            
        $("#getUserid").css('box-shadow', 'none');
        $("#getEmail").css('border-color', '#ccc');
        $("#getEmail").css('box-shadow', 'none');
        $("#getPassword").css('border-color', '#ccc');
        $("#getPassword").css('box-shadow', 'none');


        //this is email validation 
        var email = $("#getEmail").val();
        var regularExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        //if the username is less than 6 characters
        if ($("#getUserid").val().length < 6) {
            $("#getUserid").val("");
            $("#getUserid").attr("placeholder","");
            $("#alertsDiv").append("<p class='alerts'>" + "Username should be at least 6 characters long" + "</p>"); 
            $("#getUserid").css('border-color', 'red');
            $("#getUserid").css('box-shadow', '0 0 1.5px 1.5px red'); 
        }


        //if the email has wrong format validated 
        if (regularExp.test(email) === false) {
            $("#getEmail").val("");
            $("#getEmail").attr("placeholder","");
            $("#alertsDiv").append("<p class='alerts'>" + "Please enter a valid email address" + "</p>");
            $("#getEmail").css('border-color', 'red');
            $("#getEmail").css('box-shadow', '0 0 1.5px 1.5px red'); 
        }

        //if the password is less than 8 characters
        if ($("#getPassword").val().length < 8) {
            $("#getPassword").val("");
            $("#getPassword").attr("placeholder","");
            $("#alertsDiv").append("<p class='alerts'>" + "Password should be at least 8 characters long" + "</p>"); 
            $("#getPassword").css('border-color', 'red');
            $("#getPassword").css('box-shadow', '0 0 1.5px 1.5px red');
        }


        //if the getPassword doesn't match reenterpassword
        if ($("#reenterpassword").val() !== $("#getPassword").val() || $("#reenterpassword").val() === "") {
            $("#reenterpassword").val("");
            $("#getPassword").val("");
            $("#alertsDiv").append("<p class='alerts'>" + "Passwords don't match try again" + "</p>"); 
            $("#reenterpassword").css('border-color', 'red');
            $("#reenterpassword").css('box-shadow', '0 0 1.5px 1.5px red');
            $("#getPassword").css('box-shadow', '0 0 1.5px 1.5px red');
        }

        //if user met all input criterias it will create and array with his/her credentials
        if ($("#getUserid").val().length >= 6 && $("#getPassword").val().length >= 8 && regularExp.test(email) && $("#reenterpassword").val() === $("#getPassword").val()) {
                //closes the modal
            $('#LoginModal').modal('hide');
            var signupArray = $("#signupForm").serializeArray();
            console.log(signupArray);
            $(".inputfields").val("");
        }
    });