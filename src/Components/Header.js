import { MuseoModerno } from "next/font/google";
import { Oswald } from "next/font/google";
import Image from "next/image";

const museo = MuseoModerno({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between p-[20px] bg-black w-[85%] mx-auto fixed inset-0 h-[60px] rounded-full top-[35px]">
                <Image src="/axolotron-logo.png" alt="axolotron-logo" height={50} width={50} quality={100} className="h-[16px] w-[150px]" />
                <div className={`${museo.className} flex text-white gap-[15px] md:gap-[40px] items-center`}>
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer opacity-50">Products</p>
                    <p className="cursor-pointer opacity-50">Case Studies</p>
                    <button className="bg-white text-black rounded-full px-[10px] py-[5px] cursor-pointer shadow-inner">Free Consultation</button>
                </div>
            </div>
        </>
    )
}
