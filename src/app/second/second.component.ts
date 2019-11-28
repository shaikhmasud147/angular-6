import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
	  	private route: ActivatedRoute,
	  	private location: Location
  	) { }

  ngOnInit() {
  	let ourId = +this.route.snapshot.paramMap.get('id')
  	console.log(ourId)
  }
  btnBack = () => {
		this.location.back()
	}

}
