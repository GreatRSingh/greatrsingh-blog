"use client";

import {  useEffect } from "react";
import PostPreview from "../components/PostPreview";

interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
}

export const Home = ({postMetadata}:{postMetadata: PostMetadata[]}) => {
    
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

