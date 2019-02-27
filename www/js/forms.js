//formulier validatie
$('form').submit(function(e){
    //voorkom standaard gedrag na klikken op submit knop


    //verwijder eventuele eerder error meldingen
    $('.error').hide();
    $('.validateInput').css("border-bottom-color", "rgba(0, 0, 0, 0.15)")

    //stel regex patterns in
    var text =    /^[\S\s]{25,500}$/;
    var name =    /^([a-zA-Z]{2,32}[^0-9]*)$/;
    var email =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var datum =   /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    var nummer =  /[0-9 -()+]+$/;
    var pc =      /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
    var tel =     /^[0-9\.\s-]+$/;

    //ga elke input (in een div) langs
    $('.validateInput').each( function(){
        var valid = true;                           //bij default is elke veld juist

        if ($(this).attr('type') == 'radio'){
            var radioGroep = $('input[name=' + this.name + ']');
            valid = radioGroep.is(":checked");
        } else if ($(this).attr('type') == 'checkbox'){
            valid = true;
        } else {
            var dataType = $(this).attr('data-type');   //type veld ophalen
            var pattern = eval(dataType);               //type veld omzetten in variabele
            var fieldValue = $(this).val();             //veld input ophalen
            valid = pattern.test(fieldValue);           //test veldwaarde tegen pattern
        }

        if (valid ==  false){                       //als veldwaarde niet 'juist' is
            $(this).next().next().show();                  // laat dan error zien en verander border color
            $(this).css("border-bottom-color", "rgba(255,0,0,0.9)");
            e.preventDefault();
        }


    });
});

// placeholder

$('.contact-form-input').focus(function(){
  if($(this).is("input")){
    $(this).css("background-color", "rgba(255,255,255,1)");
  } else if($(this).is("textarea")){
    $(this).css("background-image", "repeating-linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1) 26px, rgba(0,0,0,0.1) 27px")
  }
});

$('.contact-form-input').focusout(function(){
  if($(this).val() == "" && $(this).is("input")){
    $(this).css("background-color", "rgba(255,255,255,0)");
  } else if($(this).val() == "" && $(this).is("textarea")){
    $(this).css("background-image", "repeating-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0) 26px, rgba(0,0,0,0.1) 27px")
  }
});

// form feedback
var url = window.location.href.split("?").pop();
if(url == "feedback"){
  $("#wrapper").prepend("<div class='feedback'>Bedankt voor uw interesse, we nemen snel contact met u op!</div>");
}

// hide input field to prevent spam
var nope = document.getElementsByClassName("contact-form-noField")[0];
if(nope) nope.style.display = "none";
