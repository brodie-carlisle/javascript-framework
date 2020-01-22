;(function(global, jQuery){
    
    //so that you won't have to use the 'new' keyword everytime greetr is used.
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language)
    }
    //hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];
    //informal greetings
    var greetings = {
        en : 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings ={
        en: 'Greetings',
        es: 'saludos'  
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio secion'
    };
    
    Greetr.prototype = {
        fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid language';
            }
        },
        greeting: function(){
            return greetings[this.language] + " " + this.firstName + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }if(console){
                console.log(msg);
            }
            //makes method chainable. 'this' refers to calling object at runtime
            return this; 
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ": " + this.fullName());
            }
            return this;
        },
        //allows language to be reset
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        //adds jquery functionality 
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }
        
    };
    
    //Constructor
    Greetr.init = function(firstName, lastName, language){
        
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
        self.validate();
    }
    
    //sets the prototype
    Greetr.init.prototype = Greetr.prototype;
    
    //adds Greetr/G$ to global object
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));