import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 w-full md:h-[80px] h-[60px] p-2 flex  justify-between fixed items-center ">
        <div className=""><img className=" md:h-[170px] md:w-[80px] w-70px] h-[160px] md:ml-4 pt-[70px] " src="https://kamrantessori.com/_next/static/media/logo.9ff76f62.png" alt="logo" /></div>

        <div className="md:hidden text-blue-200 font-extrabold font-sans text-[18px]">Tuition Free Program</div>
        <div className="hidden md:block  text-blue-200 font-extrabold font-sans text-[22px]">Tuition Free Education Program on Latest Technologies</div>

         <div>
          <ul className=" space-x-7 pr-3 font-bold text-white md:flex hidden">

            <li><Link href="/">Home</Link></li>
            <li><Link href="apply">Apply</Link></li>
            <li><Link href="job">Job</Link></li>
            <li><Link href="result">Result</Link></li>
            <li><Link href="courses">Courses</Link></li>
          </ul>
        </div>

        <div className="md:hidden text-white text-[30px] font-serif"><a href="">&#8801;</a></div>
      </nav>
  );
}
