import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export default function ImpressumPage() {
  return (
    <div className="w-full bg-base-200 h-screen">
      <div className="flex items-center flex-col p-4 gap-6 justify-center max-w-screen-lg mx-auto">
        <Link
          href={"/favorites"}
          className="self-start hover:scale-110 duration-300"
        >
          <HiOutlineArrowLeft size={30} />
        </Link>
        <h1 className="font-bold text-4xl">Impressum</h1>
        <p>Alexander Niehaus</p>
        <p>Eisenbahnstraße 35</p>
        <p>04315 Leipzig</p>
        <h2 className="font-semibold text-2xl">Kontakt</h2>
        <p>Telefon: 01522 4829410</p>
        <p>Email: alexander.niehaus@gmx.net</p>
        <h2 className="font-semibold text-2xl">Vertreten durch:</h2>
        <p>Alexander Niehaus</p>
      </div>
    </div>
  );
}
