import React from 'react';
import UserInfo from '@/components/UserInfo';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import UpdateButton from '@/components/UpdateButton';
import { User } from '@/types/user';

const HomePage = ({ }) => {
    const menuItems = [
        { id: 1, label: 'Home', href: '/home' },
        { id: 2, label: 'About', href: '/about' },
        { id: 3, label: 'Contact', href: '/contact' },
    ];

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar menuItems={menuItems} />
                <div style={{ marginLeft: 240, padding: '20px' }}>
                    <h1>Home Page</h1>
                    {/* <UserInfo user={user} /> */}
                    <UpdateButton />
                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/users');
    const user: User = await res.json();

    return { props: { user } };
}

export default HomePage;
