import React from "react";
import { auth, signOut } from '../../firebase';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('User logged out successfully');
        } catch (error) {
            alert('Error logging out: ' + error.message);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
