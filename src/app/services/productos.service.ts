import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  detalles (id: string){
    return this.http.get(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&id=${id}`)
  }

  cargarProdCate (category: string){
    return this.http.get(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&category=${category}`)
  }


  cargarProductos(){
    return this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25')
    .subscribe( (res: Producto[]) => {
      this.productos = Object.values(res);
      console.log(this.productos[2]);

    })
  }
}
