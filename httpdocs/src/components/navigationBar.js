import React from "react";

function Navigation() {
    const scrumUser = JSON.parse(localStorage.getItem('scrumUser'));

    const username = scrumUser?.username;
    return (
        <header className="font-medium w-screen p-3 border flex justify-between items-center shadow-md bg-white">
            <p>Scrum Poker</p>

            <div className="flex items-center">
                <p className="mr-4">{username}</p>
                <div className="flex justify-center items-center bg-gray-200 w-10 h-10 font-bold rounded-full">
                {username[0].toUpperCase()}
                </div>
            </div>
        </header>
    );
}

export default Navigation;