// import statements
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking

// Component definition
const Button = (props) => {
    // Destructure props for easier access
    const { onClick, children, disabled, type, className, variant } = props;

    const variants = {
        primary: 'w-[150px] h-[40px] rounded-md bg-blue-500 font-sans text-white text-p-md font-semibold px-8 py-2 hover:bg-blue-600',
        secondary: 'w-[150px] h-[40px] rounded-md bg-gray-500 font-sans text-white text-p-md  hover:bg-gray-600',
        // Add more variants as needed
      };
  
    return (
      <button
        type={type}
        onClick={onClick}
        children={children}
        disabled={disabled}
        className={`${variants[variant]} ${className || ''}`}
        variant={variant}
      >
      </button>
    );
  };

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
  };
  
  Button.defaultProps = {
    disabled: false,
    type: 'button',
    className: '',
    variant: 'primary',
  };


  export default Button;