import React from 'react'
import PropDrillingChildTwo from './PropDrillingChildTwo'

const PropDrillingChildOne = ({courseDetails}) => {
    console.log('PropDrillingChildOne',courseDetails)
    return (
        <div><PropDrillingChildTwo courseDetails={courseDetails} /></div>
    )
}

export default PropDrillingChildOne