import React from 'react'

function Show({ log }) {

    return (
        <div>

        <h1>{log.title}</h1>
        <br />
        <p>Log Entry:</p>
        <p>{log.entry}</p>
        <br />
        {
            log.shipIsBroken ? "its broke" : "its not broke"
        }
        <br />
        <a href="/logs">Log History</a>
        </div>
    )
}

module.exports = Show;