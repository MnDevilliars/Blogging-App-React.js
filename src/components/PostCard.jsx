import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/database"
import { useNavigate } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false)

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (

    <div className="flex flex-col shadow-xl bg-[#120c16] w-full">
      <div className="m-2 overflow-hidden rounded-md h-72 flex justify-center items-center shadow-lg">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
        />
      </div>
      <div className="px-5 mt-2 flex justify-between items-center">
        <p className="text-xl font-bold tracking-tight text-copper-300 text-teal-100">
          {capitalize(title)}
        </p>
        <div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`text-lg duration-200 ${isLiked ? "text-[#FF0000]" : "text-white"}`}
          >
            {isLiked ? 'Like ❤️' : 'Like 🤍'}
          </button>
        </div>
      </div>
      <div className="flex justify-center px-4 pb-4 pt-2 mb-4">
        <button
          onClick={() => navigate(`/post/${$id}`)}
          className="w-full rounded-md py-2 px-4 text-lg border border-[#afdde5] bg-teal-500 hover:bg-teal-700 duration-300 text-[#120c16] font-semibold transition-all shadow-lg focus:ring-2 focus:ring-[#9b59b6] focus:ring-opacity-50 active:bg-[#4a39a7] disabled:pointer-events-none disabled:opacity-50"
          type="button"
        >
          See More
        </button>
      </div>
    </div>

  )
}


export default PostCard


{/*  
<div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
  <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
    <img class="w-full h-full object-cover" src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="mb-1 text-xl font-semibold text-slate-800">
      Natalie Paisley
    </h4>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
      Product Manager 
    </p>
    <p class="text-base text-slate-600 mt-4 font-light ">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
    </p>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <button class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Follow
    </button>
  </div>
</div> 
*/}



