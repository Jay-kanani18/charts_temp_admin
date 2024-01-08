import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        public projectService: ProjectService,

    ) {}

    ngOnInit() {
        this.getProjects()
    
    
      }

    public project_list:any = []

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    getProjects() {

        this.projectService.getProjects().subscribe({
          next: (data: any) => {
    
    
            this.project_list = data.user_list
    
          }, error: (error) => {
            console.log(error);
          }
        })
      }

}