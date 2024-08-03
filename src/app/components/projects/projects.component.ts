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
      projectDescription: `Developed a dynamic and responsive online food store using Angular.
        Implemented a comprehensive product catalog with sorting and filtering options.
        Integrated user authentication for secure login and registration. Utilized SCSS for advanced styling and layout customization.`,
      tags: ["Angular", "TS", "SCSS", "Node.js", "MongoDB", "Mongoose"],
    },
    {
      imgSrc: "assets/imgs/calendar.png",
      projectTitle: "Calendar App",
      projectDescription: `Developed a calendar app from scratch using Angular and Angular Material, without relying on external libraries. This project showcases proficiency in building complex, user-friendly interfaces and custom components.`,
      tags: ["Angular", "TS", "SCSS", "Angular Material"],
      liveUrl: "https://calendar-app.example.com",
    },
    {
      imgSrc: "assets/imgs/sumIt.png",
      projectTitle: "SumIt",
      projectDescription: `Providing users with an intuitive and efficient tool for creating and managing notes. Enhanced user productivity through seamless integration with browser environments.`,
      tags: ["HTML", "JS", "CSS"],
    },
    {
      imgSrc: "assets/imgs/p-1.png",
      projectTitle: "snapGram",
      projectDescription: `Developed a social media web app using React and TypeScript. The application features interactive user interfaces and dynamic content, providing an engaging and immersive user experience.`,
      tags: ["React", "TS", "CSS", "appwrite", "tailwindcss"],
    },
    {
      imgSrc: "assets/imgs/netflix-clone.png",
      projectTitle: "Netflix Clone",
      projectDescription: `Developed a clone of an Angular application, integrating Google Authentication for secure and seamless user login. This project demonstrates proficiency in Angular and the implementation of robust authentication mechanisms.`,
      tags: ["Angular", "TS", "SCSS"],
    },
    {
      imgSrc: "assets/imgs/old-portfolio.png",
      projectTitle: "Portfolio",
      projectDescription: `Previously developed a portfolio using React and Three.js, featuring interactive 3D elements to display projects and skills. This project demonstrated advanced frontend development and creative design integration. The new portfolio continues to build on these skills with updated features and improvements.`,
      tags: ["React", "TS", "CSS", "threeJS", "tailwindcss"],
      liveUrl: "https://ali-hiader.netlify.app/",
    },
    {
      imgSrc: "assets/imgs/new-portfolio.png",
      projectTitle: "New Portfolio",
      projectDescription: `Created a new portfolio project using Angular, TypeScript, and SCSS, with Tailwind CSS for streamlined styling. The project showcases modern frontend development practices and a responsive design for an enhanced user experience.`,
      tags: ["Angular", "TS", "CSS", "tailwindcss"],
      liveUrl: "https://alihaider7.netlify.app/",
    },
    {
      imgSrc: "assets/imgs/img-detector.png",
      projectTitle: "Image Detector",
      projectDescription: `Created a real-time object detection system using YOLO and Python, integrated with a webcam for live video analysis. `,
      tags: ["python", "Yolo"],
    },
    {
      imgSrc: "assets/imgs/people-counter.png",
      projectTitle: "People Counter",
      projectDescription: `Created a learning project involving a people counter using YOLO v8 and Python. This system utilizes real-time object detection to count individuals accurately,`,
      tags: ["python", "Yolo"],
    },
    {
      imgSrc: "assets/imgs/car-counter.png",
      projectTitle: "Car Counter",
      projectDescription: `Developed a car counter as a learning project, utilizing machine learning and computer vision techniques. This project demonstrates proficiency in real-time object detection and practical application of AI technologies.`,
      tags: ["python", "Yolo"],
    },
  ];

  openLive(url: string): void {
    window.open(url, "_blank");
  }
}
