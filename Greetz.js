(function(global, jquery){

  var greetz = function(firstname, lastname, language){
    return new Greet(firstname, lastname, language);
  }

  var supportedLanguages = ['nl', 'en', 'es'];

  var greetings = {
    nl : 'hoooi',
    en : 'helloooo',
    es : 'holaaaa'
  }

  var formalGreetings = {
    nl : 'Goedemiddag',
    en : 'Good afternoon',
    es : 'Hola'
  }

  function Greet(fn = 'lilian',ln = 'kalkman',lg = 'nl') {
    var self = this;
    self.firstname = fn;
    self.lastname = ln;
    self.language = lg;
  }

  Greet.prototype = {

    getFullName : function(){
      var fullname = this.firstname + ' ' + this.lastname;
      return this.fullname = fullname;
    },

    validateLanguage : function(){
      if(supportedLanguages.indexOf(this.language) === -1 ){
        throw "Invalid Language";
      };
    },

    getGreeting : function() {
      return greetings[this.language] + ' ' + this.firstname;
    },

    getGreetingFormal : function(name){
      return formalGreetings[this.language] + ' ' + this.fullname;
    },

    greet : function(formal){
      var message;
      if(formal){
        message = this.getGreetingFormal();
      } else {
        message = this.getGreeting();
      }
      return message;
    },

    setLang : function(lang){
      this.language = lang;
      this.validateLanguage();
      return this;
    },

    updateHTML : function(selector, formal){
      if(!$){
        throw "jQuery not working";
      }
      if(formal){
        var msg = this.greet(true);
      } else {
        var msg = this.greet();
      }

      $(selector).append(`${msg}`);

      return this;
    }

  }

  global.Greet = global.$G = greetz;

})(this, jQuery);
