import { Component } from '@angular/core';
import { Header } from './components/header.component';
import { Footer } from './components/footer.component';
import { MainPage } from './pages/main.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[Header,Footer,MainPage,NgClass,RouterOutlet],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgClassName = "bgDay"
}