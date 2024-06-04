import React from 'react';
import Image from 'next/image';
import { UserGroupIcon, Squares2X2Icon , PencilSquareIcon, DevicePhoneMobileIcon} from "@heroicons/react/20/solid";

const Dashboard = ({}) => {
  return (
    <div className='mt-8'>
    <div className="flex flex-col py-12 px-6 container">
                <div className="flex flex-row mt-16 justify-center">
                    <div className="flex flex-col  form-content w-1/2 pr-12">
                        <h1 className="mx-auto font-extrabold text-4xl mb-8 text-primary">Selamat Datang</h1>
                        <p>Selamat datang di Sistem Informasi Tracer Study dan Ikatan Alumni SMKN 1 Jenangan! Kami sangat senang Anda bergabung dengan kami dalam perjalanan ini untuk memahami dan meningkatkan kualitas pendidikan serta karier para alumni. Melalui platform ini, Anda dapat berbagi pengalaman, memberikan masukan, dan membantu kami dalam mengumpulkan data penting yang akan menjadi dasar bagi pengembangan program pendidikan yang lebih baik. Terima kasih atas partisipasi Anda, dan mari bersama-sama menciptakan masa depan yang lebih cerah dan sukses!</p>
                        <a className="btn btn-secondary w-1/4 text-white mt-12">Selengkapnya</a>
                    </div>
                    <div
                        className="image-content w-1/2">
                        <img src="/assets/images/tracer1.svg"></img>
                    </div>
                </div>
            </div>
            <div className="panduan">
              <hr className="w-full border-t border-gray-300" />
              <div className="mt-4">
                <div className="flex flex-row justify-center">
                  
                </div>
              </div>

            </div>
          </div>   
  )
}

export default Dashboard

