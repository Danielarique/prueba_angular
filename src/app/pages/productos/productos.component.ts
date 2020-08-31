import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { TituloPipe } from 'src/app/pipes/titulo.pipe';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
  
})


export class ProductosComponent implements OnInit {

  constructor(public ps: ProductosService) { 
  //  console.log('Estoy en productos component');
  }
  
  ngOnInit(): void {
  }

}

