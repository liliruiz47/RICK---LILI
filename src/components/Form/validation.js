export default function validation (inputs){

    const errors = {};

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp("^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$");

    if(!regexEmail.test (inputs.username)) {
        errors.username = "Name must be a valid email addres";
    }
    if(!inputs.name) {
        errors.username = "Add your name"
    }
    if(inputs.username > 35) {
        errors.username = "Max length 35"
    }
    if(!regexEmail.test (inputs.password)) {
        errors.password = "Add pass 6-10 characters"
    }
    return errors;
}