import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-simple-keyboard',
  templateUrl: './simple-keyboard.component.html',
  styleUrls: ['./simple-keyboard.component.css'],
  providers: [ConnectService]
})
export class SimpleKeyboardComponent implements OnInit, OnDestroy {
  activatedCommand;
  connection;
  connection2;
  message;

  constructor(private connectService: ConnectService) { }

  sendMessage(){
    this.connectService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.connectService.getMessages().subscribe(command => {
      this.activatedCommand = command;
      console.log(this.activatedCommand);
    })
    this.connection2 = this.connectService.getTest().subscribe(command => {
      console.log(command);
      this.activatedCommand = command;
    })
  }

  ngOnDestroy() {
    this.connection.unsubcrible();
  }

}
