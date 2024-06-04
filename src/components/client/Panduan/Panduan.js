import React from 'react';
import Image from 'next/image';
import { DocumentTextIcon} from "@heroicons/react/20/solid";

const Panduan = ({}) => {
  return (
    <div className='mt-8'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center w-1/2'>
                <a className='px-8 pd py-3 bg-primary text-white active card border border-2  rounded-tr-none rounded-tl-l rounded-br-none rounded-bl-none text-center'>Panduan Alumni</a>
                <a className='px-8 pd py-3 bg-primary text-white  card border border-2  rounded-tr-l rounded-tl-none rounded-br-none rounded-bl-none text-center'>Panduan Dudi</a>
            </div>
            <div className='w-3/4 p-12 border flex flex-col justify-center items-center rounded-xl border-2'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DB6bWjeFxOQ?si=QsXa0pPAtT0A-qdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <hr className="w-full border-t border-gray-300 mt-4" />
            <div className='mt-6 flex flex-row card q-1/2 border p-4 justify-center items-center border-2'>
                <DocumentTextIcon className='text-primary w-12 h-12'/>
                <h1>Dokumen Panduan Alumni</h1>
            </div>
            </div>

        </div>
          </div>   
  )
}

export default Panduan

