import {Component} from 'react';

class TeamStandings extends Component {
    constructor(){
        super();
        this.state = {
            standings:[],
        };
    }


    componentDidMount(){
        this.callApi();
    }
    
    callApi() {
        fetch('https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/division_team_standings.json', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "Basic "+ btoa("58c6652f-f1c1-4ca1-b27c-5cf027:gatech#1")
            }
        })
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result);
            
                return(result.divisionteamstandings);
        })

    }
    render(){
        return null;
    }

}
export default TeamStandings;