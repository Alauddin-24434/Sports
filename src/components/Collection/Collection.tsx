"use client"
// Import necessary dependencies
import Image, { StaticImageData } from 'next/image';
import playerImage1 from '../../../public/image/banner/Ticket_Mockup 3.png';
import playerImage2 from '../../../public/image/banner/unnamed 1.png';
import playerImage3 from '../../../public/image/banner/Ticket_Mockup 3.png';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// Define the type for a player
type Player = {
    id: number;
    title: string;
    date: string;
    day: string;
    time: string;
    desc: string;
    image: StaticImageData;
    button: string;
};

// Define the Collection component
const Collection = ({ theme }: any) => {
    // Define the players data
    const players: Player[] = [
        {
            id: 1,
            title: "Sacramento River Cats",
            date: "OCT 15",
            day: "Sun",
            time: "12:00 PM",
            desc: "Description for Sacramento River Cats",
            image: playerImage1,
            button: "Take Flight Collection"
        },
        {
            id: 2,
            title: "Las Vegas Aviators",
            date: "OCT 16",
            day: "MON",
            time: "3:00 PM",
            desc: "Description for Las Vegas Aviators",
            image: playerImage2,
            button: "Orange Collection"
        },
        {
            id: 3,
            title: "New Jersey Devils",
            date: "OCT 17",
            day: "TUES",
            time: "6:00 PM",
            desc: "Description for New Jersey Devils",
            image: playerImage3,
            button: "Take Flight Collection"
        },
    ];

    // Return JSX for the Collection component
    return (
        <div className={`max-w-7xl mx-auto ${theme === 'light' ? 'bg-[#F9F8FF]' : 'bg-[#18282A]'}`}>
            {/* Title for the collection */}
            <h1 className={`text-lg md:text-3xl pt-6 text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>Collection Spotlight</h1>

            {/* Description for the collection */}
            <p className={`text-center my-4 text-xs md:text-[14px] px-10 md:px-0 lg:px-0 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today</p>

            {/* Grid layout for displaying players */}
            <div className="relative grid gap-8 sm:flex sm:flex-wrap justify-center border">
                {/* Map through each player and render their information */}
                {players.map(player => (
                    <div key={player.id} className={`relative my-8 w-[257px] h-[624px] shadow-2xl ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-[#818A97]'}`}>
                        {/* Content for each player */}
                        <div className="flex mt-4 justify-center">
                            {/* Display player image */}
                            <Image src={player.image} alt={player.title} className="object-cover w-[226px] h-[401px] rounded-lg" />
                        </div>
                        {/* Divider */}
                        <div className='flex '>
                            <span className={`w-6 h-6 absolute -left-3 rounded-full ${theme === 'light' ? 'bg-[#F9F8FF] text-[#F9F8FF]' : 'bg-[#18282A] text-[#18282A]'}`}>bo</span>
                            <span className='ml-7'>--------------------------</span>
                            <span className={`w-6 h-6 absolute -right-3 rounded-full ${theme === 'light' ? 'bg-[#F9F8FF] text-[#F9F8FF]' : 'bg-[#18282A] text-[#18282A]'}`}>bo</span>
                        </div>
                        {/* Player information */}
                        <div className='flex flex-col items-center lg:flex lg:items-center'>
                            <h2 className={`text-lg font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{player.title}</h2>
                            {/* Date, day, and time */}
                            <span className={`flex my-2 text-xs font-normal ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <p className="mb-2">{player.date}</p>
                                <p>-</p>
                                <p className="mb-2">{player.day}</p>
                                <p>-</p>
                                <p className="mb-2">{player.time}</p>
                            </span>
                            {/* Description */}
                            <p className={`text-xs mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{player.desc}</p>
                        </div>
                        {/* Button */}
                        <div className='w-full flex justify-center absolute bottom-5'>
                            <button className={`bg-black text-white py-2 px-4 ${theme === 'light' ? 'hover:bg-gray-800' : 'hover:bg-gray-300'}`}>
                                {player.button}
                            </button>
                        </div>
                    </div>
                ))}
                {/* Vertically centering spans */}
                <div className="absolute left-7  hidden lg:block md:left-24 lg:left-24 py-2 border border-blue-500  top-1/2 transform -translate-y-1/2">
                    <span className='h-1/2 text-blue-500 font-bold text-2xl '><IoIosArrowBack/></span>
                </div>
                <div className="absolute hidden lg:block py-2 border border-blue-500 right-7 md:right-24 lg:right-24  top-1/2 transform -translate-y-1/2">
                    <span className='h-1/2 text-blue-500 font-bold text-2xl'><IoIosArrowForward/></span>
                </div>
            </div>

        </div>
    );
};

// Export the Collection component
export default Collection;
