import React from 'react';
import { User } from '@/types/user';

interface HomePageProps {
    user: User | null;
}

const UserInfo = ({ user }: HomePageProps) => {
    return (
        <div>
            <h2>User Info</h2>
            {/* <p>Username: {user ?? user.name}</p> */}
            {/* <p>Email: {user ?? user.email}</p> */}
        </div>
    );
};

export default UserInfo;
