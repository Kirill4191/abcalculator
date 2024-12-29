// import statements
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking

// Component definition

const GeneralContainer = (props) => {

    // Destructure props for easier access
    const {number, children, title, className } = props;

    return (
        // here is the resin container code with title, margins, color
        <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Number aligned to right edge of first column */}
            <div className="col-span-1 flex justify-end items-start">
                <div className="text-4xl font-bold text-gray-700 mt-6">{number}</div>
            </div>
            
            {/* Content from column 2 to 11 exactly */}
            <div className="col-start-2 col-span-10">
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