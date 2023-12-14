import CompanyLogo from "./assets/company-logo.svg";
import FigmaLogo from "./assets/figma-logo.svg";
import MainIllustration from "./assets/illustration.svg";
import StarsIllustration from "./assets/stars-illustration.svg";

// grid grid-rows-3 h-screen min-h-[800px]
export default function App() {
  return (
    <section>
      <main className="bg-[#0B0C13] flex flex-col h-screen min-h-[800px]">
        <div className="relative row-span-2 h-full max-h-[500px] md:max-h-[600px]">
          <img
            src={StarsIllustration}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
          />
          <div className="max-w-screen-2xl mx-auto w-10/12 py-10 md:py-24 flex flex-col h-full gap-16 relative z-[1]">
            <img
              src={CompanyLogo}
              alt="bunkr.finance"
              className="h-[16px] md:h-[20px] mr-auto"
            />

            <div className="md:flex grid gap-5 md:gap-10 items-center justify-between h-min my-auto">
              <h1
                className="text-4xl lg:text-6xl text-white font-medium leading-normal lg:leading-snug max-w-2xl gap-10"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                Bridging the gap to true financial freedom
              </h1>
              <div className="max-w-xl">
                <p className=" lg:text-xl mb-7 text-[#A1ABE2]">
                  a single source of truth for your financial data, transforming
                  how you interact with your finances.
                </p>
                <a
                  href="https://www.figma.com/proto/ZUBDVk6MScm286Hf2EdSg7/Bunkr-Finance-Limited?page-id=341%3A4&type=design&node-id=672-4&viewport=975%2C627%2C0.73&t=xEKpQF4iXxSSTBU4-1&scaling=min-zoom&starting-point-node-id=672%3A4&mode=design"
                  className="flex items-center gap-3 max-w-max px-6 py-4 rounded-md bg-[#0029FF] text-white font-bold text-sm"
                >
                  <img src={FigmaLogo} className="w-4 h-4" alt="figma" />
                  View Prototype
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <img
            src={MainIllustration}
            alt=""
            className="w-full h-full object-cover mix-blend-hard-light"
          />
        </div>
      </main>
      {/* <iframe
        // style="border: 1px solid rgba(0, 0, 0, 0.1);"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZUBDVk6MScm286Hf2EdSg7%2FBunkr-Finance-Limited%3Ftype%3Ddesign%26node-id%3D41%253A2%26mode%3Ddesign%26t%3DSMAYJwEpLRRLCgmQ-1"
        allowFullScreen
      ></iframe> */}
    </section>
  );
}
