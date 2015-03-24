(function($,W,D)
{
    var JQUERY4U = {};
 
    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $(".form-validate").validate({
                rules: {
                    name: "required",
                    nameTwo: "required",
                    surname: "required",
                    login: "required",
                    address: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {required: true},
                    newPassword: {required: true},
                    repeatPassword:{ required: true}
                },
                messages: {
                    name:  "Ошибка! Некорректный ввод!",
                    nameTwo:  "Ошибка! Некорректный ввод!",
                    surname:  "Ошибка! Некорректный ввод!",
                    login:  "Ошибка! Некорректный ввод!",
                    address: "Ошибка! Некорректный ввод!",
                    phone: "Ошибка! Некорректный ввод!",
                    password: "Ошибка! Некорректный ввод!" ,
                    newPassword: "Ошибка! Некорректный ввод!" ,
                    repeatPassword: "Ошибка! Некорректный ввод!" ,
                    email: "Ошибка! Некорректный ввод!"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
            $("#feed-back").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {required: true},
                    newPassword: {required: true},
                    repeatPassword:{ required: true}
                },
                messages: {
                    name:  "Ошибка! Некорректный ввод!",
                    email: "Ошибка! Некорректный ввод!"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }
 
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
 
})(jQuery, window, document);


