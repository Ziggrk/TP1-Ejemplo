import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/food-trucks';
  }

}
