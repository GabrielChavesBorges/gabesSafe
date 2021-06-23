import React, { useEffect, useState } from "react";
import EntriesDeck from "../EntriesDeck";
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
    }, []);

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

    function deleteEntry(entry) {
        fetch("http://localhost:5000/entry", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                "body": JSON.stringify({"login": props.login, "entryId": entry})
        }).then(response => response.json()).then(data => setEntries(data));
    }

    function editEntry(entry) {
        fetch("http://localhost:5000/entry", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                "body": JSON.stringify({
                    "login": props.login, 
                    "updatedEntry": entry
                })
        }).then(response => response.json()).then(data => setEntries(data));
    }

    return(
        <div>
            <h1>Safe</h1>
            <EntriesDeck 
                entries={entries} 
                onDelete={deleteEntry}
                onEdit={editEntry}
            />
            <AddEntryForm onSubmit={addEntry}/>
        </div>
    );
}

export default Safe;