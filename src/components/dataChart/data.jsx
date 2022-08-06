import React, { useState } from 'react';
import Chart from 'react-google-charts';
import Avg from '../post/avg.PNG';
import Range from '../post/range.PNG';
import Record from '../post/record.PNG';
import './data.css';
import { AreaChart } from './areaChart';


export const Graph = () => {

    const [data1, setData1] = useState([['Year', 'Sales'],
    ['2014', 1000],
    ['2015', 1170],
    ['2016', 660],
    ['2017', 1030]]);


    const LineChartOptions = {
        hAxis: {
            title: 'Time',
            beginAtZero: true,
            minValue: 0,
        },
        vAxis: {
            title: 'Popularity',
            beginAtZero: true,
            minValue: 0,

        },
        series: {
            1: { curveType: 'function' },
        },
    }
    return (
        <div>

            <div className='graph-container'>
                {/* "---------------------------------------------------------left part started here------------------------------------------------------------" */}
                <div className='graph-left'>
                    <div className='graph-left-top'>
                        <h1 style={{color:"rgb(73,73,73)",fontSize:"44px",fontweight:"300" ,marginTop:"20px", backgroundColor:"rgb(246,246,246)"}}>Lives Saved</h1>
                        </div>
                        <div>
                            <h1 style={{color:"black",fontSize:"64px",fontweight:"800"}}>10,857</h1>
                        </div>


                    <Chart
                        width={'500px'}
                        height={'600px'}
                        chartType="AreaChart"
                        loader={<div>Loading Chart</div>}
                        data={data1}
                        options={LineChartOptions}
                    />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '20px',
                        }}

                    >
                    </div>
                    
                </div>



                {/* "---------------------------------------------------------------Right div started-----------------------------------------------------------------------" */}

                <div className='graph-right'>
                    <div>
                        {/* Avg data */}
                        <img src={Avg} alt="avg" height="90%" />

                    </div>
                    <div>
                        {/* Range data */}
                        <img src={Range} alt="range" height="90%" width="100%" style={{ marginLeft: "1px"}} />
                    </div>
                    <div>
                        {/* Area chart */}
                        <AreaChart />
                    </div>
                    <div>
                        {/* Record data */}
                        <img src={Record} alt="record" height="100%" width="100%" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
