import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUserRetrievalModel } from '../models/user-retrieval.model';

@Injectable({
  providedIn: 'root',
})
export class UserResourceService {
  public constructor(private readonly _http: HttpClient) { }

  public async singleUser(userId: number): Promise<IUserRetrievalModel> {
    try {
      const response = await this._http
        .get<IUserRetrievalModel>(`${environment.serverApiUrl}users/${userId}`)
        .toPromise();
      return response;
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }


}
