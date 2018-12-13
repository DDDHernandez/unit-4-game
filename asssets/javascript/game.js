$(document).ready(function() {

        // created my random Number to try and equal //
        var randomNumber = 0;
        function rndNUMBER() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#Random-Number").text(randomNumber);
        console.log("RandomNumber: " + randomNumber);
        };
        rndNUMBER();
      // Setting random value to my first button //
      var randomValue = 0
      function reset() {
         $("#crystal-1").ready(function(){
        randomValue = Math.floor(Math.random() * 20) + 1;
        $("#crystal-1").val(randomValue);
        console.log("RandomValue: " + randomValue);
        });
        $("#crystal-2").ready(function(){
            randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-2").val(randomValue);
            console.log("RandomValue: " + randomValue);
        });
        $("#crystal-3").ready(function(){
            randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-3").val(randomValue);
            console.log("RandomValue: " + randomValue);
        });
        $("#crystal-4").ready(function(){
            randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-4").val(randomValue);
            console.log("RandomValue: " + randomValue);
        });
        };
        reset();

        // Taking buttons value and pushing it to your Score Div //
        var scoreUpdate = 0;
        var wins = 0
        var losses = 0
        $("#ScoreBoard").html("wins: " + wins + "<br><br>"+ "losses: " + losses);
     
       $(".btn-choice").on("click", function() {
            var yourPick = parseInt($(this).val());
            scoreUpdate += yourPick;
            console.log("Your Total is: " + scoreUpdate);
            
        
            if (parseInt(scoreUpdate) === randomNumber) {
                wins++;
                scoreUpdate = 0;
                rndNUMBER();
                reset();
                
            };
             if (parseInt(scoreUpdate) > randomNumber) {
                 losses++;
                 scoreUpdate = 0;
                 rndNUMBER();
                 reset();
                
             };
             $("#ScoreBoard").html("wins: " + wins + "<br><br>" + "losses: "+ losses);
             $("#Actual-score").text(scoreUpdate);
             
            });       
       
  });