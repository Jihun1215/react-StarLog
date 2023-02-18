import React from 'react'
import theme from '../style/theme'
import styled from 'styled-components'
import Header from '../components/Header'
import { PageSize } from '../components/PageSize'
import Sidebar from '../components/Sidebar'


function Home() {
    return (
        <PageSize>
            <Header />
            <Sidebar />
        </PageSize>
    )
}

export default Home