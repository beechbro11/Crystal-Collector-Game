    var numberToGuess = Math.floor((Math.random() * 100) + 20);
    var wins =0;
    var Loses = 0;
    var counter = 0;
    var numbers = [];
    var lock = 0;

    // wrap game initialization in it's own function
    function newGame(){
      // clear the crystals div in the event this is not the first game
      $('#crystals').empty();
      // reset counter to zero if it's not
      counter = 0;
      // reset numbers array
      numbers = [];
      
      // iterate through random numbers to assign to the array
      for (var i=0, t=4; i<t; i++) {
        numbers.push(Math.round(Math.random() * 20))
      }
      console.log(numbers);
      // dynamically create new crystal images
      for (var i=0; i< numbers.length; i++){
        var imageCrystal = $('.container');
        imageCrystal.attr('data-num', numbers[i]);
        imageCrystal.attr('alt', 'crystals');
        imageCrystal.addClass('crystalImage');
        $('#crystals').html(imageCrystal);
      }
      // new number to guess
      numberToGuess = Math.floor((Math.random() * 100) + 20);

      // update the dom
      $('#number').text(counter);
      $('#rand').html(numberToGuess);
      console.log(counter);
    }

    // doc ready function
    $( document ).ready(function() {
      // initialize a new game on doc ready
      newGame();

      // change click event to handle dynamically created .crystalImages
      $(document).on('click', '.crystalImage', function(){
        // original game logic
        counter = counter + parseInt($(this).data('num'));
        $('#number').html(counter);
        if (counter == numberToGuess){
          alert('You won!!!!');
          wins++
          lock = 1;
          $('#wins').html(wins);
          $('.container').remove();

        }else if( counter > numberToGuess){
          alert('You lost!');
          Loses++;
          lock = 1;
          $('#loses').html(Loses);
       	}
        if( lock ==1){
          $(this).unbind('click').attr('disabled', 'disabled');
          
        }
      });

      $('.btn').on('click', function(event) {
        // rerun the new game function on click of the .btn
        newGame();
        console.log(counter);
      });

    });