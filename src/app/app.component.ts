import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './_core/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kaiju';
}
