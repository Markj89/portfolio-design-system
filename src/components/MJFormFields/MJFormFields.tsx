/**
 * MJFormFields
 * @type {Component} Form fields
 */
import React, { 
    useState,
    FC,
    ReactNode,
    CSSProperties,
    useRef,
    useContext,
} from "react";
import clsx from "clsx";
import { Theme, Grid } from "@mui/material";
import { Values, Errors } from "./MJFormFields.types";
import { makeStyles, createStyles } from '@mui/styles';
import { MJLabel } from "components/MJLabel";
import { FormContext, IFormContext } from "components/MJForm/MJForm";

type FieldType = | 'text' | 'number' | 'phone' | 'email' | 'select' | 'textarea' | 'checkbox';

export interface Validation {
    rule?: (values: Values, fieldName: string, args: any) => string;
    args?: any;
}

export interface MJFormFieldsProps {
    id?: string;
    label?: string;
    type: FieldType;
    required: boolean;
    placeholder?: string;
    options?: ReactNode;
    [key: string]: any;
    style?: CSSProperties;
    checkboxContent?: ReactNode;
    rows?: number;
    cols?: number;
    checked?: boolean;
    column?: number;
    value?: any;
    validation?: Validation;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    field: {
        border: `1px solid #0D0D0D`,
        padding: '1em 0.9375em',
        borderRadius: '4px',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box',
        appearance: 'none',
        backgroundColor: '#fff',
        display: 'inline-block',
        '&:focus': {
            outline: '2px solid #007876'
        },
        '&:focus-visible': {
            outline: '2px solid #0396A6',
        },
    },
    textarea: {
        height: 'auto',
        maxHeight: '200px',
        maxWidth: '100%',
        minHeight: '110px',
        padding: '5px 10px 23px',
        boxSizing: 'border-box',
        appearance: 'none',
        fontSize: '16px',
        backgroundColor: '#fff',
        border: `1px solid #0D0D0D`,
        width: '100%',
        borderRadius: '4px',
        '&:focus': {
            outline: '2px solid #007876'
        },
        '&:focus-visible': {
            outline: '2px solid #0396A6',
        },
    }
}));

export const MJFormFields: FC<MJFormFieldsProps> = ({ id, type, label, required, placeholder, value, columnType, rows, cols, style, checked, checkboxContent }: FieldProps) => {
    const classes = useStyles();
    const inputName = useRef<HTMLInputElement>(null);
    const context = useContext(FormContext);
    const { setValues, setErrors, errors } = context;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setValues({ [id]: event.currentTarget.value });
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return setValues({ [id]: event.currentTarget.value });
    };

    /**
     *  Gets the validation error for the field
     *  @param {Errors} errors - All the errors from the form
     *  @returns {string[]} - The validation error
    */
    const getError = (errors: Errors): string => (errors ? errors[id] : "");

    return (
        <FormContext.Consumer>
            {(context: IFormContext) => (
                <Grid item xs={12} sm={columnType}>
                    <MJLabel id={id} htmlFor={label}>{required ? ( `${label}`  ) : ( `${label} (Optional)`) }</MJLabel>
                    {type === 'text' && (
                        <input
                            aria-required={required}
                            style={style}
                            required={required}
                            id={id as string}
                            aria-label={label}
                            name={id as string}
                            ref={inputName}
                            type="text"
                            value={value}
                            placeholder={placeholder}
                            onChange={handleInputChange}
                            onBlur={() => setErrors(id)}         
                            className={classes.field}
                        />
                    )}
                    {type === 'email' && (
                        <input
                            name="email"
                            type="email"
                            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                            aria-label={label}                            
                            aria-required={required}
                            ref={inputName}
                            onChange={handleInputChange}
                            onBlur={() => setErrors(id)}
                            placeholder={placeholder}
                            value={value}
                            required={required}
                            className={classes.field}
                        />
                    )}
                    {type === 'phone' && (
                        <input
                            type="tel"
                            name={id}
                            aria-label={label}
                            aria-required={required}
                            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                            maxLength={12}
                            ref={inputName}
                            onChange={handleInputChange}
                            onBlur={() => setErrors(id)}
                            value={value}
                            placeholder={placeholder}
                            required={required}                            
                            className={classes.field}
                        />
                    )}
                    { type === "textarea" && (
                        <textarea
                            id={id}
                            name={id}
                            value={value}                            
                            rows={rows}
                            onChange={handleTextAreaChange}
                            onBlur={() => setErrors(id)}
                            placeholder={placeholder}
                            required={required}
                            cols={cols}
                            className={classes.textarea}
                        />
                    )}
                    {getError(errors.errors) && (
                        <div style={{ color: "red", fontSize: "80%" }}>
                            <p>{getError(errors.errors)}</p>
                        </div>
                    )}
                </Grid>
            )}
        </FormContext.Consumer>
    );
}