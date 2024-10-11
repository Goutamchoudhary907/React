import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function github() {
 const data = useLoaderData()                          // Using react router (Loader)
  // const [data,setData] =useState([])                // using useEffect hook
  // useEffect( () =>{
  //  fetch('https://api.github.com/users/goutamchoudhary907')
  //  .then(response => response.json())
  //  .then(data =>{
  //   console.log(data);
  //   setData(data)
  //  })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default github

export const githubInfoLoader= async () =>{
  const response= await fetch('https://api.github.com/users/goutamchoudhary907');
  return response.json();
}