import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Git() {
    const data = useLoaderData();
  return (

    <div className='bg-gray-600 text-white text-center'>
        Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Avatar" width={300}/>
    </div>
    
  )
}

export default Git


export const LoadGitData = async () =>{
    const response = await fetch('https://api.github.com/users/vanshbhardwajhere');
    console.log(response);
    return response.json();
}