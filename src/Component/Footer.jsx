import React from "react";
import { Link } from "react-router-dom";
import log1 from "../assets/logo1png.png";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="mx-auto w-full max-w-screen-xl  p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Grand Blog
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">About Us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <p className="hover:underline">Our Mission</p>
                </li>
                <li>
                  <p className="hover:underline">Our Vision</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link
                    to="https://github.com/TanvirMain49"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="https://discord.com/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link
              to="https://game-heaven-1117d.web.app/"
              className="hover:underline"
            >
              grand Blogs™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-xl">
            <Link to="#" className="">
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="ms-5">
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="ms-5">
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
