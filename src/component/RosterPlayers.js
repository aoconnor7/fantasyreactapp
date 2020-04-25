// import {Component} from 'react';
// import "../bootstrap.min.css";

// class RosterPlayers extends Component {
//     constructor(props){
//         super();
        
//     }

//     componentDidMount() {
//         fetch('https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/roster_players.json', {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Authorization': "Basic "+ btoa("58c6652f-f1c1-4ca1-b27c-5cf027:gatech#1")
//             }
//         })
//         .then(res => res.json())
//         .then(
//             (result)=>{
//                 let listOfPlayers = result.rosterplayers.playerentry;
//                 let arr = [];
//                 for(let i=0; i<listOfPlayers.length;i++){
//                     arr.push({name:listOfPlayers[i].player.FirstName + " " + listOfPlayers[i].player.LastName,id:listOfPlayers[i].player.ID});
//                 }
//                 this.setState({listOfPlayers:arr});
//         })

//     }
//     render(){
//         console.log(this.state);
//         return null;
//     }

// }
// export default RosterPlayers;