$(document).ready(function () {

    $.validator.addMethod("pwcheck", function(value) {
   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
       && /[a-z]/.test(value) // has a lowercase letter
       && /\d/.test(value) // has a digit
});

    var val_CadastroIniciado = "";

    var validator = $("#form_login").validate({
        onkeyup: false,
        ignore: [],
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            loginCPF: {
                required: true,
                minlength: 11
            },
            loginSenha: {
                required: true
            },
            hideRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse(widgetId1) == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        messages: {

            loginCPF: {
                required: "Campo obrigatório",
                minlength: "CPF Inválido"
            },
            loginSenha: {
                required: "Campo obrigatório"
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio"))
                error.appendTo(element.parent());
            else if (element.is(":checkbox"))
                error.appendTo(element.parent());
            else
                error.insertAfter(element.next());
        },
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $("span.error").show();
                $("span.error").css({ 'width': '100%!important' });
            }
        },
        success: function (label, element) {
            // set &nbsp; as text for IE
            if (val_CadastroIniciado == "") {
                val_CadastroIniciado = "0"; //GravarGA('CadastroPessoal', 'iniciado');
            }
            label.html("&nbsp;").addClass("checked");
            $(element).removeClass('error-input');
        },
        highlight: function (element, errorClass) {
            $(element).parent().find("." + errorClass).removeClass("checked");
            $(element).addClass('error-input');
        },
        submitHandler: function(form) {
            window.location.replace("logada.html");
        }
    });

    var validator = $("#form_fale").validate({
        onkeyup: false,
        ignore: [],
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            txtNome: {
                required: true,
                minlength: 3
            },
             txtEmail: {
                required: true,
                minlength: 3
            },
            txtTel: {
                required: true,
                minlength: 9
            },
            txtAssunto: {
                required: true
            },
            txtMsg: {
                required: true
            },
            hideRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse(widgetId1) == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        messages: {

            txtNome: {
                required: "Campo obrigatório",
                minlength: "Minimo 3 caracteres"
            },
            txtTel: {
                required: "Campo obrigatório",
                minlength:"Telefone Invalido"
            },
            txtEmail: {
                required: "Campo obrigatório",
                minlength:"E-mail Invalido"
            },
            txtAssunto: {
                required: "Campo obrigatório"
            },
            txtMsg: {
                required: "Campo obrigatório"
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio"))
                error.appendTo(element.parent());
            else if (element.is(":checkbox"))
                error.appendTo(element.parent());
            else
                error.insertAfter(element.next());
        },
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $("span.error").show();
                $("span.error").css({ 'width': '100%!important' });
            }
        },
        success: function (label, element) {
            // set &nbsp; as text for IE
            if (val_CadastroIniciado == "") {
                val_CadastroIniciado = "0"; //GravarGA('CadastroPessoal', 'iniciado');
            }
            label.html("&nbsp;").addClass("checked");
            $(element).removeClass('error-input');
        },
        highlight: function (element, errorClass) {
            $(element).parent().find("." + errorClass).removeClass("checked");
            $(element).addClass('error-input');
        },
        submitHandler: function(form) {
            $('#fale').modal('hide');
            $('#sucesso-fale').modal();

        }
    });

    var validator = $("#form_cadastro").validate({
        onkeyup: false,
        ignore: [],
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            txtCPF: {
                required: true,
                minlength: 11
            },
            txtNome: {
                required: true,
                minlength: 3
            },
            dtNasc: {
                required: true,
                minlength: 8
            },
            txtSexo: {
                required: true
            },
            txtTel: {
                minlength: 9
            },
            txtCel: {
                required: true,
                minlength: 9
            },
             txtEmail: {
                required: true,
                minlength: 3
            },
            txtCEP: {
                required: true,
                minlength: 8
            },
            txtEndereco:{
                required: true,
                minlength: 3
            },
            txtBairro:{
                required: true,
                minlength: 3
            },
            txtNum:{
                required: true
            },
            txtComplemento:{
                minlength: 3
            },
            txtCidade:{
                required: true
            },
            txtUF:{
                required: true
            },
            senha: {
                required: true,
                 pwcheck: true,
                minlength: 8
            },
            cSenha: {
                required: true,
               
                equalTo: '#senha'
            },
            aceite_reg: {
                required: true,
            },
             aceite_premmia: {
                required: true,
            }
            },
        messages: {

            txtCPF: {
                required: "Campo obrigatório",
                minlength: "CPF Inválido"
            },
            txtNome: {
                required: "Campo obrigatório",
                minlength: "Minimo 3 caracteres"
            },
            dtNasc: {
                required: "Campo obrigatório",
                minlength: "Data invalida"
            },
            txtSexo: {
                required: "Campo obrigatório"
            },
            txtTel: {
                minlength: "Telefone invalido"
            },
            txtCel: {
                required: "Campo obrigatório",
                minlength: "Celular invalido"
            },
             txtEmail: {
                required: "Campo obrigatório",
                minlength: "E-mail invalido"
            },
            txtCEP: {
                required: "Campo obrigatório",
                minlength: "CEP invalido"
            },
            txtEndereco:{
                required: "Campo obrigatório",
                minlength: "Minimo 3 caracteres"
            },
            txtBairro:{
                required: "Campo obrigatório",
                minlength: "Minimo 3 caracteres"
            },
            txtNum:{
                required: "Campo obrigatório"
            },
            txtComplemento:{
                minlength: "Minimo 3 caracteres"
            },
            txtCidade:{
                required: "Campo obrigatório"
            },
            txtUF:{
                required: "Campo obrigatório"
            },
            senha: {
                required: "Campo obrigatório",
                minlength: "Deve atender o mínimo de 8 dígitos",
                pwcheck: 'A senha a ser criada, deve atender o mínimo de 8 dígitos, contendo letras maiúsculas, minúsculas e ao menos um número e um caractere especial.'

            },
            cSenha: {
                required: "Campo obrigatório",
                equalTo: 'Os campos não correspondem'
            },
            aceite_reg: {
                required:  "Campo obrigatório",
            },
             aceite_premmia: {
                required:  "Campo obrigatório",
            }


        },
        errorPlacement: function (error, element) {
            if (element.is(":radio"))
                error.appendTo(element.parent());
            else if (element.is(":checkbox"))
                error.appendTo(element.parent());
            else
                error.insertAfter(element.next());
        },
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $("span.error").show();
                $("span.error").css({ 'width': '100%!important' });

            }
        },
        success: function (label, element) {
            // set &nbsp; as text for IE
            if (val_CadastroIniciado == "") {
                val_CadastroIniciado = "0"; //GravarGA('CadastroPessoal', 'iniciado');
            }
            label.html("&nbsp;").addClass("checked");
            $(element).removeClass('error-input');
            $(".form-group").removeClass("h");
        },
        highlight: function (element, errorClass) {
            $(element).parent().find("." + errorClass).removeClass("checked");
            $(element).addClass('error-input');
        },
        submitHandler: function(form) {
            $('#sucesso-cadastro').modal();
           
        }
    });

    var validator = $("#form_cupom").validate({
        onkeyup: false,
        ignore: [],
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            txtCNPJ: {
                required: true,
                minlength: 14
            },
            dtCompra: {
                required: true,
                minlength: 8
            },
            txtCupom:{
                required: true
            },
            valor:{
                required: true,
                minlength: 1,
            }

        },
        messages: {

            txtCNPJ: {
                required: "Campo obrigatório",
                minlength: "CNPJ Inválido"
            },
            dtCompra: {
                required: "Campo obrigatório",
                minlength: "Data invalida"
            },
            txtCupom: {
                required: "Campo obrigatório"
            },
            valor:{
                 required: "Campo obrigatório",
                  minlength: "Minimo 1",

            }

        },
        errorPlacement: function (error, element) {
            if (element.is(":radio"))
                error.appendTo(element.parent());
            else if (element.is(":checkbox"))
                error.appendTo(element.parent());
            else
                error.insertAfter(element.next());
        },
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $("span.error").show();
                $("span.error").css({ 'width': '100%!important' });
            }
        },
        success: function (label, element) {
            // set &nbsp; as text for IE
            if (val_CadastroIniciado == "") {
                val_CadastroIniciado = "0"; //GravarGA('CadastroPessoal', 'iniciado');
            }
            label.html("&nbsp;").addClass("checked");
            $(element).removeClass('error-input');
        },
        highlight: function (element, errorClass) {
            $(element).parent().find("." + errorClass).removeClass("checked");
            $(element).addClass('error-input');
        },
        submitHandler: function(form) {
            if ($('#switch3').is(':checked')) {
           // Do something...
           $('#sucesso-cupom2').modal();
        return;
        } else {
            $('#sucesso-cupom').modal();
        }
 
            
            
        }
    });

});
