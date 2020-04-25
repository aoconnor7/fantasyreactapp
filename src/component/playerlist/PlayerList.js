import React, { useEffect, useState } from 'react'

function PlayerList(props){

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const searchUpdate = event => {
        setSearchTerm(event.target.value);
    };

    useEffect( ()=>{
        // console.log(`team selected ${props.teamFilter}`)
        // console.log(`position selected ${props.positionFilter}`)
        const results = props.listOfPlayers.filter(person =>
            person.label.toLowerCase().includes(searchTerm) &&
            (props.teamFilter === 'ALL' ? true : props.teamFilter === person.team) &&
            (props.positionFilter === 'ALL' ? true : props.positionFilter === person.position)
          );
          setSearchResults(results);
        }, [searchTerm,props.teamFilter,props.positionFilter]
    )

    return(
        <div>
            <input type='search' placeholder='Search Player' onChange={searchUpdate} value={searchTerm}/>
            <form>
                {searchResults.map(item => (
                    <div>
                    <input type='checkbox' name={item.label} onClick={props.playerSelected}/>
                    <label>{item.label}</label>
                    </div>
                ))}
            </form>

        </div>

        // <ReactMultiSelectCheckboxes options={options} placeholderButtonLabel="Search Player Name" isOpen={true}/>
           
    )
}
export default PlayerList