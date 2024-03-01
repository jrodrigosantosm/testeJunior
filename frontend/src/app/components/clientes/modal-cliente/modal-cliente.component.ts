import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../ApiCliente.service';

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
    public apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  public form = {
    nome: this.usuario.nome,
    email: this.usuario.email,
    telefone: this.usuario.telefone,
    endereco: this.usuario.endereco
  }

  adicionarUsuario() {
    if (this.usuario.nome && this.usuario.email && this.usuario.telefone && this.usuario.endereco) {
      this.form = {
        nome: this.usuario.nome,
        email: this.usuario.email,
        telefone: this.usuario.telefone,
        endereco: this.usuario.endereco
      };

      this.apiService.newCliente(this.form).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.error('Error fetching todos:', error);
        }
      );
      console.log(this.form)
    } else {
      // Caso algum campo obrigatório não tenha sido preenchido, podemos exibir uma mensagem de erro
      console.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

}
