import { check } from 'express-validator';

export const signupValidation = [
    check("email")
        .notEmpty()
        .withMessage("E-mail is required")
        .bail()
        .isEmail()
        .withMessage('Incorrect email format'),
    check("firstName")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("First name is required")
        .bail()
        .matches(/^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/)
        .withMessage("Incorrect first name format"),
    check("lastName")
        .optional({ nullable: true })
        .matches(/^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/)
        .withMessage("Incorrect last name format"),
    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .bail()
        .isLength({ max: 20 })
        .withMessage("Password must be less or equal 20 characters")
        .bail()
        .matches('[0-9]')
        .withMessage('Password must contain numbers')
        .bail()
        .matches('[a-zA-Z]')
        .withMessage('Password must contain letters')
        .bail()
        .matches('[a-z]')
        .withMessage('Password must contain lowercase letters')
        .bail()
        .matches('[A-Z]')
        .withMessage('Password must contain uppercase letters')
        .bail()
        .trim()
        .escape(),
    check("passwordRepeat")
        .notEmpty()
        .withMessage("Password confirmation is required")
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Provided password and password confirmation do not match"),
    check("phoneNumber")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Phone number is required")
        .bail()
        .isMobilePhone(['uk-UA', 'ru-RU'])
        .withMessage("Incorrect phone number format")   
];

export const signinValidation = [
    check("email")
        .notEmpty()
        .withMessage("E-mail is required")
        .bail()
        .isEmail()
        .withMessage('Incorrect email format'),
    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .bail()
        .isLength({ max: 20 })
        .withMessage("Password must be less or equal 20 characters")
        .bail()
        .matches('[0-9]')
        .withMessage('Password must contain numbers')
        .bail()
        .matches('[a-zA-Z]')
        .withMessage('Password must contain letters')
        .bail()
        .matches('[a-z]')
        .withMessage('Password must contain lowercase letters')
        .bail()
        .matches('[A-Z]')
        .withMessage('Password must contain uppercase letters')
        .bail()
        .trim()
        .escape()
];

const validator = {
    signup: signupValidation,
    signin: signinValidation
};

export default validator;