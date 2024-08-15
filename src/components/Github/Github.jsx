import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    /** this is one way to do this job but some more octmized way is done this
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/ashwanipydev')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    */

  return (
    <div className="flex justify-center min-h-full mt-16 mb-7 ">
            <div class="w-[400px] rounded-md border text-center py-7 px-7 ">
              <img
                src={data.avatar_url}
                class="h-[355px] w-full rounded-full object-cover py-2"
              />
              <div class="p-4">
                <h1 class="text-2xl font-semibold text-black">Ashwani Pandey</h1>
                <p class="mt-3 text-lg bg-gray-600 text-white p-3 rounded-lg">
                  GitHub followers: <span className="text-xl text-center">{data.followers}</span>
                </p>
              </div>
            </div>
        </div>
  )
}

export default Github

export const gitdatainfo = async () =>{
    const res = await fetch('https://api.github.com/users/ashwanipydev')
    return res.json()
}