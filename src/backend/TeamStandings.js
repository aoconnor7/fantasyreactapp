import {Component} from 'react';

class TeamStandings extends Component {
    constructor(){
        super();
        this.state = {
            standings:{"ALW":[],
                       "ALC":[],
                       "ALE":[],
                       "NLW":[],
                       "NLC":[],
                       "NLE":[]},
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
                let listOfDivisions = result.divisionteamstandings.division;
                for(let i=0; i<listOfDivisions.length;i++){
                    if(listOfDivisions[i]["@name"]==="American League/West"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.ALW.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="American League/Central"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.ALC.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="American League/East"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.ALE.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/West"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.NLW.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/Central"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.NLC.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/East"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            this.state.standings.NLE.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                }
                console.log(this.state);
                return(result.divisionteamstandings);
        })

    }
    render(){
        return null;
    }

}
export default TeamStandings;