import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
	{path: '', component: TestComponent},
	{path: 'first', component: FirstComponent},
	{path: 'second/:id', component: SecondComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	routes, { enableTracing: false } // <-- debugging purposes only 
    ),

     // other imports here
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
