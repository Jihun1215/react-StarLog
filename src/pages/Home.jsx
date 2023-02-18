import React from 'react'
import theme from '../style/theme'
import styled from 'styled-components'
import Header from '../components/Header'
import { PageSize } from '../components/PageSize'
import Sidebar from '../components/Sidebar'
import Posts from '../components/List'


function Home() {
    return (
        <PageSize>
            <Header />



            <Posts />
            <Sidebar />
        </PageSize>
    )
}

export default Home