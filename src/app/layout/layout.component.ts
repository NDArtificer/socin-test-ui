import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  constructor() { }

 
  ngAfterViewInit(){
    (($) => {
      "use strict";
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
              if  (this instanceof HTMLAnchorElement && this.href === path) {
                  $(this).addClass("active");
              }
          });   
      $("#sidebarToggle").on("click", function(e:any) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }


}
