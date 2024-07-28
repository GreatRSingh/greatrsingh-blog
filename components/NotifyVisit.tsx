"use client";

import { useEffect } from "react";

export default function NotifyVisitor() {

    useEffect(() => {fetch('https://sheetdb.io/api/v1/yuh384fc5uwmp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'id': "INCREMENT",
                    'date-time': "DATETIME"
                }
            ],
            return_values: true
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data));}, []);
    

    return (
        <div>
        
        </div>
    );
}