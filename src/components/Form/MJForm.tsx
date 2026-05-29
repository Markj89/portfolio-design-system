/**
 * Form
 * @type {Component}
 */
import React, { FC, ReactNode, createContext, useState, FormEvent } from 'react';
import theme from '../theme';
import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Values, Errors } from '../../utils/fieldErrors';
import { FormFields, FormState } from '../../utils/fieldErrors';
import { hasErrors } from '../../utils/validation';
export interface IFormContext extends FormState {
    /* Function that allows values in the values state to be set */
    setValues?: (values: Values) => void;
  
    /* Function that validates a field */
    setErrors?: (fieldName: string) => void;
}

interface FormProps {
    action: string;
    method: string;
    [key: string]: any;
    fields: FormFields;
    children?: ReactNode | ReactNode[];
}

export const FormContext = createContext<IFormContext | undefined>(undefined);

const useStyles = makeStyles((theme: Theme) => createStyles({
    fieldset: {
        border: '0',
        padding: '0'
    },
    root: {
        "> a, button, [role='button'], input, label, select, textarea": {
            touchAction: 'manipulation'
        },
        '> input, select': { verticalAlign: 'middle', },
    }
}));

export const Form: FC<FormProps> = (props: FormProps) => {
    const classes = useStyles();
    const { action, method, children, fields } = props;
    const [values, setValues] = useState<{values: Values}>({});
    const [errors, setErrors] = useState<{errors: Errors}>({ errors : []});
    const [submit, setSubmit] = useState(false);

    const state = {
        errors,
        values
    };

    /**
     *  Handles form submission
     *  @param {FormEvent<HTMLFormElement>} - The form event
    */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (validateForm()) {
            try { 
            } catch (err) {
                console.log(err);
                setSubmit(false);
            }
        
        }
    };
    
    /**
     *  Executes the validation rules for all the fields on the form and sets the error state
     *  @returns {boolean} - Returns true if the form is valid
    */
    function validateForm(): boolean {
        const errors: Errors = {};
        Object.keys(fields).forEach((field: string, i: number) => {
            errors[fields[field].id] = validated(fields[field].id);
        });
        setErrors({ errors });
        return !hasErrors(errors);
    };


    const validated = (fieldName: string): string => {
        let newError: string = "";
        for ( let val in fields) {
            if (fields[val].id === fieldName && fields[val].validation) {
                newError = fields[val].validation!.rule(state.values, fields[val].id, fields[val].validation!.args);
            }
        }
    
        state?.errors[fieldName] = newError;
        setErrors({ errors: {...state.errors, [fieldName]: newError }});
        return newError;
    };

    const context: IFormContext = {
        ...state,
        setValues: (e) => setValues({ ...state.values, ...e }),
        setErrors: (e) => validated(e),
    };

    return (
        <FormContext.Provider value={context}>
            <form autoComplete="off" onSubmit={(event) => handleSubmit(event)} action={action} method={method} className={classes.root} aria-label="Contact Form" noValidate={true}>
                <legend>Contact Form</legend>
                <fieldset className={classes.fieldset}>
                    {children}
                    <div>
                        {submit && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                        </div>
                        )}
                       
                    </div>
                </fieldset>
            </form>
        </FormContext.Provider>
    );
};