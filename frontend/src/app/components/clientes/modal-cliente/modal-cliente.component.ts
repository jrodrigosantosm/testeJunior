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

  public form = {
    nome: this.usuario.nome,
    email: this.usuario.email,
    telefone: this.usuario.telefone,
    endereco: this.usuario.endereco
  }

  adicionarUsuario() {
    // Verifica se os campos obrigatórios foram preenchidos
    if (this.usuario.nome && this.usuario.email && this.usuario.telefone && this.usuario.endereco) {
      this.form = {
        nome: this.usuario.nome,
        email: this.usuario.email,
        telefone: this.usuario.telefone,
        endereco: this.usuario.endereco
      }
      console.log(this.form)
    } else {
      // Caso algum campo obrigatório não tenha sido preenchido, podemos exibir uma mensagem de erro
      console.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

}
