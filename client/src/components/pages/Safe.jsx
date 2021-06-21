import React, { useEffect, useState } from "react";
import EntriesDashboard from "../EntriesDashboard";
import AddEntryForm from "../AddEntryForm";

function Safe(props) {

    let [entries, setEntries] = useState();

    // Get initial entries from DB.
    useEffect(() => {
        console.log("safe login: " + props.login);
        fetch("http://localhost:5000/populateDeck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                "body": JSON.stringify({
                    login: props.login
                })
        }).then(response => response.json()).then(data => {
            setEntries(data)
        });
    }, []);

    function addEntry(entry) {
        // To do: change so that it records on DB and updates from there.
        setEntries((previousState) => ([...previousState, entry]));
    }

    return(
        <div>
            <h1>Safe</h1>
            <EntriesDashboard entries={entries}/>
            <AddEntryForm onSubmit={addEntry}/>
        </div>
    );
}

export default Safe;