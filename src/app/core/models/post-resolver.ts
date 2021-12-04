import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { PostsResourceService } from '../services/posts-resource.service';
import { IPostRetrievalModel } from './post-retrieval.model';

@Injectable()
export class PostResolver implements Resolve<IPostRetrievalModel> {
    public constructor(
        private readonly _postsResourceService: PostsResourceService
    ) { }

    public async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<IPostRetrievalModel> {
        return await this._postsResourceService.signlePost(route.params['id']);
    }
}
