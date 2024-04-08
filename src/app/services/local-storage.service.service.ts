import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//SERVICIO PARA LOCAL STORAGE

export class LocalStorageServiceService {

  constructor() { }

  //METODOS EN LOCAL STORAGE

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  getAllData(): any[] {
    const data: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = localStorage.getItem(key);
        if (value !== null) {
          data.push({ value: JSON.parse(value) });
        }
      }
    }
    return data;
  }
}
