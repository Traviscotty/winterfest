import Image from 'next/image';
import Link from 'next/link';
import { boogie } from './fonts';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-300">
      <div className="grid grid-cols-6 gap-0 min-h-screen">
        
        {/* Left Section with Fixed Height */}
        <div
          className="col-start-1 col-span-2 bg-white bg-cover"
          style={{ backgroundImage: "url('/schneeflocken.jpg')" }}
        >
          <Image
            src="/st.JPG"
            width={600}
            height={200}
            alt="Bildbeschreibung 01"
            className="pl-1 pt-1"
          />
          <h1 className="text-center text-4xl pt-1 underline text-bold italic">
            Schuljahr 2024
          </h1>
        </div>

        {/* Center Section for Winterfest Title and Button */}
        <div
          className="col-start-3 col-end-7 bg-white bg-cover flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/schneeflocken.jpg')" }}
        >
          <h1 className={`${boogie.className} text-9xl text-sky-600 text-center`}>
            Winterfest
          </h1>
          <div className="text-center mt-4">
            <Link href="/winterfest">
              <button
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 focus:outline-none"
              >
                Weitere Informationen
              </button>
            </Link>
          </div>
        </div>

        {/* Full-Width Image Section */}
        <div className="col-start-1 col-end-7 bg-slate-100 relative">
          <Image
            src="/schulestubi.jpg"
            alt="Bildbeschreibung 01"
            className="object-cover"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </div>
      </div>
    </div>
  );
}
