//creates a new object
var g = G$('John', 'Doe');
//use chainable methods
g.greet().setLang('es').greet(true).log();

//uses object when login button is clicked
$('#login').click(function(){
    
    //creates new object
    var loginGrtr = G$('Jane', 'Doe');
    
    //hides div after click
    $('#logindiv').hide();
    
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})


