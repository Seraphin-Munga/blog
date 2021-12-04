import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { LayoutModule } from '../layouts/layout.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from '../shared/shared.module';
import { SinglePostComponent } from './single-post/single-post.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';


@NgModule({
  declarations: [PostsComponent, SinglePostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    LayoutModule,
    SharedModule,
    NzGridModule,
    NzTableModule,
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzCommentModule
  ]
})
export class PostModule { }
