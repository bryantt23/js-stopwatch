// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  $('#my-link').click(function(event){
    alert('Hooray!');
    event.preventDefault(); // Prevent link from following its href
  });

  var time = 0;
  var running = 0;


  $('#startPause').click(function(event){
    event.preventDefault(); // Prevent link from following its href

    if(running == 0){
      // alert('start!');
      running = 1;
      increment();
      document.getElementById("startPause").innerHTML = "Pause";
    }else{
      // alert('Pause!');
      running = 0;
        document.getElementById("startPause").innerHTML = "Resume";
    }    });


    $('#reset').click(function(event){
      // alert('reset!');
      event.preventDefault(); // Prevent link from following its href

      running = 0;
      time = 0;

      document.getElementById("startPause").innerHTML = "Start";
      document.getElementById("output").innerHTML = "00:00:00";
    });


    function increment()
    {
      if(running == 1){
        setTimeout(function(){
          time++;
          var mins = Math.floor(time/10/60);
          var secs = Math.floor(time/10 % 60);
          var tenths = time % 10;

          if(mins < 10){
            mins = "0" + mins;
          }
          if(secs < 10){
            secs = "0" + secs;
          }
          document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
          increment();

        },100);
      }
    }





  });
