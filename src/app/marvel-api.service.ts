import { Injectable } from '@angular/core';
import {md5} from './md5';
/*@Injectable({
  prvidedIn: 'root',
})*/
export class MarvelApiService {
  PUBLIC_KEY = '2bb427ac9a7fdeee253bbf6d1c06caba';
  PRIVATE_KEY = '2bb427ac9a7fdeee253bbf6d1c06caba';
  HASH = '';
  URL_API = 'https://gateway.marvel.com/v1/public/characters?apikey=';
  let currentTimeInMilliseconds:number = Date.now()
  let HASH = md5(currentTimeInMilliseconds+""+)
  constructor() {}
}
