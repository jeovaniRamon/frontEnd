import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'formaPago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl(''),
      numero: new FormControl(''),
      fecha: new FormControl(''),
      cvv: new FormControl('')
    })
  }
  Tarjeta= {
    nombre:"",
    numero:"",
    mes:"",
    anio:"",
    cvv:""

  }
  http:HttpClient;
  tarjeta: FormGroup;
  constructor(ht:HttpClient) {
    this.tarjeta = this.createFormGroup();
    console.log("prueba");
     this.http = ht;
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.tarjeta.reset();
  }
  onSavedForm(){
    console.log('saved');
  }
  
  validacionPago(){
   var body = {"numero":this.Tarjeta.numero, "cvv":this.Tarjeta.cvv, "nombre":this.Tarjeta.nombre, "fecha":this.Tarjeta.anio+this.Tarjeta.mes};
   console.log(body);
   const headers = { 'Authorization': 'No Auth'}
     console.log('envío a validacion de tarjeta..');
     this.http.post('http://localhost:8080/',
      body ,
     { headers, responseType: 'text' }).subscribe(respuesta => console.log(respuesta))
  }


}
