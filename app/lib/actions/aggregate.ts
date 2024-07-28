"use server";

export async function aggregate(route: string) {
    await fetch('https://sheetdb.io/api/v1/q8jwalzc3gh0f', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'id': "INCREMENT",
                    'date-time': "DATETIME",
                    'route': route
                }
            ]
        })
    })
    
    return;
}