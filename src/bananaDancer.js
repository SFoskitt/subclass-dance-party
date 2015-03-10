var makeBananaDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('banana')
}

  makeBananaDancer.prototype = Object.create(makeDancer.prototype)
  makeBananaDancer.prototype.constructor = makeBananaDancer

  makeBananaDancer.prototype.step = function(){
    var temp = makeDancer.prototype.step.call(this)
    setInterval(temp, this._timeBetweenSteps)
    this.$node.toggle();
  };

