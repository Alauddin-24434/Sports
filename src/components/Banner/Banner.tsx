"use client"
import Image, { StaticImageData } from 'next/image';
import playerImage1 from '../../../public/image/banner/player1.png';
import playerImage2 from '../../../public/image/banner/player2.png';
import playerImage3 from '../../../public/image/banner/player3.png';
import playerImage4 from '../../../public/image/banner/player4.png';
import advertisement from '../../../public/image/banner/rightside.png';



type Player = {
    id: number;
    name: string;
    title?: string; // Optional title for advertisement
    desc?: string; // Optional description for advertisement
    image: StaticImageData; // TypeScript type for Next.js Image
    totalEvents: number;
    sport: string;
};

const Banner = ({theme}:any) => {

  


    const players: Player[] = [
        {
            id: 1,
            name: "Sacramento River Cats",
            image: playerImage1,
            totalEvents: 54,
            sport: "Football"
        },
        {
            id: 2,
            name: "Las Vegas Aviators",
            image: playerImage2,
            totalEvents: 76,
            sport: "Basketball"
        },
        {
            id: 3,
            name: "New Jersey Devils",
            image: playerImage3,
            totalEvents: 32,
            sport: "Tennis"
        },
        {
            id: 4,
            name: "Las Vegas Aviators",
            image: playerImage4,
            totalEvents: 89,
            sport: "Football"
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

    return (
        <div className={`max-w-7xl mx-auto  ${theme === 'light' ? 'text-black' : 'text-white '}`}>
            <h1 className="text-lg py-2  ml-10 md:ml-3 lg:ml-3 font-bold underline">
            Sports
            </h1>
            <div className="grid gap-4  sm:flex sm:flex-wrap justify-center ">

                {players.map(player => (
                    <div key={player.id} className={` sm:w-[237px] shadow-2xl p-4 ${theme === 'light' ? 'bg-white shadow-2xl ' : 'bg-[#3B3E47] '}`}>
                        <div className=" relative flex justify-center  mb-2"> {/* Flex container to center the image */}

                            <Image src={player.image} alt={player.name} width={217} height={385} className="object-cover" />

                            {player.title && <span className='absolute top-0 right-0 bg-black px-1 text-white'>Ad</span>}

                        </div>
                        <div className='flex flex-col  items-center lg:flex lg:items-start'>
                            {player.title ? (
                                <>
                                    <h2 className="text-lg my-1 font-bold">{player.title}</h2>
                                    <p className="text-xs px-10 md:px-0 lg:px-0  text-center md:text-start lg:text-justify ">{player.desc}</p>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-md my-1 font-bold">{player.name}</h2>
                                    <div className={`flex justify-evenly shadow-md items-center  w-56 md:w-full lg:w-full   gap-8 ${theme === 'light' ? 'bg-[#F9F8FF] ' : 'bg-[#292B32] '}`}>
                                        <span className='flex flex-col'>
                                            <h6 className="text-xs">Total Events</h6>
                                            <p className="text-xs"> {player.totalEvents} Events</p>
                                        </span>
                                        <span className='flex flex-col my-2'>
                                            <h6 className="text-xs ">Sport</h6>
                                            <p className="text-xs">{player.sport}</p>
                                        </span>


                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}

                <span className='text-center my-4'>   <button className='bg-blue-500 text-white px-6 py-2'>SEE ALL</button></span>
            </div>

        </div>
    );
};

export default Banner;
