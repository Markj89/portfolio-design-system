/**
 * Form
 * @type {Component}
 */
import React, { FC, ReactNode, createContext, useState, FormEvent } from 'react';
import theme from 'components/theme';
import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Values, FormState, FormFields, Errors } from 'components/MJFormFields/MJFormFields.types';
import { hasErrors } from 'utils/validation';
import { MJButton } from 'components/MJButton';

export interface IFormContext extends FormState {
    /* Function that allows values in the values state to be set */
    setValues?: (values: Values) => void;
  
    /* Function that validates a field */
    setErrors?: (fieldName: string) => void;
}

interface MJFormProps {
    action: string;
    method: string;
    [key: string]: any;
    fields: FormFields;
    children?: ReactNode | ReactNode[];
    handleSubmit: () => void;
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

export const MJForm: FC<MJFormProps> = (props: MJFormProps) => {
    const { handleSubmit } = props;
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
    
        state.errors[fieldName] = newError;
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
            <form autoComplete="off" onSubmit={handleSubmit} action={action} method={method} className={classes.root} aria-label="Contact Form" noValidate={true}>
                <legend>Contact Form</legend>
                <fieldset className={classes.fieldset}>
                    {children}
                </fieldset>
            </form>
        </FormContext.Provider>
    );
};