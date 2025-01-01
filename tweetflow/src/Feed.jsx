import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./feed.css";

function Feed(){
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_headerr">
        <h2>Home</h2>
        </div>
    
            <TweetBox />

            <Post displayName="Sunny" 
            username='ssanga' 
            verified 
            text="YOO its working"
            avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" />
            <Post />
            <Post />
            <Post />
            <Post />
        
        </div>
    )
}

export default Feed;