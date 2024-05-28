import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

import AlbumItem from "./AlbumItem";

const Slider = ({ data }) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <MdOutlineKeyboardArrowLeft className="text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block" />
            <div className="grid grid-rows-2 grid-flow-col-dense justify-between items-center gap-5 overflow-x-scroll w-full lg:w-[78vw] px-5 scroll-hide">
                {
                    data?.map((album) => <AlbumItem key={album.albumid} song={album} />)
                }
            </div>
            <MdOutlineKeyboardArrowRight className="text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block" />
        </div>
    );
};

export default Slider;