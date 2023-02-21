import React from 'react'
import theme from '../style/theme'
import Header from '../components/common/Header'
import Sidebar from '../components/Sidebar'
import List from '../components/Home/List'
import styled from 'styled-components'
import Footer from '../components/common/Footer'

const PageSize = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    border-radius: 20px;
    justify-content: center;
`;

function Home() {
    return (
        <PageSize>

            <Header />


            <List />

            <Sidebar />

            <Footer />
        </PageSize>
    )
}

export default Home