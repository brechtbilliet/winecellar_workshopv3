import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine } from '../types/Wine';
import { API_URL } from '../../configuration';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService {
  constructor(private httpClient: HttpClient) {
  }

  add(wine: Wine): Observable<Wine> {
    return this.httpClient
      .post(`${API_URL}/wines`, wine);
  }

  update(_id: string, wine: Wine): Observable<Wine> {
    return this.httpClient
      .put(`${API_URL}/wines/${_id}`, wine);
  }

  remove(wine: Wine): Observable<Wine> {
    return this.httpClient
      .delete(`${API_URL}/wines/${wine._id}`);
  }

  fetchAll(): Observable<Wine[]> {
    return this.httpClient
      .get(`${API_URL}/wines`);
  }

  fetchWine(id: string): Observable<Wine> {
    return this.httpClient.get(`${API_URL}/wines/${id}`);
  }

  setRate(wine: Wine, myRating: number): Observable<Wine> {
    const newWine = { ...wine, myRating };
    return this.httpClient
      .put(`${API_URL}/wines/${wine._id}`, newWine);
  }

  setStock(wine: Wine, inStock: number): Observable<Wine> {
    const newWine = { ...wine, inStock };
    return this.httpClient
      .put(`${API_URL}/wines/${wine._id}`, newWine);
  }
}
