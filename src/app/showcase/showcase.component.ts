import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let sr = ScrollReveal({ reset: true });
    sr.reveal('.showcaseLeft', {
      duration: 800,
      delay: 100,
      origin: 'left',
      distance: '75%'
    });
    sr.reveal('.showcaseMiddle', {
      duration: 800,
      delay: 100,
      origin: 'right',
      distance: '0'
    });

    sr.reveal('.showcaseRight', {
      duration: 800,
      delay: 100,
      origin: 'right',
      distance: '75%'
    });


  }
}
