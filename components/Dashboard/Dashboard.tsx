import React from 'react'
import Topbar from './Topbar'
import Grid from './Grid'

function Dashboard() {
    return (
        <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
            <Topbar />
            <Grid />
        </div>
    )
}

export default Dashboard