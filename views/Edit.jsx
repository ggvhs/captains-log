import React from 'react'

function Edit({log}) {
    return (
        <div>
            <form method='POST' action={`/logs/${log._id}?_method=PUT`}>
                Title: <input type="text" name='title' /> <br />
                Entry: <input type="textarea" name='entry' /> <br />
                Is the ship broken? <input type="checkbox" name='shipIsBroken' /><br />
                Submit <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

module.exports = Edit