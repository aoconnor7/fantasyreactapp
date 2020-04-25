import React from 'react'

function PositionFilter(props) {

    return(
        <select onChange={props.positionSelected}>
            <option>ALL</option>
            <option>1st Base</option>
            <option>Starting Pitcher</option>
        </select>
    )
}
export default PositionFilter