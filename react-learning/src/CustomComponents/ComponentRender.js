import React from 'react';

const ComponentRender = ({ title, description, componentRender }) => {
    return (
        <div className='mainCard'>
            {/* title of complete */}
            <h3>{title}</h3>
            {/* description */}
            <span>{description}</span>
            {/* component to be render  */}
            <>{componentRender}</>
        </div>
    )
}
export default ComponentRender;
