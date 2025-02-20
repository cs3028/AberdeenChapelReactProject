import React from 'react';
import Navbar from './Navbar';
import '.././index.css';

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