import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'

function Sidebar() {
    return (
        <div className=''>
            <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] pe-2'>
                {/* TODO Main sidebar content */}
                <AccountToggle />
                <Search />
                <RouteSelect />
            </div>
            {/* TODO Plan Toggle */}
        </div>
    )
}

export default Sidebar