var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer

  makeBlinkyDancer.prototype.step = function(){
    var temp = makeDancer.prototype.step.call(this)
    setInterval(temp, this._timeBetweenSteps)
    this.$node.toggle();
  };

