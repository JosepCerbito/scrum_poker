import RoomCard from "./cards/roomCard";

function Content() {
    return (
        <div className="w-screen flex justify-center">
            <div className="w-full md:max-w-7xl gap-5 m-5 flex">
                <RoomCard />
                <div className="w-full border p-10">

                </div>
                <div className="w-full border p-10">

                </div>
            </div>
        </div>
    );
}

export default Content;