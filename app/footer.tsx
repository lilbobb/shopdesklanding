import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[100px] bg-[#ffffff] flex flex-col items-center justify-center px-4 md:px-[100px] pb-[39px]">
      <div className="w-full max-w-[1296px] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#E2E8F0] pt-[39px]">
        <p className="text-[#717171] font-circular-std font-normal text-[14px] leading-[22px] tracking-normal text-center whitespace-nowrap">
          © Copyright 2025, Powered by Timbu Business
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="text-[#717171] font-circular-std font-normal text-[14px] leading-[22px] tracking-normal text-center hover:text-[#009A49] whitespace-nowrap"
          >
            Cookies
          </a>
          <a
            href="#"
            className="text-[#717171] font-circular-std font-normal text-[14px] leading-[22px] tracking-normal text-center hover:text-[#009A49] whitespace-nowrap"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-[#717171] font-circular-std font-normal text-[14px] leading-[22px] tracking-normal text-center hover:text-[#009A49] whitespace-nowrap"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[#717171] font-circular-std font-normal text-[14px] leading-[22px] tracking-normal text-center hover:text-[#009A49] whitespace-nowrap"
          >
            Manage Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;