var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps)

};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    
    var temp = makeDancer.prototype.step.call(this)

    setInterval(temp, this._timeBetweenSteps)
    this.$node.toggle();
  };

