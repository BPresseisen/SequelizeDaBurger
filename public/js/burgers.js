// Make sure we wait to attach our handlers until the DOM is fully loaded.

// var burgerImage = require("../data/burgerImage");

// var burgerImageID;

$(function() {
    $(".change-devoured").on("click", function(event) {

      console.log ("on the click-event in the burger.js file");

      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      if (newDevoured===false){

        newDevoured=1

      }else if (newDevoured===true){

         newDevoured=0

      };

      console.log ("the newDevoured is: " +newDevoured);

      var newDevouredState = {
        devoured: newDevoured
      };

      console.log("the newDevouredState is: " + newDevouredState);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {

          burgerImageID = ((Math.random())*33).toFixed(0)+1;

          console.log("the burgerImage ID is: " + burgerImageID);

          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );

      burgerImageID = ((Math.random())*33).toFixed(0)+1;

      console.log("the burgerImage ID is: " + burgerImageID);

      // function displayImage() {
        
      //   $("#leadImage").attr("src", burgerImage[burgerImageID].photo);

      // }

      // displayImage();

    });
  
    $(".create-form").on("submit", function(event) {
      console.log("hello");

      burgerImageID = ((Math.random())*33).toFixed(0)+1;

      console.log("the burgerImage ID is: " + burgerImageID);

      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger: $("#burger").val().trim(),
        devoured: 0
      };
  
      console.log(newBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");

          // Reload the page to get the updated list
          location.reload();
        }
      );

    });
  
    $(".delete-burger").on("click", function(event) {

      // burgerImageID = 999;

      // console.log("the burgerImage ID is: " + burgerImageID);

      // function displayImage() {
        
      //   $("#leadImage").attr("src", burgerImage[burgerImageID].photo);
        
      // }

      // displayImage();

      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);

          // Reload the page to get the updated list
          location.reload();
        }
      );

    });
  });
  