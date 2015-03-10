$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if (dancer.constructor === makeTinyDancer || dancer.constructor === makeBananaDancer || dancer.constructor === makeBlinkyDancer) {
      dancer.$node.on("click", function() {
        var distance = 0, index = 0, tempLeft = 0, tempTop = 0;
        var thisLeft = parseFloat(this.style.left)
        var thisTop = parseFloat(this.style.top)
        for(var i = 0; i < window.dancers.length; i++) {
          var T = parseFloat(window.dancers[i].top)
          var L = parseFloat(window.dancers[i].left)
          var tempDistance, leftMath, topMath = 0
          leftMath = Math.pow((thisLeft-L), 2)
          topMath = Math.pow((thisTop-T), 2)

          tempDistance = Math.sqrt( leftMath + topMath)
          if (tempDistance > distance) {
            distance = tempDistance
            index = i
            tempLeft = window.dancers[i].left
            tempTop = window.dancers[i].top
            tempLeft = tempLeft + "px"
            tempTop = tempTop + "px"
          }
        }
        window.dancers[index].setPosition(thisTop, thisLeft)
        this.style.left = tempLeft
        this.style.top = tempTop
      });
    }

    window.dancers.push(dancer)

    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp()
    }
  }); 
});



