import React from 'react';
import { DocumentTextIcon } from "@heroicons/react/20/solid";

const FormSurveyAlumni = ({}) => {
  return (
    <div className='mt-8'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-center w-1/2'>
          <a className='px-8 pd py-3 bg-primary text-white active card border border-2 rounded-tr-none rounded-tl-l rounded-br-none rounded-bl-none text-center'>Step 1 - Data Lulusan</a>
          <a className='px-8 pd py-3 bg-primary text-white card border border-2 rounded-tr-none rounded-tl-none rounded-br-none rounded-bl-none text-center'>Step 2 - Detail Aktivitas</a>
          <a className='px-8 pd py-3 bg-primary text-white card border border-2 rounded-tr-l rounded-tl-none rounded-br-none rounded-bl-none text-center'>Step 3 - Umpan Balik</a>
        </div>
        <div className='w-3/4 p-12 border flex flex-col justify-center items-center rounded-xl border-2'>
          <div className='card border flex flex column justify-start w-full p-4'>
            <h2>Data Umum</h2>
            <hr className="w-full border-t border-gray-300 mt-2" />
            <form onSubmit="">
              <div className='flex'>
                <div className="form-control w-1/2 mx-1">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">Status Perkawinan</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center"></span>
                      <select className="input input-bordered pl-10 w-full max-w-full" required>
                        <option value="">Pilih Status</option>
                        <option value="Kawin">Kawin</option>
                        <option value="Belum Kawin">Belum Kawin</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div className="form-control w-1/2 mx-1">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">Alamat</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center"></span>
                      <input
                        type="text"
                        className="input input-bordered pl-10 w-full max-w-full"
                        required
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-1/2 mx-1">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">Email</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center"></span>
                      <input
                        type="text"
                        className="input input-bordered pl-10 w-full max-w-full"
                        required
                      />
                    </div>
                  </label>
                </div>
                <div className="form-control w-1/2 mx-1">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">No Telepon</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center"></span>
                      <input
                        type="text"
                        className="input input-bordered pl-10 w-full max-w-full"
                        required
                      />
                    </div>
                  </label>
                </div>
              </div>
              <hr className="w-full border-t border-gray-300 mt-4" />
              <h2 className='mt-8'>Data Aktifitas</h2>
              <hr className="w-full border-t border-gray-300 mt-2" />
              <div className="form-control w-1/2 mx-1">
                <label className="form-control w-full mb-2">
                  <div className="label mb-2">
                    <span className="label-text text-md font-medium">Aktifitas Lulusan</span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center"></span>
                    <select className="input input-bordered pl-10 w-full max-w-full" required>
                      <option value="">Pilih Aktifitas</option>
                      <option value="Bekerja">Bekerja</option>
                      <option value="Melanjutkan Pendidikan">Melanjutkan Pendidikan</option>
                      <option value="Berwirausaha">Berwirausaha</option>
                      <option value="Bekerja dan Melanjutkan Pendidikan">Bekerja dan Melanjutkan Pendidikan</option>
                      <option value="Berwirausaha dan Melanjutkan Pendidikan">Berwirausaha dan Melanjutkan Pendidikan</option>
                      <option value="Mengikuti Pelatihan">Mengikuti Pelatihan</option>
                      <option value="Menganggur">Menganggur</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6 w-1/4 flex justify-end ml-auto">
                <button type="submit" className="btn btn-primary">Selanjutnya</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSurveyAlumni
