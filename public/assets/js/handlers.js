// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devButton").on("click", function (event) {
    event.preventDefault();
    console.log("devourbutton event handler ran");
    var id = $(this).data("item_id");
    var newDevoured = $(this).data("newDevour");

    var newDevourState =
      {
        devoured: newDevoured
      };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id,
      {
        type: "PUT",
        data: newDevoured
      }).then(
        function () {
          // console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
});

$(".subBttn").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
console.log ("submit button event handler fired");
  var newBurger = {
    name: $("#nb").val().trim()

  };

  // Send the POST request.
  $.ajax("/api/newburgers", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
  