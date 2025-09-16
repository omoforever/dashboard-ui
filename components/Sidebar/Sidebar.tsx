import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'
import Plan from './Plan'

function Sidebar() {
    return (
        <div className='h-fit sticky top-4 flex flex-col '>
            <div className='overflow-y-auto pe-2 flex-1'>
                <AccountToggle />
                <Search />
                <RouteSelect />
            </div>
            <div className='pe-6 mt-4'>
                <Plan />
            </div>
        </div>
    )
}

export default Sidebar