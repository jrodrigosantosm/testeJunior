import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss']
})
export class ModalClienteComponent {
  selectedCategoria: string = '';
  mostrar: boolean = false;
  usuario: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  adicionarUsuario(formValue: any): void {
    this.usuario.nome = formValue.nome;
    this.usuario.preco = formValue.preco;
    this.usuario.estoque = formValue.estoque;
    this.usuario.validade = formValue.validade;
    this.usuario.perecivel = formValue.perecivel === 'Sim';

    console.log('Novo usuario adicionado:', this.usuario);

    // Remova esta linha para evitar que a modal seja fechada automaticamente
    // this.dialogRef.close();
  }
}
