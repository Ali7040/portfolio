import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) imgSrc: string = '';
  @Input({required: true}) projectTitle: string = '';
  @Input () projectDescription: string = ''
  @Input() tags: string[] = [];
}
