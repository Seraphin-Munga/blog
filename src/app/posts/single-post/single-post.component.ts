import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPostRetrievalModel } from 'src/app/core/models/post-retrieval.model';
import { IUserRetrievalModel } from 'src/app/core/models/user-retrieval.model';
import { UserResourceService } from 'src/app/core/services/user-resource.service';
import { formatDistance } from 'date-fns';
import { CommentsService } from 'src/app/core/services/comments.service';
import { ICommentRetrievalModel } from 'src/app/core/models/comment-retrieval.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public post!: IPostRetrievalModel;
  public user!: IUserRetrievalModel
  public comments: Array<ICommentRetrievalModel> = [];

  public likes = 0;
  public dislikes = 0;
  public time = formatDistance(new Date(), new Date());

  public like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  public dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _userResourceService: UserResourceService,
    private readonly _commentsService: CommentsService
  ) { }

  public async ngOnInit(): Promise<void> {

    this._activatedRoute.data.
      subscribe(
        data => this.post = data["post"]
      )
    this.user = await this.getSignleUser();
    this.comments = await this.getCommnetsByPost();


    console.log(this.user)
  }


  public async getSignleUser(): Promise<IUserRetrievalModel> {
    return this._userResourceService.singleUser(this.post.userId)
  }

  public async getCommnetsByPost(): Promise<Array<ICommentRetrievalModel>> {

    return this._commentsService.commentsByPost(this.post.id)
  }

}
