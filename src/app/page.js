import Image from "next/image";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Impacts from "@/Components/Impacts";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Impacts />
    </div>
  )
}