(function(global, jquery){

  var greetz = function(firstname, lastname, language){
    return new Greet(firstname, lastname, language);
  }

  function Greet(fn = 'lilian',ln = 'kalkman',lg = 'nl') {
    var self = this;
    self.firstname = fn;
    self.lastname = ln;
    self.language = lg;
  }

  Greet.prototype = {

  }

  global.Greet = global.$G = greetz;

})(this, jQuery);
