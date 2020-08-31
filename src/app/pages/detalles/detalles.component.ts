import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detalles: any = '';
  a: any = '';
  constructor(private route: ActivatedRoute, public ps:ProductosService) { 
    route.params.subscribe( data => {
      ps.detalles(data['id'])
      .subscribe( res =>{
        this.a = Object.values(res);
        this.detalles = Object.values(this.a[2]);
       
       // console.log(this.detalles);
      });
  });
}

  ngOnInit(): void {
  }

}
