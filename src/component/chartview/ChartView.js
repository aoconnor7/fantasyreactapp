import React from 'react'
import Chart from "react-google-charts";


function ChartView(props){

    console.log(`${props.playersSelected.map(player =>player.label)}`)
    const player1 = props.playersSelected[0].hits;
    const player2 = props.playersSelected[1]!= undefined ? props.playersSelected[1].hits : 0;
    console.log(`player1 ${player1}`)
    console.log(`player2 ${player2}`)
    return (
        <div>
            {/* {props.playersSelected.map(player =>
                <p>{player.label}</p>
                )} */}
                <Chart 
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'dogs', 'cats'],
                    [1960, player1, player2]
                ]}
                options={{
                    hAxis: {
                    title: 'Year',
                    },
                    vAxis: {
                    title: 'Hits',
                    },
                    series: {
                    0: {curveType: 'function'},
                    1: { curveType: 'function' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }} />
                        </div>
                    )
}

export default ChartView