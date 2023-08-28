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
                    <form method="POST" action={`/logs/${log.id}?_method=DELETE`}>
                        <input type="submit" value='DELETE' />
                    </form>
                    <a href={`/logs/${log._id}/edit`}>edit log</a>



                    </li>  
                )
            })}
        </ul>
        </div>
    )
}