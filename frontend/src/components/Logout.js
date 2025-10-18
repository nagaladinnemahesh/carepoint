import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        Cookies.remove('token')
        Cookies.remove('role')

        alert('Logged out successfully')
        navigate('/home')
    }, [navigate])

    return(
        <div className='logout-container d-flex justify-content-center align-items-center vh-100'>
            <h4>Logging out</h4>
        </div>
    )
}

export default Logout;
