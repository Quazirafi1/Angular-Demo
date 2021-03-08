import { Component, OnInit } from '@angular/core';
import { Doctors } from './Doctors';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angulardemo';

  constructor(private rs: RestService){}

  columns = ["Name", "Org"];
  index = ["name", "org"];

  doctors: Doctors[] = [];

  ngOnInit(): void {
    this.rs.getDoctors().subscribe
    (
      (response)=>{
        this.doctors = response;
      },

      (error) => {
        console.log("Error Occured: "+error);
      }
    )
  }
}
