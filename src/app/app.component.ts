import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockets-frontend';
  private serviceUrl: string = "http://localhost:8080/socket"
  stompClient: any;

  constructor(){
    this.connect();
  }
  connect() {
    // console.log(this.serviceUrl);
    const ws = new SockJS(this.serviceUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      console.log("connected");
    });
  }

  send(message){
    this.stompClient.send("/app/send/message" , {}, message);
    
  }
}
