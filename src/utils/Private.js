import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () =>{
    let auth = { 'token': false}
    console.log('Private route works!');
    return(
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes