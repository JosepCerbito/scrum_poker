import React from "react";

function Navigation() {
    const scrumUser = JSON.parse(localStorage.getItem('scrumUser'));
    

    const username = scrumUser?.username;
    return (
        <header className="w-screen flex justify-center  shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-100
">
            <div className="font-medium w-full md:max-w-7xl p-3 flex justify-between items-center">
                <p className="text-white font-semibold">Scrum Poker</p>

                <div className="flex items-center">
                    <p className="mr-4 text-white font-medium">{username}</p>
                    <div className="flex justify-center items-center bg-gray-200 w-10 h-10 font-bold rounded-full">
                    {username[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigation;