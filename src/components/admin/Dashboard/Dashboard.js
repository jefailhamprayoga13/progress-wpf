import React from 'react';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { UserGroupIcon, Squares2X2Icon, PencilSquareIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { Chart } from "chart.js/auto";

const Dashboard = ({}) => {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        const ctx1 = document.getElementById('myChart').getContext('2d');
        const ctx2 = document.getElementById('myChart2').getContext('2d');

        if (chartRef1.current) {
            chartRef1.current.destroy();
        }

        if (chartRef2.current) {
            chartRef2.current.destroy();
        }

        chartRef1.current = new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: ["Bekerja", "Berkuliah", "Berwirausaha", "Pelatihan", "Menganggur"],
                datasets: [{
                    data: [
                        250, 
                        120, 
                        50, 
                        20, 
                        5
                    ],
                    borderColor: [
                        "rgb(0, 234, 7)",
                        "rgb(255, 205, 86)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 99, 132)",
                        "rgb(153, 102, 255)"
                    ],
                    backgroundColor: [
                        "rgba(0, 234, 7, 0.5)",
                        "rgba(255, 205, 86, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(153, 102, 255, 0.5)"
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                }
            },
        });

        chartRef2.current = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: [2021, 2022, 2023],
                datasets: [{
                    data: [180, 202, 550],
                    label: "Bekerja",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgba(109, 253, 181, 0.5)",
                    borderWidth: 2
                }, {
                    data: [40, 100, 320],
                    label: "Berkuliah",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderWidth: 2
                }, {
                    data: [20, 24, 60],
                    label: "Berwirausaha",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgba(255, 205, 86, 0.5)",
                    borderWidth: 2
                }, {
                    data: [6, 12, 20],
                    label: "Pelatihan",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderWidth: 2
                },
                {
                    data: [6, 8, 5],
                    label: "Menganggur",
                    borderColor: "rgb(240, 0, 229)",
                    backgroundColor: "rgba(240, 0, 229, 0.5)",
                    borderWidth: 2
                }
                ]
            },
        });

    }, []);

    return (
        <div className='mt-8'>
            <div className="flex total flex-row justify-around card-content">
                <div className="card card-total card-side bg-base-100 shadow-xl w-1/3 py-4 pl-2 ">
                    <div className="flex flex-row">
                        <div className="flex flex-col justify-center">
                            <UserGroupIcon className="w-16 h-16 text-primary" />
                        </div>
                        <div className="flex flex-col pl-2 justify-center">
                            <h1 className="font-semibold text-xl">250</h1>
                            <p className="font-semibold text-lg">Total Alumni Bekerja</p>
                        </div>
                    </div>
                </div>
                <div className="card card-total card-side bg-base-100 shadow-xl w-1/3 py-2 pl-2  ml-2">
                    <div className="flex flex-row">
                        <div className="flex flex-col justify-center">
                            <Squares2X2Icon className="w-16 h-16 text-primary" />
                        </div>
                        <div className="flex flex-col pl-2 justify-center">
                            <h1 className="font-semibold text-xl">120</h1>
                            <p className="text-center  font-semibold text-lg">Total Alumni Berkuliah</p>
                        </div>
                    </div>
                </div>
                <div className="card card-total card-side bg-base-100 shadow-xl w-1/3 py-2 pl-2  ml-2">
                    <div className="flex flex-row">
                        <div className="flex flex-col justify-center ">
                            <PencilSquareIcon className="w-16 h-16 text-primary" />
                        </div>
                        <div className="flex flex-col pl2 justify-center">
                            <h1 className="font-semibold text-xl">50</h1>
                            <p className="text-center font-semibold text-lg">Total Alumni Berwirausaha</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chart-content flex flex-row justify-center mt-4">
                <div className="chart-left flex w-full justify-center mx-1">
                    <div className='chart border border-gray-400 py-6 rounded-xl shadow-xl px-12 '>
                        <h1 className="text-center text-xl font-semibold">Total Kegiatan Alumni 2023</h1>
                        <canvas id='myChart'></canvas>
                    </div>
                </div>
                <div className="chart-right flex w-full justify-center mx-1">
                    <div className='chart border border-gray-400 py-6 w-full h-fit rounded-xl shadow-xl px-12 '>
                        <h1 className="text-center text-xl font-semibold">Total Alumni Bekerja Setiap 3 tahun</h1> 
                        <canvas id='myChart2'></canvas>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Dashboard;
