// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

  // use jQuery to create an HTML <span> tag
};


  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // setTimeout(this.step.bind(this), 1000)
    //setTimeout(self.step, timeBetweenSteps);
    var self = this;
    setTimeout(function(){
      self.step()
    }, 150)
  };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = this.$node.css({top: top, left: left})
  
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
