import React from 'react'

function New(){
    return(
        <div>
            <h1>Log page New</h1>

            <form action="/logs" method="POST">
                Title: <input type="text" name='title' /> <br />
                Entry: <input type="textarea" name='entry' /> <br />
                Is the ship broken? <input type="checkbox" name='shipIsBroken' /><br />
                Submit <input type="submit" />
            </form>
            <nav>
                <a href="/logs">Log History</a>
            </nav>
        </div>
    )
}

module.exports = New