import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  newObserveables = new Observable( observer => {
    observer.next("hello")
    observer.next(this.people)
  })

  people = [
			{name: "Masud", age: "28"},
			{name: "Naved", age: "26"},
			{name: "Asad", age: "25"},
		]

  constructor() { }

  addPeople() {
  	// We could call external API 
  	return this.people
  }

}
