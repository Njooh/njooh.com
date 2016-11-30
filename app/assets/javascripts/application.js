// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require semantic_ui/semantic_ui

$(document).ready(function() {
    $('.ui.form')
        .form({
            inline : true,
            on     : 'blur',
            transition: 'fade down',
            fields : {
                first_name: {
                    identifier: 'first_name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your First name'
                        }
                    ]
                },
                last_name: {
                    identifier: 'last_name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your Last name'
                        }
                    ]
                },
                email: {
                    identifier: 'email',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter valid email'
                        }
                    ]
                },
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        }
                    ]
                },
                role: {
                    identifier: 'role',
                    rules: [
                        {
                            type: 'checked',
                            prompt: 'Please select a role'
                        }
                    ]
                },
            },
        })
    ;
});



