"use client"
import Image, { StaticImageData } from 'next/image';
import playerImage1 from '../../../public/image/banner/Ticket_Mockup 3.png';
import playerImage2 from '../../../public/image/banner/unnamed 1.png';
import playerImage3 from '../../../public/image/banner/Ticket_Mockup 3.png';


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

const Collection = ({theme}) => {

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

    // Function to toggle the theme
 

 


 
    return (
        <div className={`max-w-7xl  mx-auto ${theme === 'light' ? 'bg-[#F9F8FF] ' : 'bg-[#18282A] '}`}>
            <h1 className={`text-3xl mt-6 text-center font-bold text-white ${theme === 'light' ? 'text-black ' : 'text-white '}`}>Collection Spotlight</h1>
            <p className={`text-center my-4 text-white ${theme === 'light' ? 'text-black ' : 'text-white '}`}>Discover extraordinary moments with our Spotlight Collection <br />metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today</p>
            <div className="grid gap-8 sm:flex sm:flex-wrap justify-center">
                {players.map(player => (
                    <div key={player.id} className={`relative my-8 w-[257px] h-[624px]   shadow-sm ${theme === 'light' ? 'bg-white shadow-2xl ' : 'bg-[#818A97] '}`}>
                        {/* Content for each player */}
                        <div className="flex mt-4 justify-center">
                            <Image src={player.image} alt={player.title} className="object-cover w-[226px] h-[401px] rounded-lg" />
                        </div>
                        <div className='flex '>
                            <span className={`w-6 h-6 absolute -left-3 rounded-full bg-slate-950 ${theme === 'light' ? 'bg-[#F9F8FF] text-[#F9F8FF]' : 'bg-[#18282A] text-[#18282A]'}`}>bo</span>
                            <span className='ml-7'>--------------------------</span>
                            <span  className={`w-6 h-6 absolute -right-3 rounded-full bg-slate-950 ${theme === 'light' ? 'bg-[#F9F8FF] text-[#F9F8FF] ' : 'bg-[#18282A] text-[#18282A]'}`}>bo</span>
                        </div>
                        <div className='flex flex-col items-center lg:flex lg:items-center '>
                            <h2 className={`text-lg font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{player.title}</h2>
                            <span className={`flex my-2 text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                <p className="mb-2">{player.date}</p>
                                <p>-</p>
                                <p className="mb-2 ">{player.day}</p>
                                <p>-</p>
                                <p className="mb-2">{player.time}</p>
                            </span>
                            <p className={`text-xs mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{player.desc}</p>
                        </div>
                        {/* Button container */}
                        <div className='w-full flex justify-center absolute bottom-5'>
                            <button className={`bg-black text-white py-2 px-4 ${theme === 'light' ? 'hover:bg-gray-800' : 'hover:bg-gray-300'}`}>
                                {player.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Collection;
