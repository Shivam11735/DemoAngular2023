import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: String = 'Offline';

    constructor(){
        this.serverId = Math.random();
        this.serverStatus = this.serverId > 0.5 ? 'Online' : 'Offline';
    };

    getServerStatus(){
        return this.serverStatus;
    };

    getColor(){
        return this.serverStatus === 'Online' ? 'green':'red';
    };

    getClass(){
        return this.serverStatus === 'Online' ? 'online':'offline';
    };

}