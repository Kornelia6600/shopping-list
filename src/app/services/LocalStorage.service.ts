import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: string): void {
    //window.localStorage.setItem(key, JSON.stringify(value));
    window.localStorage.setItem(key, value);
  }

  getItem(key: string): string |null {
    const value = window.localStorage.getItem(key);
    //return JSON.parse(value ?? 'null');
    return value;
  }
}
