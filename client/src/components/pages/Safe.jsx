import React, { useState } from "react";
import EntriesDashboard from "../EntriesDashboard";
import FormDialog from "../FormDialog";

function Safe() {
    const initialEntries = [
        {
            title: "Facebook",
            login: "user@gmail.com",
            password: "test1",
            link: "facebook.com"
        },
        {
            title: "Google",
            login: "user@gmail.com",
            password: "test1",
            link: "google.com"
        },
        {
            title: "LinkedIn",
            login: "user@gmail.com",
            password: "test1",
            link: "linkedin.com"
        }
    ];

    let [entries, setEntries] = useState(initialEntries);

    return(
        <div>
            <h1>Safe</h1>
            <EntriesDashboard entries={entries}/>
            <FormDialog />
        </div>
    );
}

export default Safe;