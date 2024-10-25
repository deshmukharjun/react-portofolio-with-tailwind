import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import schoolIcon from "../public/school.svg";
import workIcon from "../public/work.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Reset animation for experience on scroll
  }, []);

  const experienceData = [
    { key: 5, date: "2024", title: "Santa Clara University", details: "Master's in Computer Science, California", icon: schoolIcon },
    { key: 4, date: "2020", title: "Accenture", details: "Full Stack Engineering Analyst, then Senior Analyst, Pune", icon: workIcon },
    { key: 3, date: "2019", title: "Summer Internship, Coupa", details: "Software Engineering Intern, Pune", icon: workIcon },
    { key: 2, date: "2016", title: "College", details: "B.Tech in Electronics and Telecommunications, Cummins College, Pune", icon: schoolIcon },
    { key: 1, date: "2014", title: "High School", details: "Dr. Kalmadi Shamarao High School, Pune", icon: schoolIcon },
  ];

  const skills = ["Java", "C++", "Python", "SQL", "HTML", "CSS", "Azure", "Shell Scripting", ".NET"];

  const testimonials = [
    {
      name: "John Doe",
      title: "Senior Developer, TechCorp",
      quote: "Sai is a talented developer with a keen eye for detail and dedication to quality. Her contributions have significantly improved our project timelines.",
      image: "/john.png"
    },
    {
      name: "Jane Smith",
      title: "Project Manager, InnovateX",
      quote: "Working with Sai was a pleasure. Her proactive approach and problem-solving skills were instrumental in the success of our team.",
      image: "/jane.png"
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sai Deshmukh - Portfolio</title>
        <meta name="description" content="Portfolio of Sai Deshmukh, a software developer and computer science student." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition-colors duration-500 ease-in-out">
        {/* Hero Section */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-poppins text-xl">Sai Deshmukh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl transition-transform duration-300 transform hover:scale-110"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-black to-slate-800 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-black font-medium dark:text-white md:text-6xl">Hello, I am Sai Deshmukh</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Developer & Computer Science Student</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Passionate about building impactful software solutions, currently pursuing a master's degree while bringing over three years of industry experience.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://linkedin.com/in/saideshmukhh16" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="transition-transform duration-300 transform hover:scale-110" />
              </a>
              <a href="https://github.com/dsai160898" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="transition-transform duration-300 transform hover:scale-110" />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 text-center">
          <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            I am a Master's student in Computer Science at Santa Clara University, with over three years of professional software development experience. My skills include full-stack development, defect resolution, and project management across Java, C++, .NET, Python, and Azure.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-20 text-center" data-aos="fade-up">
          <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 m-2 transition-transform duration-300 transform hover:scale-105">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <h3 className="text-3xl py-1 dark:text-white text-center">Experience</h3>
          <VerticalTimeline>
            {experienceData.map((item) => (
              <VerticalTimelineElement
                key={item.key}
                date={item.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} />
                  </div>
                }
                iconStyle={{ background: darkMode ? "#374151" : "#e5e7eb", color: "#e5e7eb" }}
                contentStyle={{ background: darkMode ? "#374151" : "#f9f9f9", color: darkMode ? "#fff" : "#333" }}
                contentArrowStyle={{ borderRight: `10px solid ${darkMode ? "#374151" : "#f9f9f9"}` }}
              >
                <h3 className="vertical-timeline-element-title dark:text-white">{item.title}</h3>
                <p className="text-gray-800 dark:text-gray-100">{item.details}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>



        {/* Projects Section */}
        <section className="py-20" data-aos="fade-up">
          <h3 className="text-3xl py-1 dark:text-white text-center">Projects</h3>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-10 mt-10">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={web1} alt="project 1" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Arduino Mini-Vehicle Prototype</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300">A programmable vehicle prototype using Arduino for various sensor-based applications.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={web2} alt="project 2" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Accident Prediction System</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300">A machine learning model for predicting accident-prone areas using Random Forest and Google Maps API.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <h3 className="text-3xl py-1 text-center dark:text-white">Testimonials</h3>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="max-w-xs bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-center text-gray-500 dark:text-gray-300 text-sm">{testimonial.title}</p>
                <p className="mt-3 text-gray-700 dark:text-gray-200 text-center">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center">
          <p className="text-gray-800 dark:text-gray-400">Contact: <a href="mailto:sgdeshmukh@scu.edu" className="text-teal-500 hover:underline">sgdeshmukh@scu.edu</a></p>
          <div className="flex justify-center gap-10 mt-3">
            <a href="https://linkedin.com/in/saideshmukhh16" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-3xl text-gray-600 dark:text-gray-400 transition-transform duration-300 transform hover:scale-110" />
            </a>
            <a href="https://github.com/dsai160898" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-3xl text-gray-600 dark:text-gray-400 transition-transform duration-300 transform hover:scale-110" />
            </a>
          </div>
          <p className="text-gray-800 dark:text-gray-400 mt-3">© 2024 Sai Deshmukh</p>
        </footer>
      </main>
    </div>
  );
}
