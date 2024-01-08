import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-create-chart',

  templateUrl: './create-chart.component.html',
  styleUrl: './create-chart.component.scss'
})
export class CreateChartComponent {

 

  constructor(
    private route: ActivatedRoute,
    private chartService: ChartsService,
    private router: Router

  ) {

    this.route.params.subscribe((params: any) => {
      console.log(params.id); 
      this.forwhat_id = params.id

      
    });


  }

  public forwhat_id :any = null
  public chart_type:any = null


  add_charts(){

    console.log(this.chart_type);
  let  data:any = {
      name: (document.getElementById('name') as HTMLInputElement ).value || "default",
      chart_type: this.chart_type || 1,
      query: (document.getElementById('query') as HTMLInputElement ).value || "[{$match:{}}]"
    }

    console.log((document.getElementsByClassName('select') as any )[0]);

    this.chartService.add_charts(this.forwhat_id,data).subscribe({
      next:(data:any)=>{
        console.log(data);

        this.router.navigate(['/charts',data.data]);
        
      },error:(error)=>{
        console.log(error);
      }
    })


  }

  OnChange(event:any){
    console.log(event.value);
    this.chart_type = event.value
  }

}
