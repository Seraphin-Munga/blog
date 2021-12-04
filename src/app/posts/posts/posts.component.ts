import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPostRetrievalModel } from 'src/app/core/models/post-retrieval.model';
import { PostsResourceService } from 'src/app/core/services/posts-resource.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts: Array<IPostRetrievalModel> = [];

  public constructor(
    private readonly _postsResourceService: PostsResourceService,
    private readonly _router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    this.posts = await this.getPosts();
  }

  public async getPosts(): Promise<Array<IPostRetrievalModel>> {
    return this._postsResourceService.get();
  }

  public post(postId: number): void {
    this._router.navigate([`/post/single-post/${postId}`]);
  }
}
