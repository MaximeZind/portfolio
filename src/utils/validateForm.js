export function validateForm(object) {

    const firstNameValidation = validateName(object.user_firstname);
    const lastNameValidation = validateName(object.user_lastname);
    const emailValidation = validateEmail(object.user_email);
    const messageValidation = validateMessage(object.message);

    const validationArray = [firstNameValidation, lastNameValidation, emailValidation, messageValidation];

    let isValid = true;
    validationArray.map((item) => {
        if (!item.response) {
            isValid = false;
            return;
        }
    });

    const validation = {
        isValid: isValid,
        data: {
            firstName: firstNameValidation.response,
            lastName: lastNameValidation.response,
            email: emailValidation.response,
            message: messageValidation.response,
        },
        errorMsg: {
            firstName: firstNameValidation.errorMsg,
            lastName: lastNameValidation.errorMsg,
            email: emailValidation.errorMsg,
            message: messageValidation.errorMsg,
        }
    }
    return validation;

}

// Function to validate names
export function validateName(string) {
    const nameValue = string.trim();
    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/; // pattern
    let response = false;
    let errorMsg = null;

    if (nameValue.length >= 1 && nameValue.length < 255) { // entre 2 et 255 caractères
        if ((regex.test(nameValue)) && (!nameValue.includes(",,")) && (!nameValue.includes("..")) && (!nameValue.includes("''")) && (!nameValue.includes("--")) && (!nameValue.trim().includes("  "))) {
            response = nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();
        } else if ((regex.test(nameValue) === false) || (nameValue.includes(",,")) || (nameValue.includes("..")) || (nameValue.includes("''")) || (nameValue.includes("--")) || nameValue.trim().includes("  ")) {
            errorMsg = {
                'en-US': "The name is invalid.",
                'fr-FR': 'Le nom est invalide.'
            };
        }
    } else if (nameValue.length === 0) {
        errorMsg = {
            'en-US': "Please enter a name.",
            'fr-FR': 'Veuillez entrer un nom.'
        };
    } else if (nameValue.length >= 255) {
        errorMsg = {
            'en-US': "The name you entered is too long.",
            'fr-FR': 'Le nom entré est trop long.'
        };
    }

    let validation = {
        response: response,
        errorMsg: errorMsg
    }
    return validation;
}

// Function to validate emails
export function validateEmail(string) {
    const emailValue = string.trim();
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // eslint-disable-line
    let response = false;
    let errorMsg = null;

    if (emailValue.match(regex) && !emailValue.includes(' ')) {
        response = string;
    } if (!emailValue.match(regex) || emailValue.includes(' ')) {
        errorMsg = {
            'en-US': 'Please enter a valid email address.',
            'fr-FR': 'Veuillez entrer une adresse email valide.'
        }
    }

    let validation = {
        response: response,
        errorMsg: errorMsg
    }
    return validation;
}

// Function to validate the message
export function validateMessage(string) {
    const messageValue = string.trim();
    let response = false;
    let errorMsg = null;

    if (messageValue.length > 20) {
        response = string;
    } if (messageValue <= 20) {
        errorMsg = {
            'en-US': 'Your message should be at least 20 characters long.',
            'fr-FR': 'Votre message doit faire au moins 20 caractères de long.'
        }
    }

    let validation = {
        response: response,
        errorMsg: errorMsg
    }
    return validation;
}