import React from 'react';
import "../bootstrap.min.css";

class TeamStandings extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading :false,
          standings: null,
          error: null
        };
      }
    InitialState(){
        return {standings:{}};
    }
    
    componentDidMount() {
        fetch('https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/division_team_standings.json', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "Basic "+ btoa("58c6652f-f1c1-4ca1-b27c-5cf027:gatech#1")
            }
        })
        .then(res => {
            if(res.ok){
               return res.json();
            }else{
                throw new Error("Something went wrong");
            }
        })
        .then(
            (result)=>{
                let listOfDivisions = result.divisionteamstandings.division;
                let arr = {"ALW":[],
                "ALC":[],
                "ALE":[],
                "NLW":[],
                "NLC":[],
                "NLE":[]};
                for(let i=0; i<listOfDivisions.length;i++){
                    if(listOfDivisions[i]["@name"]==="American League/West"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.ALW.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="American League/Central"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.ALC.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="American League/East"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.ALE.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/West"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.NLW.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/Central"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.NLC.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                    else if(listOfDivisions[i]["@name"]==="National League/East"){
                        for(let j=0; j<listOfDivisions[i].teamentry.length; j++){
                            arr.NLE.push(listOfDivisions[i].teamentry[j].team.Abbreviation);
                        }
                    }
                }
                this.setState({standings:arr});
               
        }).catch(error=>this.setState({error,isLoading:false}));

    }
    render(){
        // console.log(this.state)
        // console.log(this.state.standings);
        for( let division in this.state.standings){
            // console.log(division);
                switch(division){
                    case "ALW":
                        var alwButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            alwButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                         }
                        break;
                    case "ALC":
                        var alcButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            alcButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                        }
                        break;
                    case "ALE":
                        var aleButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            aleButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                        }
                        break;
                    case "NLW":
                        var nlwButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            nlwButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                        }
                        break;
                    case "NLC":
                        var nlcButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            nlcButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                        }
                        break;
                    case "NLE":
                        var nleButtons = [];
                        for(let teamName in this.state.standings[division]){
                            console.log(this.state.standings[division][teamName]);
                            nleButtons.push(<button>{this.state.standings[division][teamName]}</button>)
                        }
                        break;
                    default:
                        break;
                }

        } 
        return (<div id="standings">
                    <div id="American League">
                        <div id="ALWEST" name="ALWEST">
                        <label htmlFor="ALWEST">AL West</label>
                            {alwButtons}
                        </div>
                        <div id="ALCENTRAL" name="ALCENTRAL">
                        <label htmlFor="ALCENTRAL">AL Central</label>
                            {alcButtons}
                        </div>
                        <div id="ALEAST" name="ALEAST">
                        <label htmlFor="ALEAST">AL East</label>
                            {aleButtons}
                        </div>
                    </div>
                    <div id="National League">
                    <div id="NLWEST" name="NLWEST">
                        <label htmlFor="NLWEST">NL West</label>
                            {nlwButtons}
                        </div>
                        <div id="NLCENTRAL" name="NLCENTRAL">
                        <label htmlFor="ALWEST">NL Central</label>
                            {nlcButtons}
                        </div>
                        <div id="NLEAST" name="NLEAST">
                        <label htmlFor="NLEAS">NL East</label>
                            {nleButtons}
                        </div>
                    </div>
                </div>);
    }

}
export default TeamStandings;