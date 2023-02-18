import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Detail />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
