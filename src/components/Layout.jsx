import React from 'react';
import Navbar from './ui/Navbar';

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
         <div>
            { children }
         </div>
         {/* Footer */}
        </>
    );
};

export default Layout;