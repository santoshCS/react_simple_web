import react, { useState, useEffect } from 'react';
import { getUsers} from"../Service/api";


const Allusers = () => {

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        getAllUsers();
    }, []);

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }


    return(
        <p> Hi all users</p>
    );
}

export default Allusers;
