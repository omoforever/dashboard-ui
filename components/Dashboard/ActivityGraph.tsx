'use client'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        name: 'Page A',
        desktop: 4000,
        mobile: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        desktop: 3000,
        mobile: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        desktop: 2000,
        mobile: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        desktop: 2780,
        mobile: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        desktop: 1890,
        mobile: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        desktop: 2390,
        mobile: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        desktop: 3490,
        mobile: 4300,
        amt: 2100,
    },
];

function ActivityGraph() {
    return (
        <div className='col-span-8 overflow-hidden rounded border border-stone-300'>
            <div className="p-4">
                <h3 className='flex items-center gap-1.5'>
                    <FiUser /> Activity
                </h3>
            </div>
            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="mobile" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="desktop" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivityGraph

