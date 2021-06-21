import React, { useEffect, useState } from "react";
import EntriesDashboard from "../EntriesDashboard";
import AddEntryForm from "../AddEntryForm";
import { useHistory } from "react-router-dom";

function Safe(props) {

    let history = useHistory();
    let [entries, setEntries] = useState([]);

    // Get initial entries from DB.
    useEffect(() => {
        if(props.login === "") {
            history.push("/");
        } else {
            fetch("http://localhost:5000/populateDeck", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    "body": JSON.stringify({
                        login: props.login
                    })
            }).then(response => response.json()).then(data => setEntries(data));
        }
    }, );

    function addEntry(entry) {
        fetch("http://localhost:5000/insertEntry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                "body": JSON.stringify({"login": props.login, "entry": entry})
        }).then(response => response.json()).then(data => setEntries(data));
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