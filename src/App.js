import React, {useState} from "react";
import TeamFilter from "./component/teamfilter/TeamFilter"
import PositionFilter from "./component/postionfilter/PositionFilter"
import PlayerList from "./component/playerlist/PlayerList";
import ChartView from "./component/chartview/ChartView"


function App() {

  const [teamSelected, setTeamSelected] = useState("ALL");
  const [positionSelected, setPositionSelected] = useState("ALL");
  const [selectedPlayers, setSelectedPlayers] = useState([])


  const listOfPlayers = [
    { label: "Ryan Howard", value: 1, position: "1st Base", team: "Philadelphia Phillies", hits:200, strikeouts:0 },
    { label: "Greg Maddux", value: 2, position: "Starting Pitcher", team: "Atlanta Braves", hits:2, strikeouts:140},
]

  const teamCallback = (event) => {
    console.log(event.target.value)
    setTeamSelected(event.target.value)
  }

  const positionCallback = (event) => {
    console.log(event.target.value)
    setPositionSelected(event.target.value)
  }

  const playerCallback = (event) => {
    console.log(`selected players before conditional ${selectedPlayers}`)
    console.log(`conditional ${selectedPlayers.filter(selectedPlayer => selectedPlayer.label === event.target.name).length}`)

    if (selectedPlayers.filter(selectedPlayer => selectedPlayer.label === event.target.name).length > 0) {
        setSelectedPlayers(selectedPlayers.filter(selectedPlayer => selectedPlayer.label !== event.target.name))
        console.log(`selected players after remove ${selectedPlayers}`)
    }else{
        setSelectedPlayers([...selectedPlayers, listOfPlayers.find(player => player.label === event.target.name)])
        console.log(`selected players after add ${selectedPlayers}`)
      }
  }

  return(
      <div>
        <TeamFilter teamSelected = {teamCallback}/>
        <PositionFilter positionSelected = {positionCallback}/>
        <PlayerList teamFilter = {teamSelected} positionFilter = {positionSelected} playerSelected ={playerCallback} listOfPlayers={listOfPlayers}/>
        {selectedPlayers.length === 0 ? null : <ChartView playersSelected={selectedPlayers}/>}
      </div>
    )
}

export default App;