import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="w-full">
      {/* Footer Top */}
      <div className="flex flex-wrap items-start justify-between gap-[70px] bg-[#a59985] p-[70px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start justify-center gap-5">
          <div className="relative h-[66.541px] w-[70.313px]">
            <Image
              src="/icons/mem-logo.svg"
              alt="Mekong Evangelical Mission logo"
              fill
              sizes="70px"
              className="object-contain"
            />
          </div>
          <div className="font-bold leading-none text-[19.341px] text-[#fafafa]">
            <p className="leading-[23px] mb-0">Mekong</p>
            <p className="leading-[23px]">
              <span>Evangelical </span>
              <span className="font-semibold">Mission</span>
            </p>
          </div>
        </Link>

        {/* Footer Links */}
        <div className="flex flex-wrap items-start justify-start gap-[70px]">
          {/* Quick Links */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-h2 font-bold text-[#fafafa]">Quick links</h3>
            <div className="flex flex-col items-start gap-[5px] text-body font-semibold leading-[18px] text-[#fafafa]">
              <Link href="/mission">Our Work</Link>
              <Link href="/mission">Our Mission</Link>
              <Link href="/projects">Support Us</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-h2 font-bold text-[#fafafa]">Contact us</h3>
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start leading-[18px] text-body text-[#fafafa]">
                <p className="font-semibold">Chansamone Saiyasak</p>
                <p className="font-normal">csaiyasak@mekongevan.org</p>
              </div>
              <div className="flex flex-col items-start leading-[18px] text-body text-[#fafafa]">
                <p className="font-semibold">Nathan Saiyasak</p>
                <p className="font-normal">nathan@mekongevan.org</p>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-h2 font-bold text-[#fafafa]">Stay connected</h3>
            <div className="flex flex-col items-start gap-[15px]">
              <p className="w-[275px] text-body font-normal leading-[18px] text-[#fafafa]">
                Subscribe to our newsletter to see be a part of our journey
              </p>
              <div className="flex w-full max-w-[360px] items-center gap-[10px] bg-[#e8e8e8] pl-[14px] pr-[3px] py-[3px] rounded-[6px] overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="grow bg-transparent text-body italic text-[#3a3e38] placeholder:text-[#3a3e38] focus:outline-none"
                />
                <button className="bg-[#a59985] flex h-full items-center justify-space-between px-5 py-[10px] rounded-[3px]">
                  <span className="text-body font-medium text-white">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-center bg-[#fafafa] p-[10px]">
        <p className="text-small font-normal leading-[22px] text-[#52525b]">
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
