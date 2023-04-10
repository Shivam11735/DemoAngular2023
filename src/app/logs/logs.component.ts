import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";


@Component({
    selector: 'app-logs',
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.css']
})


export class LogsComponent {
    logStatus = false;
    logs : any[] = [];
    datepipe: any;
    current: any;
    
    
    constructor(){
        
    };

    OnCreateLogs(){
        this.logStatus = true;
        this.current =  new Date();
        this.logs.push(this.current.toString());
    };

    getClass(){
        if(this.logs.length>5)
        {
            return 'serverOver'
        };
        return 'serverLess'
    };
};