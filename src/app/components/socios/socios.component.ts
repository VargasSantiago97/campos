import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  products1: any;
  displayModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.products1 = [
      {
        code: 123,
        price: 123,
        label: 'bot 1'
      },
      {
        code: 'asds',
        price: 12233,
        label: 'bot 2'
      }
    ]
  }

  eliminar(idd:any){
    alert("Eliminar " + idd)
  }
  editar(idd:any){
    alert("Editar " + idd)
  }

  showModalDialog() {
    this.displayModal = true;
}

}
