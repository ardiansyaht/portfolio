"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/7.png",
    category: "PHP",
    name: "TechForge Academy",
    description:
      "The Coding Bootcamp website uses email verification for login",
    link: "https://techforgeacademy.000webhostapp.com/",
    github: "https://github.com/ardiansyaht/crud",
  },
  {
    image: "/work/8.png",
    category: "React js",
    name: "Personal Website",
    description: "Portfolio ",
    link: "https://portfolio-ardiansyaht.vercel.app/",
    github: "https://github.com/ardiansyaht/portfolio",
  },

  {
    image: "/work/1.png",
    category: "HTML",
    name: "Lorem Ipsum bala-bala",
    description:
      "Lorem Ipsum bala-bala  enak coy, masih hidup karena bala-bala",
    link: "/",
    github: "/",
  },
];

//remove categories duplicates

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Project
        </h2>
        {/*tabs*/}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/*tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
