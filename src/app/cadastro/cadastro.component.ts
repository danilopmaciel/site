import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string="";

  cadastrar(){
    console.log("solicitado aaeaeaeae");
  }
  constructor() { }


  ngOnInit() {
  }

}
