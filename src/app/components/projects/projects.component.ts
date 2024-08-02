import { Component } from "@angular/core";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  tags1: string[] = ["Angular", "TS", "SCSS"];

  description1: string = `Developed a dynamic and responsive online food store using Angular.
Implemented a comprehensive product catalog with sorting and filtering options.
Integrated user authentication for secure login and registration.Utilized SCSS for advanced styling and layout customization.
`;

  tags2: string[] = ["HTML", "JS", "CSS"];

  description2: string = `providing users with an intuitive and efficient tool for creating and managing notes. Enhanced user productivity through seamless integration with browser environments.`;

  tags3: string[] = ["React", "TS", "CSS", "appwrite", "tailwindcss"];
  description3: string = `Developed a social media web app using React and TypeScript. The application features interactive user interfaces and dynamic content, providing an engaging and immersive user experience.`;

  tags4: string[] = ["Angular", "TS", "SCSS"];
  description4: string = `Developed a clone of an Angular application, integrating Google Authentication for secure and seamless user login. This project demonstrates proficiency in Angular and the implementation of robust authentication mechanisms.`;

  tags5: string[] = ["React", "TS", "CSS", "threeJS", "tailwindcss"];
  description5: string = `Previously developed a portfolio using React and Three.js, featuring interactive 3D elements to display projects and skills. This project demonstrated advanced frontend development and creative design integration. The new portfolio continues to build on these skills with updated features and improvements.`;

  tags6: string[] = ["Angular", "TS", "CSS", "tailwindcss"];
  description6: string = `Created a new portfolio project using Angular, TypeScript, and SCSS, with Tailwind CSS for streamlined styling. The project showcases modern frontend development practices and a responsive design for an enhanced user experience.`;

  tags7: string[] = ["python", "Yolo"];
  description7: string = `Developed a real-time object detection system using Python and the YOLO algorithm. The system can detect objects in images and videos, providing valuable insights for various applications, including security and surveillance.`;

  tags8: string[] = ["python", "Yolo"];
  description8: string = `Developed a people counter using YOLO v8 and Python, leveraging real-time object detection to accurately count individuals in various environments. This project demonstrates proficiency in machine learning and computer vision, with a focus on practical applications in monitoring and analysis.`;

  tags9: string[] = ["python", "Yolo"];
  description9: string = `Created a learning project involving a people counter using YOLO v8 and Python. This system utilizes real-time object detection to count individuals accurately, showcasing skills in machine learning and computer vision.`;
}
