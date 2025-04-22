import React from 'react'
import Keyword from '../12/Keyword';

export default function TailCard(props) {
  const keywords = props.keyword.split(",", 6).map(item => <Keyword key={item} keyword={item} />);
  return (
    <div className='w-2xs m-3 flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm'>
      <div className='w-full h-70 rounded-t-lg overflow-hidden'>
        <img src={props.imgurl} alt={props.title} className='w-full h-full object-cover' />
      </div>
      <span className='ml-3 mt-3 font-bold text-xl text-gray-700'>
        {props.title}
      </span>
      <span className='ml-3 mt-1 font-light text-gray-500'>
        {props.subtitle}
      </span>
      <div className='mx-2 my-3'>
        {keywords}
      </div>
    </div>
  )
}
