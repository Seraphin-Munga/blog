import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICommentRetrievalModel } from '../models/comment-retrieval.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public constructor(private readonly _http: HttpClient) { }

  public async commentsByPost(postId: number): Promise<Array<ICommentRetrievalModel>> {
    try {
      const response = await this._http
        .get<Array<ICommentRetrievalModel>>(`${environment.serverApiUrl}comments?postId=${postId}`)
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
