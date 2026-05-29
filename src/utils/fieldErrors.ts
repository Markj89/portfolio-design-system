import { MJFieldProps } from "../components/FormFields/Fields/MJFormFields";

export interface Values {
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any;
}

export interface Errors {
    /* The validation error messages for each field (key is the field name */
    [key: string]: string;
}

export interface FormFields {
    [key: string]: MJFieldProps;
}

export interface FormState {
    /* The field values */
    values: Values;
  
    /* The field validation error messages */
    errors: Errors;
  
    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}