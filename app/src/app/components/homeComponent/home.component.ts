/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, Validators } from '@angular/forms'
import { employee } from 'app/models';
import {NSystemService} from 'neutrinos-seed-services';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'  
})

export class homeComponent extends NBaseComponent implements OnInit {
userform;
showchild=false;
showchildMsg = false;
Message:string;
emp:employee;
environmentDetails = NSystemService.getInstance();
    constructor(private formbuilder:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.userform = this.formbuilder.group({
            username : ['',[Validators.required]],
            password : ['',[Validators.required]]
        });

    }
    onClick(){
        if(this.userform.invalid){
            console.log('Please enter all details');
        }else{
        console.log(this.userform.value);
        this.showchild = true;
        }
        // Employee details from Data Models...
        this.emp = {username:this.userform.value.username, passwprd:this.userform.value.password};
        console.log("Employee Details :", this.emp);

        //Databasename from Environments...
        console.log('Database Name :', this.environmentDetails.getVal('databasename'));
    }
    RecievedMessage($event){
        console.log(this.Message = $event);
        this.showchildMsg = true;
    }
}
