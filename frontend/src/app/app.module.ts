import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './components/clientes/ApiCliente.service';
import { ModalClienteComponent } from './components/clientes/modal-cliente/modal-cliente.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { ModalProdutosComponent } from './components/produtos/modal-produtos/modal-produtos.component';
import { ModalPedidosComponent } from './components/pedidos/modal-pedidos/modal-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientesComponent,
    ProdutosComponent,
    PedidosComponent,
    ModalClienteComponent,
    ModalProdutosComponent,
    ModalPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ApiService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
