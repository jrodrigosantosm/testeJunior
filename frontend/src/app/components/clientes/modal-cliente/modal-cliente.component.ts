import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrl: './modal-cliente.component.scss'
})
export class ModalClienteComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
