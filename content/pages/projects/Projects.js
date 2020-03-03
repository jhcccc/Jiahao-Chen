import React from "react";
import ProjectCard from "./ProjectCard.tsx";
import "./Projects.css";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  950: 2,
  500: 1
};

export default function Projects() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <ProjectCard
        tags={["React", "TypeScript", "Jest", "Axios"]}
        text="First and only web app that allows McGill students see all final exam schedules with a simple login. Used by 200+ students."
        name="myExams"
        imgSrc="https://user-images.githubusercontent.com/8275280/75208512-e5ed8880-5749-11ea-8f74-895896210711.png"
        demoLink="https://myexams.now.sh/"
        repoLink="https://github.com/Deerhound579/my-exams"
      />
      <ProjectCard
        tags={["jQuery", "Python"]}
        text="A web app for finding McGill lecture schedules. Used by 100+ students.  Enabled students to look up 1800+ lectures among 30+ buildings"
        name="Find A Course"
        imgSrc="https://camo.githubusercontent.com/04c645aeee26c6fe7bb70e554371292408f7c182/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6a68636363632f46696e6441436f75727365406d61737465722f696d672f63686f6f73654275696c64696e672e706e67"
        demoLink="https://jhcccc.github.io/FindACourse/"
        repoLink="https://github.com/jhcccc/FindACourse"
      />
      <ProjectCard
        tags={["Node.js", "Puppeteer"]}
        text="Automatically export courses from McGill Transcript to Linkedin"
        name="CoursesToLinkedin"
        imgSrc="https://camo.githubusercontent.com/fa55a413471a19dd445ca66859a100124c889c21/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6a68636363632f436f7572736573546f4c696e6b6564696e406d61737465722f696d672f64656d6f2e676966"
        demoLink="https://github.com/jhcccc/CoursesToLinkedin"
        repoLink="https://github.com/jhcccc/CoursesToLinkedin"
      />
       <ProjectCard
        tags={["D3.js", "jQuery"]}
        text="A web app for creating linguistic syntax tree. Features interactive what-you-see-is-what-you-get editor."
        name="Easy Syntax Tree"
        imgSrc="https://camo.githubusercontent.com/84731826364bc98163c7883283974a207124e860/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6a68636363632f4561737953796e74617854726565406d61737465722f696d672f747265652e706e67"
        demoLink="https://jhcccc.github.io/EasySyntaxTree/"
        repoLink="https://github.com/jhcccc/EasySyntaxTree"
      />
      <ProjectCard
        tags={["React"]}
        text="A collection os artworks created by the people during the coronavirus outbreak"
        name="Wuhan2020-Artworks"
        imgSrc="https://user-images.githubusercontent.com/8275280/75580592-124d2180-5a36-11ea-8ebc-94304e7f2b91.jpg"
        demoLink="https://jhcccc.github.io/wuhan2020-artwork/"
        repoLink="https://github.com/jhcccc/wuhan2020-artwork"
      />
       <ProjectCard
        tags={["Python", "Node.js"]}
        text="Developed a Telegram Bot to notify course registration availability"
        name="Find A Place"
        imgSrc="https://camo.githubusercontent.com/38a962ec39f2112f03bde5f708f34af1276e35af/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6a68636363632f46696e6441506c616365406d61737465722f73637265656e73686f742e706e67"
        demoLink="https://github.com/jhcccc/FindAPlace/"
        repoLink="https://github.com/jhcccc/FindAPlace"
      />
       <ProjectCard
        tags={["C++"]}
        text="A 3D tic-tac-toe game in C++ with a computer player using Minimax algorithm to compete against the player."
        name="3D Tic-Tac-Toe"
        imgSrc="https://yingjie-xu.web.app/static/media/tic-tac-toe.4f67c5f9.png"
        demoLink="https://repl.it/@jhcccc/A1"
        repoLink="https://repl.it/@jhcccc/A1"
      />
      <ProjectCard
        tags={["jQuery", "Python"]}
        text="A better McGill Lecture Recording System (LRS) catalog. Enhanced UX."
        name="LRS+"
        imgSrc="https://camo.githubusercontent.com/e817764b25d1bf329b8b5f64d53e20bfd6fbe95d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6a68636363632f4c5253506c7573406d61737465722f696d672f636f6d706172652e706e67"
        demoLink="https://jhcccc.github.io/LRSPlus/"
        repoLink="https://github.com/jhcccc/LRSPlus"
      />
    </Masonry>
  );
}
