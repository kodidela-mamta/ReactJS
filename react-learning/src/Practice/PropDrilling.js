import React from 'react'
import PropDrillingChildOne from './PropDrillingChildOne'

const PropDrilling = () => {
    const courseDetails = {
        name: 'React',
        price: '$15'
    }
    return (
        <div>
            <PropDrillingChildOne courseDetails={courseDetails} />
        </div>
    )
}

export default PropDrilling
