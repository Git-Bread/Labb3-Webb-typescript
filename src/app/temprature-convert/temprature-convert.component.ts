import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-temprature-convert',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './temprature-convert.component.html',
  styleUrl: '../styles/convert.scss'
})
export class TempratureConvertComponent {
    temp = new FormGroup({
      Celsius: new FormControl(0, Validators.required), 
      Fahrenheit: new FormControl(0, Validators.required)
    });
    updateFahr() {
      this.temp.value.Fahrenheit = Math.round((9/5 * this.temp.value.Celsius!) + 32);
    }
    updateCels() {
      this.temp.value.Celsius = Math.round((this.temp.value.Fahrenheit! - 32) * 5/9);
    }
}
