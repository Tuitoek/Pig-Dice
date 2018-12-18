$(document).ready(function(){
  $("button.play").click(function (event){
    $("#you").show();
    $("#computer").show();
    $(".jumbotron").hide();

    function player(player1,player2){
      this.player1=player1;
      this.player2=player2;
    }

    var player1 = $(".roll").click(function(event){
      var outCome = [];
      outCome.push(Math.floor(Math.random()*6)+1);
      $(".outcome").html(outCome);

      var total=outCome;
      if (outCome == 1 || outCome == 6){
         total = 0;

      }
      var final= function results(total){
        this.total = total;
      }
      $(".result").html(total);

      $(".hold").click(function(event){
        outCome = 0;
        final = 0;
      });
     });
     var player2 = $(".oll").click(function(event){
        var posibility = [];
        posibility.push(Math.floor(Math.random()*6)+1);
        $(".outcomes").html(posibility);
        var outcome = posibility;
        if (outcome == 1 || outcome == 6){
           outcome = 0;

        }
        var end= function results(outcome){
          this.outcome = outcome;
        }
        $(".results").html(outcome);

        $(".hold").click(function(event){
          $(".outcomes").stop();
          $(".results").stop();
        });
       });

    });



  $("button.hard").click(function(){
    $("#you").show();
    $("#computer").show();
    $(".panel").show();

    $(".jumbotron").hide();
  });
});
