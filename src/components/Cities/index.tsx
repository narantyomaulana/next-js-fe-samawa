import React from "react";
import { TCity } from "./types";
import { getData } from "./actions";
import Link from "next/link";
import Image from "next/image";
import thousands from "@/libs/thousands";

type Props = object;

function Content({ data }: { data: TCity[] }) {
  return (
    <div className="grid grid-cols-3 gap-7">
      {data.map((city) => {
        return (
          <div
            key={city.id}
            className="flex border border-transparent hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative"
          >
            <span className="relative w-[80px] aspect-square rounded-3xl overflow-hidden">
              <Image
                fill
                className="w-full h-full object-cover object-center"
                src={`${process.env.HOST_API}/${city.icon}`}
                alt={city.name}
                sizes="(max-width:768px) 100vw"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold">{city.name}</span>
              <span className="">
                {thousands(city.wedding_packages_count)} Packages
                {city.wedding_packages_count > 1 && "s"}
              </span>
            </span>
            <Link
              href={`${process.env.HOST_APP}/cities/${city.slug}`}
              className="absolute inset-0"
            ></Link>
          </div>
        );
      })}
    </div>
  );
}

async function Cities({}: Props) {
  const { data }: { data: TCity[] } = await getData();

  if (data.length === 0) {
    return "No Data";
  }

  return <Content data={data} />;
}

export default Cities;
