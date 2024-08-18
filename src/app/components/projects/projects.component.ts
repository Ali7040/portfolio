import { Component } from "@angular/core";
import { CardComponent } from "../shared/card/card.component";
import { Project } from "../../model/project.model";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imgSrc: "assets/imgs/foodApp.png",
      projectTitle: "FOOD Store",
      projectDescription: `I created a food ordering app inspired by Food Panda using Angular. This dynamic and responsive app features a comprehensive product catalog with sorting and filtering options, secure user authentication for login and registration, and advanced styling with SCSS. This project was a great way for me to enhance my skills in building complex, user-friendly applications.`,
      tags: ["Angular", "TS", "SCSS", "Node.js", "MongoDB", "Mongoose"],
    },
    {
      imgSrc: "assets/imgs/old-portfolio.png",
      projectTitle: "Portfolio",
      projectDescription: `Previously developed a portfolio using React and Three.js, featuring interactive 3D elements to display projects and skills. This project demonstrated advanced frontend development and creative design integration. The new portfolio continues to build on these skills with updated features and improvements.`,
      tags: ["React", "TS", "CSS", "threeJS", "tailwindcss"],
      liveUrl: "https://ali-hiader.netlify.app/",
    },
    {
      imgSrc: "assets/imgs/calendar.png",
      projectTitle: "Calendar App",
      projectDescription: `I built a digital calendar app from the ground up using Angular and Angular Material, without relying on any external libraries. This project allowed me to implement features for setting and managing events on specific dates.`,
      tags: ["Angular", "TS", "SCSS", "Angular Material"],
      liveUrl: "https://calendar-app7.netlify.app/",
    },
    {
      imgSrc: "assets/imgs/sumIt.png",
      projectTitle: "SumIt",
      projectDescription: `Fed up with disorganized online reading, I created Sumit a web extension crafted with HTML, CSS, and JavaScript. Sumit helps me capture and organize notes, turning my online reading chaos into clarity. This project is a personal testament to solving real challenges with tailored tech solutions.`,
      tags: ["HTML", "JS", "CSS"],
    },
    {
      imgSrc: "assets/imgs/p-1.png",
      projectTitle: "snapGram",
      projectDescription: `I created a social media web app using React and TypeScript. This application features interactive user interfaces and dynamic content, providing an engaging and immersive user experience.`,
      tags: ["React", "TS", "CSS", "appwrite", "tailwindcss"],
    },
    {
      imgSrc: "assets/imgs/netflix-clone.png",
      projectTitle: "Netflix Clone",
      projectDescription: `I create a clone of an Netflix application using Angular, integrating Google Authentication for secure and seamless user login, and the implementation of robust authentication mechanisms.`,
      tags: ["Angular", "TS", "SCSS"],
    },

    {
      imgSrc: "assets/imgs/new-portfolio.png",
      projectTitle: "New Portfolio",
      projectDescription: `I created a new portfolio project using Angular, TypeScript, and SCSS, incorporating Tailwind CSS for streamlined styling. This project showcases my skills in modern frontend development practices and features a responsive design for an enhanced user experience.`,
      tags: ["Angular", "TS", "CSS", "tailwindcss"],
    },
    {
      imgSrc: "assets/imgs/img-detector.png",
      projectTitle: "Image Detector",
      projectDescription: `I created a real-time object detection system using YOLO and Python, integrated with a webcam for live video analysis.This project allowed me to explore and apply machine learning techniques in real time, enhancing my skills and understanding of object detection. `,
      tags: ["python", "Yolo"],
    },
    {
      imgSrc: "assets/imgs/people-counter.png",
      projectTitle: "People Counter",
      projectDescription: `I created a learning project involving a people counter using YOLO v8 and Python. This system utilizes real-time object detection to count individuals accurately,`,
      tags: ["python", "Yolo"],
    },
    {
      imgSrc: "assets/imgs/car-counter.png",
      projectTitle: "Car Counter",
      projectDescription: `I built a car counter as a learning project, using machine learning and computer vision techniques with YOLO in Python. This project was a hands-on way for me to deepen my skills in real-time object detection and practical AI applications.`,
      tags: ["python", "Yolo"],
    },
  ];

  openLive(url: string): void {
    window.open(url, "_blank");
  }
}
