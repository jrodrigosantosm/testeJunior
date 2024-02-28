import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getTodos(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}cliente`);
    }

    // Exemplo de método para fazer uma requisição POST para a API
    createTodo(todo: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/todos`, todo);
    }

    // Outros métodos para PUT, DELETE, etc. podem ser implementados da mesma forma
}
