var makeDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps
  this.left = left
  this.top = top
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};


  makeDancer.prototype.step = function(){
    var self = this;
    setTimeout(function(){
      self.step()
    }, self._timeBetweenSteps)
  };

  makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = this.$node.css({top: top, left: left})
  };

  makeDancer.prototype.lineUp = function() {
    this.$node.css({left: 0})
  }

  makeDancer.prototype.getPosition = function() {
    return [top,left]
  }


