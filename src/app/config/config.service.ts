import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public static SERVER_URL:String = "https://localhost:5001/api/";

  constructor() { }
}
