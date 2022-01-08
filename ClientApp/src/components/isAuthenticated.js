import { useState, useEffect } from "react";


export default function IsAuthenticated() {
    // lines of code in between
    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
        const response = await fetch(
            "api/Authenticate"
        );
        const data = await response.json();
        //update the state
        setPosts(data);
    };

    useEffect(() => {
        fetchPost()
    }, []);


    return (
        posts.ok
    );
}

