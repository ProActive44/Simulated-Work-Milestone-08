import React from 'react'

const ProfileHeader = ()=>{
  return (
    <div className="flex gap-2 items-center m-4">

        <img src="https://via.placeholder.com/150" alt="Profile Image" className="rounded-full w-[80px]"/>
        <div >
            <h2 className="font-semibold">username</h2>
            <div className="flex gap-2">
            <div className="flex gap-1"><p className="font-semibold">100 </p>posts</div>
            <div className="flex gap-1"><p className="font-semibold">200k </p>followers</div>
            <div className="flex gap-1"><p className="font-semibold">100k </p>following</div>
            </div>
        </div>
    </div>
  )
}


export default ProfileHeader