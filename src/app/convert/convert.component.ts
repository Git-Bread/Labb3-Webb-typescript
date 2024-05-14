import { Component } from '@angular/core';
import { LenghtConvertComponent } from "../lenght-convert/lenght-convert.component";
import { TempratureConvertComponent } from "../temprature-convert/temprature-convert.component";

@Component({
    selector: 'app-convert',
    standalone: true,
    templateUrl: './convert.component.html',
    styleUrl: './convert.component.scss',
    imports: [LenghtConvertComponent, TempratureConvertComponent]
})
export class ConvertComponent {
}
