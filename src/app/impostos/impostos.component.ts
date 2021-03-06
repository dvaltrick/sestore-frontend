import { ConfigService } from './../config/config.service';
import { Imposto } from './../models/Imposto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impostos',
  templateUrl: './impostos.component.html',
  styleUrls: ['./impostos.component.css']
})

export class ImpostosComponent implements OnInit {
  editImposto:Imposto = new Imposto();
  listImpostos: Imposto[] = [];
  titulo:String = "";

  constructor(config:ConfigService) {
    this.titulo = ConfigService.SERVER_URL;
  }

  ngOnInit() {
  }

}
