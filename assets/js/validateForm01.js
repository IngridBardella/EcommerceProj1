$(document).ready(function () {
    // Add validation rules and messages
    $('#subscribe').validate({
      rules: {
        email: {
          required: true, // Email field is required
          email: true,    // Validate it as an email
        },
      },
      messages: {
        email: {
          required: 'Please enter your email address.',
          email: 'Please enter a valid email address.',
        },
      },
      submitHandler: function (form) {
        // If the form is valid, you can submit it
        form.submit();
      },
    });
  });