import defaultImage from "../../assets/default.svg";
import githubImage from "../../assets/github.svg";

function About() {
  const people = [
    {
      name: "Saurav Pathak",
      githubUrl: "https://github.com/Razen04",
      position: "UI/UX Designer, Frontend and Model Training",
    },
    {
      name: "Abhishek Singh",
      githubUrl: "https://github.com/gloooomed",
      position: "Model Training and Backend Developer",
    },
    {
      name: "Anushka Keshri",
      githubUrl: "https://github.com/anu2005-debug",
      position: "Researcher, Report Writer, UI/UX Designer",
    },
    {
      name: "Anushka Rajak",
      githubUrl: "https://github.com/Anuska-Rajak",
      position: "Researcher and Backend Developer",
    },
    {
      name: "Shivam Shekhar",
      githubUrl: "https://github.com/Shivamshekharss",
      position: "Designer, Report Writer, Frontend",
    },
  ];

  return (
    <div className="about mt-16 text-white">
      <h1 className="text-5xl capitalize text-center text-red-500 font-bold mb-8">
        Meet the Team Behind This Idea
      </h1>
      <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">
        At RespireNet, our mission is to make respiratory health assessment more
        accessible and convenient for everyone. We leverage the power of
        artificial intelligence to analyze cough patterns and provide quick,
        data-driven predictions for potential respiratory conditions. Our goal
        is to empower individuals with early insights into their lung health,
        enabling them to take timely action while emphasizing that our tool is
        a supplementary resource, not a replacement for professional medical
        diagnosis.
      </p>
      <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed mt-4">
        Behind AI Cough Analyzer is a dedicated team of tech enthusiasts and
        healthcare advocates, committed to using AI to bridge the gap between
        technology and respiratory healthcare, helping individuals monitor
        their well-being with ease.
      </p>

      <div className="peoples mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {people.map((eachPerson, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-black/50 p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={defaultImage}
              alt="Default"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{eachPerson.name}</h1>
            <p className="text-gray-300 mb-4">{eachPerson.position}</p>
            <a
              href={eachPerson.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <img src={githubImage} alt="Github" className="w-5" />
              <span>View GitHub</span>
            </a>
          </div>
        ))}
        {/* Placeholder card for symmetry */}
        <div className="flex flex-col items-center text-center bg-transparent p-6 rounded-lg"></div>
      </div>
    </div>
  );
}

export default About;
