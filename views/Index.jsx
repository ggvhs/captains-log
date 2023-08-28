import React from 'react';


module.exports = function Index({logs}) {

    return(
        <div>
        <nav>
            <a href="/logs/new">New captins Log</a>
        </nav>
        <h1>Log History</h1>
        <ul>
            {logs.map((log, index) => {
                return(
                    <li key = {index}> The title of the log is : <a href={`/logs/${log.id}`}>{log.title}</a> <br />

                    Log : <br />

                    {log.entry} <br />

                    {log.shipIsBroken ? "its broke" : "its not broke"} <br />



                    </li>  
                )
            })}
        </ul>
        </div>
    )
}