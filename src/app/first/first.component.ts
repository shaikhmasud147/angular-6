import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  ourForm = new FormGroup({
  	name: new FormControl(''),
  	surname: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  sendForm = () => {
  	console.log(this.ourForm.value)
  }

}
