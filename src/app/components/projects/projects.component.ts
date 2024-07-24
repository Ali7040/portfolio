import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  tags1: string[] = ['Tag1', 'Tag2', 'Tag3'];
  
  description1: string= "..."
}
