import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from '../server/server.component';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = 'Server Not Created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = [''];

  constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2500);
  };

  ngOnInit(): void {
      
  };

  onServerCreated(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created By: '+this.userName+ ' with Name: '+this.serverName;
  };

  onUpdateUserName(event: any){
    this.userName = event.target.value;
    console.log(this.userName);
  };

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
    console.log(this.serverName);
  };

  resetPage(){
    this.userName = '';
    this.serverName = '';
    this.serverCreationStatus = 'Server Not Created';
    this.serverCreated = false;
  };
}
