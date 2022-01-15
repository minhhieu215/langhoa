function Validator(options) {
    var buttonSubmit = document.querySelector(".submitBtn")
    var formElement = document.querySelector(options.form)
    if (formElement) {
        buttonSubmit.onclick = function () {
            var errormessage;
            options.rules.forEach(function (rule) {
                var errorElement = formElement.querySelector(rule.selector + ` .messageError`);
                var inPutElement = formElement.querySelector(rule.selector + ` input`)
                errormessage = rule.test(inPutElement.value)
                if (errormessage) {

                    errorElement.innerText = errormessage
                }
                inPutElement.oninput = function () {
                    errorElement.innerText = ""
                }
                console.log(errormessage)
            });
            if (!errormessage) {
                options.rules.forEach(function (rule) {
                    var inPutElement = formElement.querySelector(rule.selector + ` input`)
                    inPutElement.value = ""
                });
            }
        }
    }
}
// Rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : "Vui long nhap truong nay"
        }
    };
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Vui long nhap email lai'

        }
    };

}