import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Profile(){
    return  <div>
        <Nav />
        <main style={{minHeight: "80vh"}}>
            <h1>Past Orders</h1>
        </main>
        <Footer />
    </div>
}

export default Profile;