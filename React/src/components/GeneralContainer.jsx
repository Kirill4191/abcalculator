// import statements
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking

// Component definition

const GeneralContainer = (props) => {

    // Destructure props for easier access
    const {children, title, className } = props;

    return (
        // here is the resin container code with title, margins, color
        <div className="flex gap-6">            
            {/* Content */}
            <div className="flex-1">
                <div className="h-6 pl-6">
                    <h2 className="text-xl font-semibold -mt-2 bg-white pr-2 inline-block -ml-6">
                        {title}
                    </h2>
                </div>
                <div className="border border-gray-200 rounded-lg shadow-sm bg-white relative">
                    <div className="p-6 -mt-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralContainer;