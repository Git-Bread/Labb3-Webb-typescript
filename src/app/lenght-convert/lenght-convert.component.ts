import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lenght-convert',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lenght-convert.component.html',
  styleUrl: '../styles/convert.scss'
})
export class LenghtConvertComponent {
  lenght = new FormGroup({
    Meters: new FormControl(0, Validators.required), 
    Feet: new FormControl(0, Validators.required)
  });
  updateMeter() {
    this.lenght.value.Meters = Math.round((this.lenght.value.Feet! / 3.28084) * 100) / 100;
  }
  updateFeet() {
    this.lenght.value.Feet = Math.round((this.lenght.value.Meters! * 3.28084) * 100) / 100;
  }

}
