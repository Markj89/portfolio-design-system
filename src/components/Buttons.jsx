import React from 'react';
import PropTypes from "prop-types";


export const BUTTON_STYLES = {
  primary: "",
  green: "",
}

const Button = ({ children, buttonStyle, ...elementProps }) => {
  const classes = Classnames("button", `button--style-${buttonStyle}`);

  return (
    <button className={classes} {...elementProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonStyle: BUTTON_STYLES.primary
};

Button.propTypes = {
  buttonStyle: PropTypes.oneOf(values(BUTTON_STYLES))
};

export default Button;
