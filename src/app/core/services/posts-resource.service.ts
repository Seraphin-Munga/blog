import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPostRetrievalModel } from '../models/post-retrieval.model';

@Injectable({
  providedIn: 'root',
})
export class PostsResourceService {
  public constructor(private readonly _http: HttpClient) { }

  public async get(): Promise<Array<IPostRetrievalModel>> {
    try {
      const response = await this._http
        .get<Array<IPostRetrievalModel>>(`${environment.serverApiUrl}posts`)
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

  public async signlePost(postId: number): Promise<IPostRetrievalModel> {
    try {
      const response = await this._http
        .get<IPostRetrievalModel>(`${environment.serverApiUrl}posts/${postId}`)
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
