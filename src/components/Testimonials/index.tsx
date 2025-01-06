import React from "react";

import { getData } from "./actions";

import Star from "@/assets/images/star.svg";

import Image from "next/image";
import { TTestimonials } from "./types";
import Slider from "@/components/Slider";

function Content({ data }: { data: TTestimonials }) {
  return (
    <div className="flex flex-col border-2 p-5 rounded-3xl gap-y-4 lg:h-[350px]">
      <div className="flex items-center gap-x-4">
        <span className="relative w-[80px] aspect-square rounded-full overflow-hidden">
          <Image
            fill
            className="w-24 h-24 object-cover object-center"
            src={`${process.env.HOST_API}/${data.photo}`}
            alt={data.name}
            sizes="(max-width:768px) 100vw"
          />
        </span>
        <span className="flex gap-x-1 text-color3">
          <Image src={Star} alt="star-icons"></Image>
          <Image src={Star} alt="star-icons"></Image>
          <Image src={Star} alt="star-icons"></Image>
          <Image src={Star} alt="star-icons"></Image>
          <Image src={Star} alt="star-icons"></Image>
        </span>
      </div>

      <p className="">{data.message}</p>

      <span className="flex flex-col">
        <span className="text-xl font-bold">{data.name}</span>
        <span className="">{data.occupation}</span>
      </span>
    </div>
  );
}

async function Testimonials() {
  const { data }: { data: TTestimonials[] } = await getData();

  return (
    <div className="relative pb-16">
      <Slider
        swiperClassName="w-full"
        swiperSliderClassName="!w-[340px] -mx-2 px-6"
      >
        {data.map((testy) => {
          return <Content key={testy.id} data={testy} />;
        })}
      </Slider>
    </div>
  );
}

export default Testimonials;
