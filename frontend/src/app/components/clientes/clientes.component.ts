import { Component, Inject } from '@angular/core';
import { ApiService } from './ApiCliente.service';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  public clientes: any[] = [];

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog


  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  adicionarCliente(): void {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      panelClass: 'custom-modal-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
