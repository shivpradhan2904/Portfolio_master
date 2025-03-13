import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <ul className="flex space-x-5">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/9078738600" target="_blank">
                  <FaWhatsapp className="text-2xl cursor-pointer" />
                </a>
              </li>
            </ul>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Shiv</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
