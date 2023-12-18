import images from '~/assets/images';

function Sidebar() {
    return (
        <div className="flex w-[1200px] h-[675px]">
            <img className=" " src={images.slider} alt="slider 1" />
        </div>
    );
}

export default Sidebar;
