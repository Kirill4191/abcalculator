// import statements
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking

// Component definition

const GeneralContainer = (props) => {

    // Destructure props for easier access
    const {children, title, className } = props;

    return (
        // here is the resin container code with title, margins, color
            <div>
            <p>{title}</p>
            <div className="w-[930px] border-solid border-2 border-black-600">
                {children}
            </div>
            </div>
    );
}

export default GeneralContainer;