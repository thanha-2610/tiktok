import images from '~/assets/images';
import './header.module.scss';
function Header() {
    return (
        <div className="w-full h-[59px] flex bg-gray-900">
            <div className="">
                <img className="w-14 h-9" src={images.logo} alt="logo" />
                <div className="w-14 h-1 text-teal-600 text-xs font-normal font-['Inter'] tracking-tight flex justify-center items-center">
                    Hãy chọn theo cách của bạn
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-[127px] h-[40px] bg-gradient-to-b from-yellow-400 to-red-600 rounded-3xl ">
                    <div className="text-white font-size:[12px] font-bold font-['Inter'] ">TRANG CHỦ</div>
                </div>
                <div className="space-x-4  flex justify-center items-center">
                    <a href="#" className="text-white font-size:[10px] font-bold font-['Inter'] ">
                        CÁP QUANG VIETTEL
                    </a>
                    <a href="#" className="text-white font-size:[12px] font-bold font-['Inter'] ">
                        LẤP MẠNG VIETTEL
                    </a>
                    <a href="#" className="text-white font-size:[12px] font-bold font-['Inter'] ">
                        WIFI VIETTEL
                    </a>
                    <a href="#" className="text-white font-size:[12px] font-bold font-['Inter'] ">
                        INTERNET VIETTEL
                    </a>
                    <a href="#" className="text-white font-size:[12px] font-bold font-['Inter'] ">
                        CHỮ KÝ SỐ VIETTEL
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
