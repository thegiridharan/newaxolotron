import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-[10px]">
        <p className="font-light opacity-50 mb-[10px] ml-[5px]">Preferences</p>
        <button className="border-[0.5px] border-gray-200 h-[40px] w-[120px] rounded-[10px] bg-black text-white cursor-pointer">Submit</button>
      </div>
    </>
  )
}