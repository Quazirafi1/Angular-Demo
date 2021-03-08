import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  public selectedName;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.selectedName = name;
  }

}
