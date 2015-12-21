
(function($,W,D)
{
    var JQUERY4U = {};
    $('#formBoxSuccess').hide();

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#contactForm").validate({
                rules: {
                    fname: "required",
                    lname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        minlength: 5
                    },
                    message: {
                            required: true,
                            minlength: 10
                    }
                },
                messages: {
                    fname: "Escriba su nombre",
                    lname: "Escriba sus apellidos",
                    email: "Escriba un correo válido",
                    phone: {
                        required: "Escriba su contacto telefónico",
                        minlength: "Escriba un número válido"
                    },
                    city: "Escriba una ciudad"
                },
                submitHandler: function(form) {
                    var name = $('#fname').val();
                    var surname = $('#lname').val();
                    var email = $('#email').val();
                    var phone = $('#phone').val();
                    var city = $('#city').val();
                    var profile = $('#profile').val();

                    var send_message = "<br/>Nombre: " + name + " " + surname + "<br/>Correo: " + email + "<br/>Teléfono: " + phone + "<br/>Ciudad: " + city + "<br/>Perfil: " + profile + "<br/>";
                    
                     $.ajax({
                                type: "POST",
                                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                                data: {
                                  'key': 'Lht37zPPxFtqKB5CQKTFcg',
                                  'message': {
                                    'from_email': email,
                                    'to': [
                                      {
                                        'email': 'hack4funleon@gmail.com',
                                        'name': "develovers" ,
                                        'type': 'to'
                                      }
                                    ],
                                    'subject': "[hack4fun.es] - Inscripción " + name + " " + surname,
                                    'html': send_message
                                  }
                                }
                              });
                   
                    $('#formBoxSuccess').html("Inscripción realizada. ¡Muchas gracias!").show();

                    $('#contactForm').trigger("reset");
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
    