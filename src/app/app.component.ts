import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import {  PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio2024';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cursor();
    }
  }

  cursor(){
        //cursor effect---------------------------------------------------------------
        const cursor = document.querySelector("#cursor") as HTMLElement;
        const cursor2 = document.querySelector("#cursor2") as HTMLElement;
        
        // set the initial opacity of the cursor elements to 0
        cursor.style.opacity = cursor2.style.opacity = "0";
        
        document.addEventListener("mousemove", (e) => {
          // check if the mouse pointer is inside the viewport
          if (e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight) {
            // set a delay for the movement of cursor
            setTimeout(() => {
              cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; opacity: 1;`;
            }, 50); // adjust the delay time (in milliseconds) as needed
            
            cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; opacity: 1;`;
          }
        });
        
        // add a "mouseleave" event listener to hide the cursor elements
        document.body.addEventListener("mouseleave", (e) => {
          cursor.style.opacity = "0";
          cursor2.style.opacity = "0";
        });
    
        // add an "if" statement to check if cursor2 is at opacity 0, and if so, set cursor to opacity 0 as well
        setInterval(() => {
          if (cursor2.style.opacity === "0") {
            cursor.style.opacity = "0";
          }
        }, 50);
  }
}
