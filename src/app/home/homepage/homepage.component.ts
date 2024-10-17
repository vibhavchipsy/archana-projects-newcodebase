import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { OurValuesComponent } from '../our-values/our-values.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AboutComponent, OurValuesComponent, ProjectsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
