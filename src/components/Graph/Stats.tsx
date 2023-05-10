import React, {Fragment, useEffect, useState} from "react";

const Stats = () => {
    const [totalCases, setTotalCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [activeCases, setActiveCases] = useState(0);
    const [todayCases, setTodayCases] = useState(0);
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all").then(res => res.json())
        .then(data => {
            setTotalCases(data.cases);
            setDeaths(data.deaths);
            setRecovered(data.recovered);
            setActiveCases(data.active);
            setTodayCases(data.todayCases);
        })
    }, [])
    return (
        <Fragment>
            <div className="shadow-lg w-10/12 ml-auto mr-auto mt-10 flex flex-col p-10">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-5xl text-blue-500">Total Cases</h2>
                        <p className="text-xl">{totalCases}</p>
                    </div>
                    <div>
                        <h2 className="text-5xl text-blue-500">Recovered</h2>
                        <p className="text-xl">{recovered}</p>
                    </div>
                    <div>
                        <h2 className="text-5xl text-blue-500">Deaths</h2>
                        <p className="text-xl">{deaths}</p>
                    </div>
                </div>
            <div className="flex justify-evenly">
                    <div>
                        <h2 className="text-5xl text-blue-500">Active cases</h2>
                        <p className="text-xl">{activeCases}</p>
                    </div>
                    <div>
                        <h2 className="text-5xl text-blue-500">Closed cases</h2>
                        <p className="text-xl">{todayCases}</p>
                    </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Stats;