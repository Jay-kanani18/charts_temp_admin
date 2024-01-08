import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent {

    categories = new FormControl('');
    categoriesList: string[] = [
        'Admin', 'Driver', 'Corporate', 'Dispatcher', 'Hub', 'Partner'
    ];
    typeList: string[] = [
        'admin', 'driver', 'corporate', 'hub', 'Hub', 'Partner'
    ];

    members = new FormControl('');
    membersList: string[] = [
        'Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'
    ];

    tokenGenerator() {

        console.log('call');
        var token = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 32; i++){
    
          token += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log(token);
        (document.getElementById('token')as HTMLInputElement).value = token
    
    };
    
}