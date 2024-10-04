import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { TbMessage2 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-gray-800 items-center flex justify-around text-white">
        <section>
            <h1>ABOUT US</h1>
            <p className="text-white text-4xl md:text-3xl font-bold">
        Far far away, behind the word<br />
        mountains, far from the countries<br />
        Vokalia and Consonantia, there live the<br />
        blind texts.
            </p>
            <button>Join Volunteers</button>
        </section>

        <section>
            <h1>BLOG</h1>
            <div>

                <div className="flex gap-4">
                    <img src="" alt="" />
                </div>

                <div className="">
                    <h1>Feed A Child Daily</h1> <br/>
                    <div className="flex items-center gap-2">
                    <FaCalendarDays /> <p>July 8, 2018</p>
                    <IoMdPerson /> <p>Admin</p>
                    <TbMessage2 /> <p>19</p>
                    </div>
                </div>

                <div className="">
                    <h1>Feed A Child Daily</h1> <br/>
                    <div className="flex items-center gap-2">
                    <FaCalendarDays /> <p>July 8, 2018</p>
                    <IoMdPerson /> <p>Admin</p>
                    <TbMessage2 /> <p>19</p>
                    </div>
                </div>
                <div className="">
                    <h1>Feed A Child Daily</h1> <br/>
                    <div className="flex items-center gap-2">
                    <FaCalendarDays /> <p>July 8, 2018</p>
                    <IoMdPerson /> <p>Admin</p>
                    <TbMessage2 /> <p>19</p>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <h1>CONTACT</h1>
            <div>
                <div>
                <CiLocationOn />
                </div>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div>
                <div>
                <PiPhoneCall />
                </div>
                <p>	+2 392 3929 210</p>
            </div>
            <div>
                <div>
                <MdOutlineMarkEmailUnread />
                </div>
                <p>	info@yourdomain.com</p>
            </div>
            <div>
                <div>
                <IoIosTimer />
                </div>
                <p>	Monday — Friday 8:00am - 5:00pm</p>
            </div>
        </section>

        <hr />
        <section>
            <h2>Copyright ©2024 All rights reserved | This template is made with  by Goofy</h2>
        </section>

    </div>
  )
}

export default Footer