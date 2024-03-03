"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//component
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
    link: "https://portfolio-ardhiansyah.vercel.app/",
    github: "https://github.com/ardiansyaht/portfolio",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Lorem Ipsum bala-bala",
    description:
      "Lorem Ipsum bala-bala  enak coy, masih hidup karena bala-bala",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Lorem Ipsum bala-bala",
    description:
      "Lorem Ipsum bala-bala  enak coy, masih hidup karena bala-bala",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/*text*/}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">Lorem ipsum bala-bala</p>
          <Link href="/projects">
            <Button>All Project</Button>
          </Link>
        </div>
        {/*slider*/}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={38}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 project for the slides*/}
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
