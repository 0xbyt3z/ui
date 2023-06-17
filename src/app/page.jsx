import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-4/5 mx-auto h-auto grid grid-cols-4 gap-5 pt-10">
        <Card title={"Kyne"} image={"/thumbnails/kyne1.png"} url="/kyne" originalLink="https://dribbble.com/shots/21479405-Kyne-Branding-Video-Production-Agency" />
      </div>
    </>
  );
}
