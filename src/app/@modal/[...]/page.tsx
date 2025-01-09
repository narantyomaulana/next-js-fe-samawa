import { PreventScrolling, RouterBack } from "@/components/Modal";
import React from "react";

type PageProps = {
  searchParams: Promise<{
    modal: string;
    [key: string]: string;
  }>;
};

async function page({ searchParams }: PageProps) {
  const params = await searchParams;

  if (params.modal && params.modal !== "") {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
            {/* catch searchParams disini untuk render modal contoh: params.modal == 'bonus'  */}
          </div>
          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    );
  }

  return null;
}

export default page;