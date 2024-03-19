import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-12 absolute text-white bg-gradient-to-r from-black opacity-100">
        <h1 className="pl-10 text-3xl font-bold">{title}</h1>
        <p className="py-6 pl-10 text-md w-1/3">{overview}</p>
        <div className="pl-10">
            <button className="bg-gray-500 text-white p-4 px-12 text-xs bg-opacity-55 rounded-lg">▶️Play</button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xs bg-opacity-55 rounded-lg">More Info ℹ️</button>
        </div>
    </div>
  )
}

export default VideoTitle;