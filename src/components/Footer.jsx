import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-center mt-10">
      <div className="flex justify-center items-center gap-2">
        <div className="border border-transparent rounded-3xl w-10 h-10 bg-red-500 flex justify-center items-center">
          <a
            href="https://www.instagram.com/reel/DHrC2sgxyPr/?igsh=MTBjNjA4YnVmcnB1Zw=="
            target="_blank"
          >
            <FaInstagram size={24} color="white" />
          </a>
        </div>
        <div className="border border-transparent rounded-3xl w-10 h-10 bg-red-500 flex justify-center items-center">
          <a href="mailto:courage304@gmail.com">
            <IoIosMail size={24} color="white" />
          </a>
        </div>
        <div className="border border-transparent rounded-3xl w-10 h-10 bg-red-500 flex justify-center items-center">
          <a
            href="https://wa.me/+2348184127982"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} color="white" />
          </a>
        </div>
        <div className="border border-transparent rounded-3xl w-10 h-10 bg-red-500 flex justify-center items-center">
          <a href="tell:+2348184127982">
            <MdOutlinePhoneInTalk size={24} color="white" />
          </a>
        </div>
      </div>
      <p className="text-[0.7rem] mt-5">
        ©2025 JULIA ROSSETTI. All rights reserved. No part of this website may
        be reproduced without permission.
      </p>
    </div>
  );
};
export default Footer;
