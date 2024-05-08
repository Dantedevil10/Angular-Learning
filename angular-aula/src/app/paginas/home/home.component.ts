import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tuasvistas = ['tifoda','amerda','kgay','naumligu','naum C I','fui']

  constructor(private http: HttpClient){

  }
  listaHeros:any = null
  getHero(){

    this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe({
      next:(data:any)=>{console.log(data)
        this.listaHeros = data},
      error:(error:any)=>{console.log(error)}
    })
  
  }

}
