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
        $(".outcome").stop();
        $(".result").stop();
      });
     });
          var player2 = $(".roll").click(function(event){
            var posibility = [];
            posibilty.push(Math.floor(Math.random()*6)+1);
            $(".outcomes").html(posibility);

            var outcome = posibility;
            if (outcome == 1 || outcome == 6){
               total = 0;

            }
            var final= function results(total){
              this.total = total;
            }
            $(".results").html(total);

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
