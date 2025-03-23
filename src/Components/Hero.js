"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Oswald, Noto_Sans_Myanmar } from "next/font/google";

const oswa = Oswald({ subsets: ["latin"] });
const sans = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: "300" });

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/main-video.mp4" type="video/mp4" />
                    Your browser doesn't support the video tag.
                </video>

                {/* Content Over Video */}
                <div className="relative z-10 text-white px-6 bg-gradient-to-r from-black to-transparent h-full w-full flex items-center justify-start pt-[80px]">
                    <div className="flex-row mx-[80px]">
                        <div className={`text-4xl md:text-6xl font-normal drop-shadow-lg text-start ${oswa.className}`}>
                            <p className="bg-gradient-to-r from-white to-[#464646] bg-clip-text text-transparent">Shaping a Smarter Tomorrow with</p>
                            <p className="bg-gradient-to-r from-white to-[#464646] bg-clip-text text-transparent">Accessible AI</p>
                        </div>
                        <p className={`mt-4 max-w-2xl text-[20px] drop-shadow-md ${sans.className} text-[#828282]`}>
                            At Axolotron, we believe in the power of innovation to change lives. Our team of passionate engineers and designers is dedicated to creating cutting-edge solutions that are both accessible and impactful.
                        </p>
                        <button className="mt-6 text-black bg-[#DADADA] font-semibold rounded-full shadow-md font-mukta w-[180px] text-[20px] h-[45px]">Explore<KeyboardArrowDownIcon /></button>
                    </div>
                </div>
            </div>
        </>
    );
}