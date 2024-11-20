
import Image from 'next/image';
import Link from 'next/link';
import { boogie } from '../fonts';

export default function dashboard() {
    return (

<div>

<div className="grid grid-cols-6 gap-2 h-full min-h-screen bg-white ">
  <div className="col-start-1 col-span-2 bg-teal-200 ">

  <Image
          src="/st.JPG" // Pfad zu deinem Bild
          width={400}
          height={200}
          alt="Bildbeschreibung 01"
          className="pl-1 pt-1"
        />
    
</div>

<div className="col-start-3 col-end-7 bg-teal-200">
          <h1 className={`${boogie.className} text-9xl  underline`}>
            Winterfest
          </h1>
        </div>

  <div className="col-start-1 col-end-3 bg-teal-200">
    02
    </div>
  <div className="col-end-7 col-span-2 bg-teal-200">03</div>
  <div className="col-start-1 col-end-7 bg-teal-200">04</div>
</div>



</div>


        );
}