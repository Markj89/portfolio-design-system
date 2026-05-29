/**
 * Validation Functionality
 */
import { Values, Errors } from "./fieldErrors";
/**
 *  Validates whether the field(s) are not empty
 *  @param values
 *  @param field 
 *  @param error 
 *  @returns {string} The error message
 */
export const isRequired = (values: Values, fieldName: string, error: string): string => {
    return values[fieldName] === undefined ||  values[fieldName] === null || values[fieldName] === "" ? error : '';
};

/**
 *  Validates whether a field is a valid email
 *  @param {Values} values - All the field values in the form
 *  @param {string} fieldName - The field to validate
 *  @returns {string} - The error message
 */
export const isEmail = (values: Values, fieldName: string, error: string): string => {
    return values[fieldName] && values[fieldName].search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? error : "";
}

/**
 *  Returns whether there are any errors in the errors object that is passed in
 *  @param {Errors} errors - The field errors
 *  @returns {boolean} - Whether there are any errors
 */
export const hasErrors = (errors: Errors) => {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string, index: number) => {
        if (errors[key].length > 0) {
            haveError = true;
        }
    });
    return haveError;
};

/**
 * Validates whether a field is within a certain amount of characters
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @param {number} length - The maximum number of characters
 * @returns {string} - The error message
 */
export const maxLength = (values: Values, fieldName: string, length: number): string => values[fieldName] && values[fieldName].length > length ? `This can not exceed ${length} characters` : "";
