import React from 'react'

const ProfilePost = ()=>{

  let posts = [
    {id:1, img: "https://via.placeholder.com/150"},
    {id:2, img: "https://via.placeholder.com/150"},
    {id:3, img: "https://via.placeholder.com/150"},
    {id:4, img: "https://via.placeholder.com/150"},
    {id:5, img: "https://via.placeholder.com/150"},
    {id:6, img: "https://via.placeholder.com/150"},
    {id:7, img: "https://via.placeholder.com/150"},
  ]

  return (
    <div className="flex flex-wrap"> 
     {posts.map((post)=>{
       return (<div key={post.id} className="relative w-1/3 p-1 sm:p-2">
            <img src={post.img} alt={`Post ${post.id}`} className="w-full h-auto object-cover"/>
       </div>)
     })}

    </div>
  )
}


export default ProfilePost