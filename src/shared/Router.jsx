import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Login from '../pages/Login';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Detail />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
