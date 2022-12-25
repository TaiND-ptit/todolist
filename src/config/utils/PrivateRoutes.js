import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'
import { selectAuth } from '../../redux/slice/authSlice';

const PrivateRoutes = () => {
    const state = useSelector(selectAuth);
    return(
        state.isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes