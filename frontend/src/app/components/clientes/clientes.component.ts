import { Component } from '@angular/core';
import { ApiService } from './ApiCliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  todos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.apiService.getTodos().subscribe(
      (response) => {
        this.todos = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }
}
