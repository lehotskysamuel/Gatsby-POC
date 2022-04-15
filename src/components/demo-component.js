import React from 'react';

const DemoComponent = ({name}) => {
    return (
        <div>
            Hello {name ?? "demo"}
        </div>
    );
};

export default DemoComponent;
