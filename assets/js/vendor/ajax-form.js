$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Honeypot field - if a bot filled this in, silently pretend it worked.
		if ($(form).find('input[name="_honey"]').val()) {
			$(formMessages).removeClass('error').addClass('success');
			$(formMessages).text('Thank You! Your message has been sent.');
			$('#contact-form input,#contact-form textarea').val('');
			return;
		}

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX (FormSubmit.co returns { success, message } as JSON).
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData,
			dataType: 'json'
		})
		.done(function(response) {
			var message = (response && response.message) ? response.message : 'Thank You! Your message has been sent.';
			var succeeded = !response || response.success !== 'false';

			$(formMessages).removeClass(succeeded ? 'error' : 'success');
			$(formMessages).addClass(succeeded ? 'success' : 'error');
			$(formMessages).text(message);

			if (succeeded) {
				// Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
			}
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseJSON && data.responseJSON.message) {
				$(formMessages).text(data.responseJSON.message);
			} else if (data.responseText) {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Please complete the form and try again');
			}
		});
	});

});
