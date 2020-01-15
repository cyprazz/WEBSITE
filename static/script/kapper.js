function checkForm(form) {
    /* isEmpty() returns true and alerts the user if they left a field empty */
    function isEmpty(fixwhat) {
        if (fixwhat == "") {
            alert("Please enter a location");
            return true;
        } else {
            return false;
        }
    }

    /* charCheck() returns false and alerts the user if they used any non-alphanumeric characters */
    function charCheck(fixwhat) {
        var validchars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (isValid(fixwhat, validchars)) {
            return true;
        } else {
            alert("Please use only letters in this field");
            return false;
        }
    }

    /* isValid is used by the charCheck() function to look through each 'validchars' one at a time */
    function isValid(string, validchars) {
        for (var i = 0; i < string.length; i++) {
            if (validchars.indexOf(string.charAt(i)) === -1) {
                return false;
            }
        }
        return true;
    }


    //check for empty fields
    if (isEmpty(form.Search.value, "Zoek op locatie...")) {
        form.Search.focus();
        return false;
    }

    //check for weird chars
    if (charCheck(form.Search.value) === false) {
        form.Search.focus();
        return false;
    }


    return true;
}