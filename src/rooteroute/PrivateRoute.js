import { useContext } from 'react'
import authContext from '../HRMSContext/AuthContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {

    const userAtuth = useContext(authContext);
    console.log(userAtuth.authenticated)
    if (!userAtuth.authenticated) {
        return <Navigate to="/login" replace />
    }
    return props.children
}
