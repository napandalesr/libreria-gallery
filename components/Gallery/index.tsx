"use client";

import React, {useState} from "react";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const Gallery = () => {
  const {width} = useScreenSize();

  const [readMore, setReadMore] = useState(true);

  const [current, setCurrent] = useState(0);
  const sources = ["/images/gallery/1.jpg", "/images/gallery/2.jpg", "/images/gallery/3.jpg", "/images/gallery/4.jpg", "/images/gallery/5.jpg", "/images/gallery/6.jpg", "/images/gallery/7.jpg", "/images/gallery/8.jpg", "/images/gallery/9.jpg"];

  return <section className="relative lg:h-full w-full">

    <div className={"flex flex-col lg:flex-row items-center justify-between h-full"}>
      <div className={"w-full h-full relative overflow-clip hide-scrollbar object-cover"}>
        <Image src={sources[current]} className={"h-full w-full object-cover"} alt={""} width={1920} height={1080} quality={100} />
      </div>
      <strong className={`absolute left-0 pl-2 md:left-0 bottom-5 md:bottom-0 md:border-r-2 pt-8 ${width <= 760 && readMore ? 'h-40' : 'h-56 '} md:h-64 xl:h-56 md:pt-12 md:pl-12 bg-gradient-to-t from-black/80 md:from-black/40 from-70% md:from-30% via-transparent via-100% md:via-90%  text-white max-w-[700px] text-sm md:text-xl md:text-justify pr-8`}>
        {
          width > 760 ? 
          <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum inventore veniam quidem facere quae recusandae ratione quisquam quam tempora pariatur provident ab! Fugit expedita sed animi eius, eum quas!</> 
          : 
          <>
          {
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum inventore veniam quidem facere quae recusandae ratione quisquam quam tempora pariatur provident ab! Fugit expedita sed animi eius, eum quas!`.substring(0, readMore ? 87 : 300)+`${readMore ? "..." : ""}`
          }
          <span className="text-tertiary cursor-pointer text-green-600" onClick={()=>setReadMore(!readMore)}> {readMore ? <>Leer más</> : <>Leer menos</> }</span>
          </>
        }
      </strong>
      <ul className={"flex flex-row lg:flex-col justify-start items-center overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-scroll h-full w-full lg:w-auto"}>
        {
          sources.map((s, i) => {
            return (
                <li key={i} className={`relative flex-shrink-0 lg:flex-shrink aspect-video w-32 lg:w-full h-24  lg:h-52 xl:h-72 transition-all duration-300 ease-in-out hover:cursor-pointer ${current === i ? "" : "grayscale"} hover:grayscale-0`} onClick={() => setCurrent(i)}>
                  <Image className="object-cover lg:object-contain w-full lg:w-auto h-full lg:h-auto" src={s} alt={""} width={1920} height={1080} />
                  <span className={`absolute top-0 left-0 w-full h-full pointer-events-none select-none ${current === i ? "bg-primary/40" : "bg-transparent"}`} />
                </li>
            );
          })
        }
      </ul>
    </div>
  </section>
}

export default Gallery;