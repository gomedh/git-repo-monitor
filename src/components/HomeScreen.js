import React from 'react';

const Home = () => {
    return (
        <div className='h-screen w-screen p-8'>
            <div className='bg-[#E4E7EC] rounded-3xl p-8 w-full h-full'>
                <div className='h-full'>
                    <h1 className='text-[#101828] font-bold'>Github Repository Language</h1>
                    <button className='bg-[#265A62] text-white px-6 py-2 mt-6 rounded-lg hover:bg-opacity-80 hover:cursor-pointer'
                    >
                        Open Pie Chart +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
