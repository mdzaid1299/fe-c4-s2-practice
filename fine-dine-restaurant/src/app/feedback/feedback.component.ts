import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { feedback } from '../model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) { }

  feedbackForm:feedback = {}

 ngOnInit(): void {
  }
  locations = ["Hunts Ville", "Spring Dale", "Orlando", "Augusta", "New York"​]

  onSubmit(_feedbackForm: any){
    this._snackBar.open('Feedback submitted successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })

  }

}
