import React from 'react'
import { IconType } from 'react-icons'
import { FiDollarSign, FiHome, FiLink, FiUser } from 'react-icons/fi'

function RouteSelect() {
    return (
        <div className='space-y-1'>
            <Route Icon={FiHome} selected={true} title="Dashboard" />
            <Route Icon={FiUser} selected={false} title="Team" />
            <Route Icon={FiLink} selected={false} title="Integrations" />
            <Route Icon={FiDollarSign} selected={false} title="Finance" />
        </div>
    )
};

const Route = ({
    selected,
    Icon,
    title
}
    :
    {
        selected: boolean,
        Icon: IconType,
        title: string
    }) => {
    return <button
        className={`flex items-center justify-start 
    gap-2 w-full rounded px-2 
    text-sm transition-[box-shadow,_background-color,_color] cursor-pointer ${selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`}>
        <Icon className={selected ? `text-blue-900` : ``} />
        <span>{title}</span>

    </button>
}

export default RouteSelect