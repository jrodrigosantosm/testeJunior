import { Component } from '@angular/core';
import { ApiService } from './ApiCliente.service';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  public clientes: any[] = [];

  constructor(
    private apiService: ApiService,


  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  adicionarCliente() {
    console.log('cliente')
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
