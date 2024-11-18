function realTimeValidate() {
    const input = $(this);
    const value = input.val();

    // Skip processing for the order quantity input
    if (input.attr('id') === 'txt-order-qty') {
        return;
    }

    // Determine if the input is a date type
    if (input.attr('type') === 'date') {
        if (value) {
            const selectedDate = new Date(value);
            const currentDate = new Date();
            // Set time to midnight for accurate comparison
            currentDate.setHours(0, 0, 0, 0);
            
            if (selectedDate <= currentDate) {
                input.removeClass('is-invalid').addClass('is-valid');
                input.next().hide();
            } else {
                input.removeClass('is-valid').addClass('is-invalid');
                input.next().show();
            }
        } else {
            input.removeClass('is-valid').addClass('is-invalid');
            input.next().show();
        }
    } else {
        // Validate non-date inputs against a pattern
        const pattern = new RegExp(input.attr('pattern')); // Retrieve the pattern from the input

        if (pattern.test(value)) {
            // Provide valid feedback if the input matches the pattern
            input.removeClass('is-invalid').addClass('is-valid');
            input.next().hide(); // Hide the error message
        } else {
            // Provide invalid feedback if the input does not match the pattern
            input.removeClass('is-valid').addClass('is-invalid');
            input.next().show(); // Display the error message
        }
    }
}

function realTimeValidateInput(input, pattern, textFieldId) {
    if (pattern.test(input)) {
        $(textFieldId).removeClass('is-invalid').addClass('is-valid');
        $(textFieldId).next().hide();
    } else {
        $(textFieldId).removeClass('is-valid').addClass('is-invalid');
        $(textFieldId).next().show();
    }
}