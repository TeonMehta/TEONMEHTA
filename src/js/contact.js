import '../styles/contact.scss';






//JQUERY FORM VALIDATE WITH AJAX
$(document).ready(function() {
    $("form").validate({
        rules: {
            name: {
                required: true,
                // another rule
            },
            email: {
                required: true,
                // another rule
            },
            message: {
                required: true,
                digits: true
            }
        },
        submitHandler: function(form) {
            //FORM DATA
            var NAME = $('#Name').val();
            var EMAIL = $('#Email').val();
            var MESSAGE = $('#Message').val();
            $.ajax({
                url:'/contact',
                type:'post',
                data:{
                    name: NAME,
                    email:EMAIL,
                    message:MESSAGE
                },
                success:function () {
                    $("form").fadeOut(1000);
                    $(".thankyou").fadeIn(1500).css('display','block');

                }
            });
            return false; // required to block normal submit
        }


    });


});

