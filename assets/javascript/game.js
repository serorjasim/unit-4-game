// There will be four crystals displayed as buttons on the page. //

// The player will be shown a random number at the start of the game. //

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. //

// Your game will hide this amount until the player clicks a crystal.//

// When they do click a crystal, update the player's score counter.
// when a crystal is clicked, increment the user's score by whatever value is in the data-value atribute and display that on the screen the same way we displayed the target score

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
//Inside our button click, check to see if our targat matches the user's score (player wins), else if the userscore is greater than the target score, the user loses. (If/else)

// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// Reset everything when the player wins/loses (userscore, target, crystal data-attribute values) 

$(document).ready(function() {
  var targetNumber = 0;
  var userScore = 0;
  var wins = 0;
  var loses = 0;

  var crystal1;
  var crystal2;
  var crystal3;
  var crystal4;

  var reset = function() {
    targetNumber = Math.floor(Math.random() * 101) + 19;

    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;

    userScore = 0;

    $("#target").text(targetNumber);
    $("#score").text(userScore);

    $("#crystal1").attr("data-value", crystal1);
    $("#crystal2").attr("data-value", crystal2);
    $("#crystal3").attr("data-value", crystal3);
    $("#crystal4").attr("data-value", crystal4);
  };

  reset();

  $(".crystal").on("click", function() {
    var value = $(this).attr("data-value");

    userScore += parseInt(value);

    $("#score").text(userScore);

    if (userScore === targetNumber) {
      wins = wins + 1;
      $("#wins").text("wins: " + wins);
      reset();
    } else if (userScore > targetNumber) {
      loses = loses + 1;
      $("#loses").text("losses " + loses);
      reset();
    }
  });
});
