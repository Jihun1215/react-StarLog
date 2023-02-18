import React from 'react'
import theme from '../style/theme'
import Header from '../components/Header'
import { PageSize } from '../components/PageSize'
import Sidebar from '../components/Sidebar'
import List from '../components/List'


function Home() {
    return (
        <PageSize>
            <Header />


            <List />
            <Sidebar />
        </PageSize>
    )
}

export default Home