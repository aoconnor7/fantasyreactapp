import React from 'react'

function TeamFilter(props){    

    return (
        <select onChange={props.teamSelected}>
            <option>ALL</option>
            <option>Philadelphia Phillies</option>
            <option>Atlanta Braves</option>
        </select>
    )
}

export default TeamFilter;