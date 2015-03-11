var makeLightDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.removeClass('dancer').addClass('lightshow');

};

  makeLightDancer.prototype = Object.create(makeDancer.prototype)
  makeLightDancer.prototype.constructor = makeLightDancer

  makeLightDancer.prototype.step = function(){
    var temp = makeDancer.prototype.step.call(this)
    setInterval(temp, this._timeBetweenSteps)
  };

