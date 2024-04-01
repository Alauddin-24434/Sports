"use client"
// Import necessary dependencies
import Image, { StaticImageData } from 'next/image';
import playerImage1 from '../../../public/image/banner/player1.png';
import playerImage2 from '../../../public/image/banner/player2.png';
import playerImage3 from '../../../public/image/banner/player3.png';
import playerImage4 from '../../../public/image/banner/player4.png';
import advertisement from '../../../public/image/banner/rightside.png';

// Define the type for a player
type Player = {
    id: number;
    name: string;
    title?: string; // Optional title for advertisement
    desc?: string; // Optional description for advertisement
    image: StaticImageData; // TypeScript type for Next.js Image
    totalEvents: number;
    sport: string;
};

// Define the Banner component
const Banner = ({ theme }: any) => {
    // Array of player objects
    const players: Player[] = [
        {
            id: 1,
            name: "Sacramento River Cats",
            image: playerImage1,
            totalEvents: 54,
            sport: "Basebal"
        },
        {
            id: 2,
            name: "Las Vegas Aviators",
            image: playerImage2,
            totalEvents: 76,
            sport: "Ice hockey"
        },
        {
            id: 3,
            name: "New Jersey Devils",
            image: playerImage3,
            totalEvents: 32,
            sport: "Basketball"
        },
        {
            id: 4,
            name: "Las Vegas Aviators",
            image: playerImage4,
            totalEvents: 89,
            sport: "Ice hockey"
        },
        {
            id: 5,
            name: "Player 5",
            title: 'Advertisement title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: advertisement,
            totalEvents: 41,
            sport: "Basketball"
        }
    ];

    // Return JSX for the Banner component
    return (
        <div className={`max-w-7xl mx-auto ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            {/* Title for the banner */}
            <h1 className="text-xl py-2 ml-10 md:ml-3 lg:ml-3 font-bold underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sports
            </h1>
            {/* Grid layout for displaying players */}
            <div className="grid gap-4 sm:flex sm:flex-wrap justify-center">

                {/* Map through each player and render their information */}
                {players.map(player => (
                    <div key={player.id} className={`sm:w-[237px] shadow-2xl p-4 ${theme === 'light' ? 'bg-white shadow-2xl' : 'bg-[#3B3E47]'}`}>
                        <div className="relative flex justify-center mb-2"> {/* Flex container to center the image */}
                            {/* Image component for displaying player image */}
                            <Image src={player.image} alt={player.name} width={217} height={385} className="object-cover" />
                            {/* Display advertisement label if title exists */}
                            {player.title && <span className='absolute top-0 right-0 bg-black px-1 text-white'>Ad</span>}
                        </div>
                        <div className='flex flex-col items-center lg:flex lg:items-start'>
                            {/* Render advertisement information if title exists, otherwise render player information */}
                            {player.title ? (
                                <>
                                    <h2 className="text-lg my-1 font-bold">{player.title}</h2>
                                    <p className="text-xs px-10 md:px-0 lg:px-0 text-center md:text-start lg:text-justify">{player.desc}</p>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-md my-1 font-bold">{player.name}</h2>
                                    {/* Display player information */}
                                    <div className={`flex justify-evenly shadow-md items-center w-56 md:w-full lg:w-full gap-8 ${theme === 'light' ? 'bg-[#F9F8FF]' : 'bg-[#292B32]'}`}>
                                        <span className='flex flex-col my-2'>
                                            <h6 className="text-xs">Total Events</h6>
                                            <p className="text-xs font-semibold mt-2"> {player.totalEvents} Events</p>
                                        </span>
                                        <span className='flex flex-col  '>
                                            <h6 className="text-xs">Sport</h6>
                                            <p className="text-xs font-semibold mt-2">{player.sport}</p>
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}

                {/* Button to see all players */}
                <span className='text-center my-4'> <button className='bg-blue-500 text-white px-6 py-2'>SEE ALL</button></span>
            </div>
        </div>
    );
};

// Export the Banner component
export default Banner;
