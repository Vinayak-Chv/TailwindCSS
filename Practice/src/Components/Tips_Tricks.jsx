import React from 'react'

export const Tips_Tricks = () => {
  return (
    <>
    {/* Accent */}
        <div className='my-4 flex flex-col text-white ml-2 space'>
            <label><input type='checkbox' checked /> Browse Default</label>
            <label><input type='checkbox' className='accent-pink-500' checked /> Customized</label>
        </div>

    {/* Fluid Text */}
    {/* <p className='sm:text-7xl text-5xl text-amber-100'>Something Nice</p> */}
    <p className='text-[clamp(1rem, 10vw, 70px)] text-amber-100 space'>Something Fluid</p>

    {/* File Upload */}
    <label className='my-4 block space'>
        <input type='file' className='block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:p-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100' />
    </label>

    {/* Highlight */}
    <div className='selection:bg-green-400 selection:text-white space'>
        <p className='text-amber-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia distinctio animi doloremque, officiis rerum architecto tempora temporibus dignissimos totam ut officia eum commodi dolores necessitatibus exercitationem voluptates iste eligendi repellendus.</p>
    </div>

    {/* Caret */}
    <textarea className='space w-full caret-pink-200 text-white border-amber-100' placeholder='type something...' />
    </>
  )
}
