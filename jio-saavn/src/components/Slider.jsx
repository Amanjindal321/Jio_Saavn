import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

import AlbumItem from "./AlbumItem";
import PlaylistItem from "./PlaylistItem";
import { useRef } from "react";


const Slider = ({ data, type }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        scrollRef.current.scrollLeft += 800;
    };

    const scrollLeft = () => {
        scrollRef.current.scrollLeft -= 800;
    };

    return (
        <div className="flex justify-center items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block" onClick={scrollLeft} />
            <div className="grid grid-rows-2 grid-flow-col-dense justify-between items-center gap-5 overflow-x-scroll w-full lg:w-[78vw] px-5 scroll-hide" ref={scrollRef}>
                {
                    // data?.map((album) => <AlbumItem key={album.albumid} song={album} />)
                    data?.map((item) => (
                        type === 'albums' ? 
                        <AlbumItem key={item.albumid} song={item} /> : 
                        <PlaylistItem key={item.listid} playlist={item} />
                        
                    ))
                }
            </div>
            <MdOutlineKeyboardArrowRight className="text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block" onClick={scrollRight}/>
        </div>
    );
};

export default Slider;