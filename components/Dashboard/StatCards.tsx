import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

function StatCards() {
    return (
        <>
            <Card
                title='Gross Revenue'
                value='£12,900.32'
                pillText='2.43%'
                trend='up'
                period='From Jan-Feb 2025'
            />
            <Card
                title='Average Order'
                value='£343.23'
                pillText='1.21%'
                trend='down'
                period='From Jan-Feb 2025'
            />
            <Card
                title='Trailing Year'
                value='£234,974.34'
                pillText='60.54%'
                trend='up'
                period='Previous 365 days'
            />
        </>
    )
}

const Card = ({
    title,
    value,
    pillText,
    trend,
    period
}: {
    title: string,
    value: string,
    pillText: string,
    trend: "up" | "down",
    period: string
}) => {
    return <div className='p-4 col-span-4 rounded border border-stone-300'>
        <div className='flex mb-8 items-start justify-between'>
            <div>
                <h3 className='text-stone-500 mb-2 text-sm'>{title}</h3>
                <p className='text-3xl font-semibold'>{value}</p>
            </div>
            <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === 'up' ? "bg-green-700 text-white" : "bg-red-700 text-white"}`}>
                {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
                {pillText}
            </span>
        </div>
        <p className='text-xs text-stone-500'>
            {period}
        </p>
    </div>
}

export default StatCards