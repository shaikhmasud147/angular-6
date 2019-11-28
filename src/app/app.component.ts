import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //Angular life cycle implements oninit
	name = "Masud"
	today = new Date()
	cash = 10000
	counter = 0
	
	mygraycolor = 'gray'
	mywhitecolor = 'white'

	people = []
	constructor(private peopleService: PeopleService){}

	ngOnInit() {
		//console.log("component initiated")
		this.counter = 2
		this.people = this.peopleService.addPeople()

		this.peopleService.newObserveables.subscribe(
			data => {
				console.log("Observe data here: ", data)
			},
			error => {
				console.log(error)	
			}
		)
	}

	btnClicked = () => {
		this.counter++
	}

	/*btnClicked = () => {
		console.log("Test")
	}*/

	/*btnClicked = function() {
		console.log("Test")
	}*/

}
