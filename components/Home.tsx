"use client";

import { use, useEffect, useRef } from "react";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export const Home = ({postMetadata}) => {
    
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));

    useEffect(() => {
        fetch('https://sheetdb.io/api/v1/yuh384fc5uwmp', {
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
        .then((data) => console.log(data));    }, []);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
        </div>
    );
};

