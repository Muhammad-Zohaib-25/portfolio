import Button from "./components/Button";
import Header from "./components/Header";
import ParaBox from "./components/ParaBox";
import zohaibImg from "./assets/zohaib.webp";
import codewise from "./assets/codewise.png";
import reactIcon from "./assets/react-icon.svg";
import tailwindIcon from "./assets/tailwind-icon.svg";
import shoeCompany from "./assets/shoe-company.png";
import restCountries from "./assets/rest-countries.png";
import arrow from "./assets/arrow.svg";
import Blob from "./components/Blob";
import Star from "./components/Star";
import SkillBox from "./components/SkillBox";
import ContactForm from "./components/Form";

function App() {
  return (
    <div className="bg-[#121212] text-[#F6F6F6] overflow-x-hidden scroll-smooth">
      <Header />
      <main>
        <section>
          <div className="max-width h-fit md:h-[calc(100vh-64px)] flex flex-col md:flex-row">
            <div className="flex flex-col justify-center gap-3 md:gap-5 mdlg:gap-7 mt-8 md:mt-0">
              <ParaBox para={"Hello There!"} />
              <div>
                <h1 className="hero-text text-[#32F900] text-3xl md:text-4xl mdlg:text-[47px] font-montserrat font-bold md:mb-2 mb-0">
                  I'm Muhammad Zohaib
                </h1>
                <h1 className="hero-text text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-[47px] font-montserrat font-bold">
                  Front-End Developer
                </h1>
              </div>
              <p className="hero-text max-w-[100%] md:max-w-[80%] mdlg:max-w-[72%] text-sm md:text-base">
                I am a experienced Front-End Developer with 1+ year in the
                field, skilled in creating responsive and complex designs.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                <a href="#portfolio">
                  <Button
                    content={"View My Work"}
                    bgColor={"#32F900"}
                    color={"#121212"}
                    borderColor={"#32F900"}
                    hoverBgColor={"#F6F6F6"}
                    responsive={false}
                    width={"fit-content"}
                  />
                </a>
                <a href="#contact">
                  <Button
                    content={"Contact Me"}
                    bgColor={"black"}
                    color={"white"}
                    borderColor={"#F6F6F6"}
                    hoverBgColor={"black"}
                    responsive={false}
                    width={"fit-content"}
                  />
                </a>
              </div>
            </div>
            <div className="h-full relative grid place-items-center md:block">
              <div className="h-full">
                <Blob />
              </div>
              <img
                className="absolute top-16 left-8 h-12 md:h-10 mdlg:h-16 animate-bounce"
                src={reactIcon}
                alt="react icon"
                title="react.js"
              />
              <img
                className="absolute top-16 right-8 h-12 mdlg:h-16 animate-bounce"
                src={tailwindIcon}
                alt="tailwind icon"
                title="tailwind.css"
              />
              <img
                className="hero-image absolute bottom-0 h-[350px] md:h-[440px] mdlg:h-[500px] saturate-0 drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)]"
                src={zohaibImg}
                alt="zohaib image"
              />
            </div>
          </div>
        </section>
        {/* hero section ends here */}
        <div className="h-16 md:h-20 bg-[#32F900] flex items-center gap-14 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-14 animate-scroll">
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
          </div>
        </div>
        {/* carousal ends here */}
        <section id="portfolio">
          <div className="max-width pt-14 md:pt-24">
            <ParaBox para={"My Portfolio"} />
            <h1 className="text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-5xl font-montserrat font-bold mb-2 mt-5 md:mt-10">
              Let's Have a Look
            </h1>
            <h1 className="text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-5xl font-montserrat font-bold mb-10">
              at <span className="text-[#32F900]">My Portfolio</span>
            </h1>
            <div className="w-full bg-[#0000008f] backdrop-blur-md border border-[#ffffff25] rounded-lg p-5 flex flex-col md:flex-row items-center gap-8 lg:gap-14 group mb-10">
              <img
                className="rounded-lg h-full md:h-[250px] lg:h-[350px] object-cover group-hover:shadow-[0px_0px_6px_#32F900] transition-all duration-700"
                src={shoeCompany}
                alt="shoe company website"
              />
              <div>
                <div className="flex flex-wrap gap-2">
                  <SkillBox content={"HTML"} />
                  <SkillBox content={"Tailwind-CSS"} />
                  <SkillBox content={"JavaScript"} />
                </div>
                <h1 className="text-[#F6F6F6] text-[26px] mdlg:text-5xl font-poppins font-bold mt-2 md:mt-5">
                  The Shoe Company
                </h1>
                <p className="text-sm md:text-base max-w-[100%] lg:max-w-[80%] mt-2 md:mt-5 text-[#f6f6f6ab] font-thin">
                  The project features a sleek and modern UI with an intuitive
                  layout, ensuring a seamless user experience. The website
                  adapts to all screen sizes, making it mobile-friendly and
                  user-centric.
                </p>
                <a
                  href="https://the-shoe-company-by-constcoderr.netlify.app/"
                  target="_blank"
                >
                  <div className="flex items-center gap-2 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 p-1 rounded-[50%] border border-[#ffffff25] group-hover:border-[#32F900] grid place-items-center mt-2 md:mt-5 cursor-pointer transition-all duration-700">
                      <img
                        className="h-3/4 -rotate-45 group-hover:-translate-y-3 group-hover:translate-x-2 transition-all duration-700"
                        src={arrow}
                        alt="arrow svg"
                      />
                    </div>
                    <p
                      id="preview"
                      className="text-[#32F900] font-thin mt-5 transition-all duration-700 opacity-0 group-hover:opacity-100"
                    >
                      Live Preview
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full bg-[#0000008f] backdrop-blur-md border border-[#ffffff25] rounded-lg p-5 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-14 group lg:pl-14">
              <div>
                <div className="flex gap-2">
                  <SkillBox content={"HTML"} />
                  <SkillBox content={"CSS"} />
                  <SkillBox content={"JavaScript"} />
                </div>
                <h1 className="text-[#F6F6F6] text-[26px] mdlg:text-5xl font-poppins font-bold mt-2 md:mt-5">
                  Rest Countries App
                </h1>
                <p className="text-sm md:text-base max-w-[100%] lg:max-w-[80%] mt-2 md:mt-5 text-[#f6f6f6ab] font-thin">
                  A REST Countries App that fetches real-time country data using
                  the REST Countries API. Features include search functionality,
                  region-based filtering, light/dark mode, and dynamic country
                  details with border navigation. Users can explore any country,
                  view its details, and seamlessly navigate between neighboring
                  countries.
                </p>
                <a
                  href="https://rest-countries-app-by-constcoderr.netlify.app/"
                  target="_blank"
                >
                  <div className="flex items-center gap-2 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 p-1 rounded-[50%] border border-[#ffffff25] group-hover:border-[#32F900] grid place-items-center mt-2 md:mt-5 cursor-pointer transition-all duration-700">
                      <img
                        className="h-3/4 -rotate-45 group-hover:-translate-y-3 group-hover:translate-x-2 transition-all duration-700"
                        src={arrow}
                        alt="arrow svg"
                      />
                    </div>
                    <p
                      id="preview"
                      className="text-[#32F900] font-thin mt-5 transition-all duration-700 opacity-0 group-hover:opacity-100"
                    >
                      Live Preview
                    </p>
                  </div>
                </a>
              </div>
              <img
                className="rounded-lg h-full md:h-[250px] lg:h-[350px] object-cover group-hover:shadow-[0px_0px_10px_#32F900] transition-all duration-700"
                src={restCountries}
                alt="shoe company website"
              />
            </div>
          </div>
        </section>
        {/* portfolio section ends here */}
        <div className="h-16 md:h-20 bg-[#32F900] flex items-center gap-14 overflow-hidden whitespace-nowrap mt-14">
          <div className="flex items-center gap-14 animate-scroll">
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
          </div>
        </div>
        {/* carousal ends here */}
        <section id="experience">
          <div className="max-width pt-14 md:pt-20">
            <ParaBox para={"Experience"} />
            <h1 className="text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-5xl font-montserrat font-bold mb-2 mt-5 md:mt-10">
              My Working Experience as
            </h1>
            <h1 className="text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-5xl font-montserrat font-bold mb-14">
              a <span className="text-[#32F900]">Front-End Developer</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-5 lg:gap-20 transition-all duration-700 hover:shadow-[0px_0px_10px_#32F900] rounded-md p-3 lg:p-6 border border-[#ffffff25] bg-[#0000008f] backdrop-blur-md">
              <div className="bg-[#F6F6F6] h-16 w-16 lg:h-20 lg:w-20 rounded-md pt-3 flex-shrink-0">
                <img src={codewise} alt="codewise logo" />
              </div>
              <div>
                <h3 className="font-semibold lg:font-bold mb-2 lg:mb-4 text-xl lg:text-2xl text-[#32F900]">
                  Jan 2023 - Jan 2024
                </h3>
                <h2 className="font-semibold lg:font-bold mb-2 lg:mb-4 text-3xl lg:text-4xl">
                  Frontend Developer Internship
                </h2>
                <h2 className="font-semibold lg:font-bold mb-2 lg:mb-4 text-2xl lg:text-3xl">
                  Code Wise
                </h2>
                <p className="text-[#f6f6f6ab] text-base lg:text-xl">
                  Worked as a Frontend Developer for a year, both remotely and
                  on-site, collaborating with designers to turn designs into
                  pixel-perfect, responsive websites. Focused on performance
                  optimization, smooth interactions, and modern UI development
                  to enhance user experience. Gained hands-on experience in
                  delivering high-quality frontend solutions in a professional
                  environment.Also worked with WordPress to build and customize
                  websites.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* experience section ends here */}
        <div className="h-16 md:h-20 bg-[#32F900] flex items-center gap-14 overflow-hidden whitespace-nowrap mt-14">
          <div className="flex items-center gap-14 animate-scroll">
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              HTML
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Tailwind-CSS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              JavaScript
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              React.JS
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              GSAP
            </h3>
            <Star />
            <h3 className="text-[#121212] text-3xl md:text-4xl font-bold font-dangrek">
              Git & Github
            </h3>
            <Star />
          </div>
        </div>
        {/* carousal ends here */}
        <section className="mb-14 pt-14 md:pt-20" id="contact">
          <div className="max-width grid place-items-center">
            <ParaBox para={"Contact Me"} />
            <h1 className="text-center text-[#F6F6F6] text-3xl md:text-4xl mdlg:text-5xl font-montserrat font-bold my-5 md:my-10">
              Lets Talk For{" "}
              <span className="text-[#32F900]">
                Your <br /> Next Projects
              </span>
            </h1>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
