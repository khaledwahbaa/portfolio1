import { useState } from "react";

import Project6 from "../assets/Images/Project6.png";
import Project2 from "../assets/Images/Project2.png";
import Project3 from "../assets/Images/Project3.png";
import Project4 from "../assets/Images/Project4.jpg";
import Project5 from "../assets/Images/Project5.jpg";

const Project = ({ darkMode }) => {

  const projects = [
    {
      id: 1,
      title: "Designer Website",
      image: Project6,
      category: "Website",
      tags: ["React", "Tailwind"],
      description:
        "A modern portfolio website built with React and Tailwind CSS. Includes animations, responsive design and dark mode support."
    },
    {
      id: 2,
      title: "Landing Page UI",
      image: Project2,
      category: "UI",
      tags: ["UI", "Tailwind"],
      description:
        "Clean and minimal landing page design focused on conversion and user experience."
    },
    {
      id: 3,
      title: "Education Website",
      image: Project3,
      category: "Website",
      tags: ["React", "JavaScript", "Node.js"],
      description:
        "Educational platform with course listings, user interaction and backend integration."
    },
    {
      id: 4,
      title: "Charity Website",
      image: Project4,
      category: "Website",
      tags: ["Tailwind", "Node.js"],
      description:
        "Charity donation website with clean UI and backend support for handling donations."
    },
    {
      id: 5,
      title: "Game Store",
      image: Project5,
      category: "Dashboard",
      tags: ["Tailwind", "MongoDB"],
      description:
        "Game store dashboard with product management and database integration."
    },
  ];

  const filters = ["All", "UI", "Website", "Dashboard"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="py-20 scroll-mt-24"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
        color: darkMode ? "white" : "#1f2937",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">

        
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
    </span>
        </h2>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my UI & frontend concepts
          </p>
        </div>

        
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((filter) => (
         <button
             key={filter}
             onClick={() => setActiveFilter(filter)}
             className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300
             ${
                  activeFilter === filter
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : darkMode
         ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-orange-500/20 hover:text-orange-400"
              : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-orange-100 hover:text-orange-600"
         }`}
            >
        {filter}
        </button>
      ))}
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
           key={project.id}
           onClick={() => setSelectedProject(project)}
       className={`cursor-pointer group rounded-2xl border overflow-hidden
           transition-all duration-300 hover:-translate-y-2
            ${
           darkMode
          ? "bg-gray-900 border-gray-700 hover:border-orange-500/40"
          : "bg-white border-gray-200 hover:border-orange-500/40"
           }
          hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]`}
            >
        <div className="overflow-hidden">
            <img
            src={project.image}
            alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  width="600"
                  height="300"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3">
                  {project.title}
                </h3>

                <div className="h-1 w-10 rounded-full bg-orange-400 mb-4 group-hover:w-full transition-all duration-500" />

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                  <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full border border-orange-200 text-orange-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className={`p-8 rounded-2xl max-w-lg w-full relative
              ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            <p className="mb-4">
              {selectedProject.description}
            </p>

            <div className="flex gap-2 flex-wrap">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full border border-orange-200 text-orange-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Project;
