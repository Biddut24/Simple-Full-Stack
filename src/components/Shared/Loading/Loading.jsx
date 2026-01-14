import React from 'react';
import loading from '../../../assets/Loading_icon.gif'

const Loading = () => {
    return (
        <div className='flex justify-center items-center py-10 h-screen '>
            <img src={loading} alt="Loading..." />
        </div>
    );
};

export default Loading;