import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PrimeiroComponenteComponent]
})
export class AppComponent {
  title = 'angular-training';

  
}
