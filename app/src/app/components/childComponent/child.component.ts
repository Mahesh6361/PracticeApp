/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {ActivatedRoute} from '@angular/router';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-child',
    templateUrl: './child.template.html'
})

export class childComponent extends NBaseComponent implements OnInit {
    @Input() parentMessage;
    @Output() messageEvent = new EventEmitter<string>();
    message = "Hey I got it"
    // dataDetails = this.router.snapshot.data
    constructor(private router:ActivatedRoute) {
        super();
    }

    ngOnInit() {
        
    }
    messageRecieved(){
        this.messageEvent.emit(this.message)
        console.log("Data From Route :",this.router.snapshot.data);
    }
}
