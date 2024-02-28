import { Component } from '@angular/core';
import { ApiService } from './ApiCliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  public clientes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.apiService.getTodos().subscribe(
      (response) => {
        this.clientes = response;
        console.log(this.clientes)
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }
}
