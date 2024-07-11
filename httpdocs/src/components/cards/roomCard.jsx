import React from "react";

function RoomCard() {
    return (
        <div className="w-full h-72 rounded p-5 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-500">
            <h2 className="text-white font-semibold">Room History</h2>

            <div className="w-full col-auto mt-3 border flex items-center justify-center">
                <p className="text-white font-medium">No Records Found.</p>
            </div>
        </div>
    );
}

export default RoomCard;