import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let sr=ScrollReveal({reset:true});

    sr.reveal('.backToTop', {
      duration: 2000,
      delay: 100,
      origin: 'top',
      distance: '100%'
    });
  }

}
