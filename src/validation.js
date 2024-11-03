import validator, { isNumeric } from "validator";

class Validation_class {
  password_validation(password) {
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 2,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
    ) {
      return true;
    } else {
      return false;
    }
  }
  email_validation(email) {
    if (validator.isEmail(email)) return true;
    else return false;
  }
  username_validation(username) {
    const exp = new RegExp(/^[A-Za-z][A-Za-z0-9_]{5,15}$/g);
    if (exp.test(username)) return true;
    else return false;
  }
}
const validation = new Validation_class();
export default validation;
