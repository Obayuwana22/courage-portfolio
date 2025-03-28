import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-10 mb-0 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        {/* <div className="border border-transparent rounded-3xl w-8 h-8 bg-red-500 flex justify-center items-center">
          <a
            href=""
            target="_blank"
          >
            <FaInstagram size={20} color="white" />
          </a>
        </div> */}
        <div className="border border-transparent rounded-3xl w-8 h-8 bg-red-500 flex justify-center items-center">
          <a href="mailto:courage304@gmail.com">
            <IoIosMail size={20} color="white" />
          </a>
        </div>
        <div className="border border-transparent rounded-3xl w-8 h-8 bg-red-500 flex justify-center items-center">
          <a
            href="https://wa.me/+2348184127982"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} color="white" />
          </a>
        </div>
        <div className="border border-transparent rounded-3xl w-8 h-8 bg-red-500 flex justify-center items-center">
          <a href="tel:+2348184127982">
            <MdOutlinePhoneInTalk size={20} color="white" />
          </a>
        </div>
      </div>
      <p className="text-[0.7rem] mt-5 text-center">
        ©2025 JULIA ROSSETTI. All rights reserved. No part of this website may
        be reproduced without permission.
      </p>
    </div>
  );
};
export default Footer;
