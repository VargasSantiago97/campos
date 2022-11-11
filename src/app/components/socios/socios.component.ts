import { Component, OnInit } from '@angular/core';
import pocketbaseEs from 'pocketbase';
import { MessageService } from 'primeng/api';
const client = new pocketbaseEs('http://127.0.0.1:8090');

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  products1: any;
  socio: any = {
    alias: '',
    razon_social: '',
    cuit: 0,
  };
  displayModal: boolean = false;
  visibleSidebar1: boolean = false;
  multiplee: boolean = true;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.iniciar()
  }

  async iniciar(){
    const resultList = await client.records.getList('socios', 1, 50, {
      filter: 'estado = 1',
    });
    this.products1 = resultList.items
  }

  eliminar(idd:any){
    const elim = this.products1.find( (e:any) => e.id == idd)
    if(confirm('Desea eliminar ' + elim.alias + '?')){
      client.records.update('socios', idd, {estado:0})
      .then( () => this.iniciar())
    }
  }

  editar(idd:any){
    const edit = this.products1.find( (e:any) => e.id == idd)
    this.socio = edit
    this.displayModal = true
  }

  crear() {
    this.socio = {estado:1}
    this.displayModal = true;
  }

  async guardar(){
    if(this.socio.id){
      if(confirm('Desea Editar?')){
        client.records.update('socios', this.socio.id, this.socio)
        .then( () => {
          alert('Editado con exito')
          this.displayModal = false;
          this.iniciar()
        })
      }
    } else {
      if(confirm('Desea Guardar?')){
        client.records.create('socios', this.socio)
        .then( () => {
          alert('Guardado con exito')
          this.displayModal = false;
          this.iniciar()
        })
      }    
    }
  }

  async myUploader(event:any) {
    const formData = new FormData();

    for (let file of event.files) {
      formData.append('field', file);
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  
    const record = await client.records.create('posts', formData);
    console.log(record)
}

}
