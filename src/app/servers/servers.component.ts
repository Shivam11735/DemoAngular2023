import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = 'Server Not Created';
  serverName = '';

  constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2500);
  }

  ngOnInit(): void {
      
  }

  onServerCreated(){
    this.serverCreationStatus = 'Server Created.'
    
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
    console.log(this.serverName);
  }
}
