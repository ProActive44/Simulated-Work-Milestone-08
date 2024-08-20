import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileBio from "../components/Profile/ProfileBio";
import ProfilePost from "../components/Profile/ProfilePost";

export default function Profile(){
    return(
        <div className="">
          <br/>
          <br/>
          <br/>
            <ProfileHeader/>
            <ProfileBio/>
            <ProfilePost/>
        </div>
    )
   
}