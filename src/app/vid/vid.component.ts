import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html',
  styleUrls: ['./vid.component.css']
})
export class VidComponent implements OnInit {
  clicked=false;

  constructor() {
  }

  ngOnInit() {
    $('#mainPoly').addClass("animationMainPoly");
    $('g rect').addClass("animationMainPoly");
    $('#outlinePoly').addClass("animationOutlinePoly");

    setTimeout(function(){
      $('#mainPoly').removeClass("animationMainPoly");
      $('g rect').removeClass("animationMainPoly");
      $('#outlinePoly').removeClass("animationOutlinePoly");
    }, 3000)
  }

  animBorder() {
    $('#presentation').addClass('presentationOrange');
  }

  click(){
    this.clicked=true;
  }
  removeBorder(){
    if(!this.clicked)
      $('#presentation').removeClass('presentationOrange');
  }
}
