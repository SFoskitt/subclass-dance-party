var makeTinyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('tiny')
}

  makeTinyDancer.prototype = Object.create(makeDancer.prototype)
  makeTinyDancer.prototype.constructor = makeTinyDancer

  makeTinyDancer.prototype.step = function(){
    var temp = makeDancer.prototype.step.call(this)
    setInterval(temp, this._timeBetweenSteps)
    this.$node.toggle();
  };

