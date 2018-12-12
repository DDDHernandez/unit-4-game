$(document).ready(function() {

        // created my random Number to try and equal //
        var randomNumber = Math.floor(Math.random() * 120) + 1;
        $("#Random-Number").text(randomNumber);
        console.log("RandomNumber: " + randomNumber);

      // Setting random value to my first button //
        $("#crystal-1").ready(function(){
        var randomValue = Math.floor(Math.random() * 20) + 1;
        $("#crystal-1").val(randomValue);
        console.log("RandomVaule: " + randomValue);
        });
        $("#crystal-2").ready(function(){
            var randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-2").val(randomValue);
            console.log("RandomVaule: " + randomValue);
        });
        $("#crystal-3").ready(function(){
            var randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-3").val(randomValue);
            console.log("RandomVaule: " + randomValue);
        });
        $("#crystal-4").ready(function(){
            var randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystal-4").val(randomValue);
            console.log("RandomVaule: " + randomValue);
        });


        // Taking buttons value and pushing it to your Score Div //
        $(".btn-choice").on("click", function() {
            var yourPick = $(this).val();
            var scoreUpdate += yourPick;
            console.log("Your Total is: " + yourPick);
            $("#Actual-score").text(scoreUpdate);
        });
       
   
 
 });