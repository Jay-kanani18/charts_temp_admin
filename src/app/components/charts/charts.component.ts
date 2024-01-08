import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { ActivatedRoute } from '@angular/router';
import { ChartsService } from 'src/app/services/charts.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  // animations: [
  //   trigger('fillAnimation', [
  //     transition(':enter', [
  //       style({ width: '100%', background: 'white' }), // Start with white background and 0% width
  //       animate('2s', style({ width: '100%', background: '#757fef ' })), // End with purple background and 100% width
  //     ]),
  //   ]),
  // ],

})
export class ChartsComponent {

  constructor(
    public themeService: CustomizerSettingsService,
    private route: ActivatedRoute,
    private chartService: ChartsService,

  ) {

    this.route.params.subscribe((params: any) => {
      console.log(params.id); // Access the "id" parameter
      this.getForWhom(params.id)
      this.user_id = params.id
    });


  }

  public for_whom_list: any = []
  public is_add_forwhom: any = false
  public is_edit_forwhom: any = false
  public edit_index_forwhom: any = null
  public forwhom_selected_index: any = null
  public forwhom_selected_id: any = null
  public dup_whom: any = false
  public dup_whom_edit: any = false

  public for_what_list: any = []
  public is_add_forwhat: any = false
  public is_edit_forwhat: any = false
  public edit_index_forwhat: any = null
  public forwhat_selected_index: any = null
  public forwhat_selected_id: any = null
  public dup_what: any = false
  public dup_what_edit: any = false


  public charts_list: any = ['', '', '', '', '']


  private user_id: any = false




  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  getForWhom(user_id: any) {
    console.log('for whom');
    this.chartService.get_for_whom(user_id).subscribe({
      next: (data: any) => {
        this.for_whom_list = data.data

        if (this.for_whom_list.length > 0) {
          this.forwhom_selected_index = 0
          this.getForwhat(this.for_whom_list[this.forwhom_selected_index]['_id'])
          this.forwhom_selected_id = this.for_whom_list[this.forwhom_selected_index]['_id']

        }

        console.log(this.for_whom_list);
        // this.getForwhat(this.for_whom_list[0]._id)
        // this.is_add = false


      }, error: (error: any) => {
        console.log(error);

      }
    })

  }

  getForwhat(id: any) {
    console.log(id);
    this.chartService.get_for_what(id).subscribe({
      next: (data: any) => {
        this.for_what_list = data.data

        if (this.for_what_list.length > 0) {
          this.forwhat_selected_index = 0
          this.forwhat_selected_id = this.for_what_list[this.forwhat_selected_index]._id
          console.log(this.forwhat_selected_id);
          this.getCharts()
        }else{
          console.log('wwwwwwwwwwwwwwwwwwwwwww');
          this.forwhat_selected_index = null
          this.forwhat_selected_id = null
          this.charts_list = []

        }

      }, error: (error: any) => {
        console.log(error);

      }
    })
  }

  getCharts(){

    

    this.chartService.get_charts(this.forwhat_selected_id).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.charts_list = data.data.charts

        console.log(this.charts_list);
      },error:(error)=>{
        console.log(error);
      }
    })

  }
  onSelectforwhom(index: any) {
    console.log(index);
    this.forwhom_selected_index = index
    this.forwhom_selected_id = this.for_whom_list[this.forwhom_selected_index]['_id']
    this.getForwhat(this.forwhom_selected_id)

  }
  onSelectforwhat(index: any) {
    console.log(index);
    this.forwhat_selected_index = index
    this.forwhat_selected_id = this.for_what_list[this.forwhat_selected_index]._id
    this.getCharts()

    console.log(this.forwhat_selected_id);


  }

  // addForwhat(){

  //   let update_id = this.update_id



  //   let el1 = (document.getElementById('name') as HTMLInputElement).value

  //   this.chartService.add_for_what({name:el1},update_id).subscribe({
  //     next:(data:any)=>{
  //       console.log(data);
  //       console.log(data);
  //       this.subcatagories = this.getForwhat(this.update_id)  

  //     }, error:(error)=>{
  //       console.log(error);
  //       ;
  //     }
  //   })
  // }

  onSubmit() {

  }
  onAddnewforwhom() {
    this.is_add_forwhom = true

  }
  onAddnewforwhat() {
    console.log('what select');
    this.is_add_forwhat = true

  }

  addForWhom() {

    let el = document.getElementById('forwhom-name') as HTMLInputElement


    if (el.value.length <= 0) {
      return
    }

    console.log(el.value);
    this.chartService.add_for_whom({ name: el.value }, this.user_id).subscribe({
      next: (data: any) => {
        console.log(data);

        if(data.error){
          this.dup_whom = true
          return console.log("duplicate");
          
        }
        
        this.dup_whom = false
        this.getForWhom(this.user_id)
        this.is_add_forwhom = false

      }, error: (error: any) => {
        console.log(error);
      }
    })

  }
  addForWhat() {

    let el = document.getElementById('forwhat-name') as HTMLInputElement


    if (el.value.length <= 0) {
      return
    }

    console.log(el.value);
    this.chartService.add_for_what({ name: el.value }, this.forwhom_selected_id).subscribe({
      next: (data: any) => {
        console.log(data);

        if(data.error){
          this.dup_what = true
          return console.log("duplicate");
          
        }

          this.dup_what = false
          
        
        this.getForWhom(this.user_id)
        this.is_add_forwhat = false


      }, error: (error: any) => {
        console.log(error);
      }
    })

  }

  oneditForwhom(index: any) {
    console.log(index);
    this.is_edit_forwhom = true
    this.edit_index_forwhom = index
  }
  oneditForwhat(index: any) {
    console.log(index);
    this.is_edit_forwhat = true
    this.edit_index_forwhat = index
  }
  onCancelforwhom() {

    this.edit_index_forwhom = null
  }
  onCancelforwhat() {

    this.edit_index_forwhat = null
  }
  onSaveforwhom(id: any) {
    let el = document.getElementById('forwhomeditValue') as HTMLInputElement

    console.log(el.value); this.chartService.save_for_whom(id, { name: el.value }).subscribe({
      next: (data: any) => {
        console.log(data);


        if(data.error){
          this.dup_whom_edit = true
          return console.log("duplicate");
          
        }
        this.dup_whom_edit = false

        this.getForWhom(this.user_id)

        this.edit_index_forwhom = null

      }, error: (error: any) => {
        console.log(error);
      }
    })


  }
  onSaveforwhat(id: any) {

    console.log('what save');
    let el = document.getElementById('forwhateditValue') as HTMLInputElement

    console.log(el.value);

    ; this.chartService.save_for_what(id, { name: el.value }).subscribe({
      next: (data: any) => {
        console.log(data);

        if(data.error){
          this.dup_what_edit = true
          return console.log("duplicate");
          
        }
        this.dup_what_edit = false

        this.getForWhom(this.user_id)

        this.edit_index_forwhat = null

      }, error: (error: any) => {
        console.log(error);
      }
    })


  }
  onRemoveforwhom(id: any) {

    this.chartService.remove_for_whom(this.user_id, id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getForWhom(this.user_id)
        this.edit_index_forwhom = null

      }, error: (error: any) => {
        console.log(error);
      }
    })

  }
  onRemoveforwhat(id: any) {

    this.chartService.remove_for_what (this.user_id, id,this.forwhom_selected_id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getForWhom(this.user_id)
        this.edit_index_forwhom = null

      }, error: (error: any) => {
        console.log(error);
      }
    })

  }

  onClickchart() {

  }

  onRemoveChart(id: any) {

  }
  oneditChart(index: any) {

  }
  onAddnewChart() {

  }

}
