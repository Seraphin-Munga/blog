import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from '../core/models/post-resolver';
import { SiteLayoutComponent } from '../layouts/site-layout/site-layout.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      { path: "posts", component: PostsComponent },
      {
        path: "single-post/:id",
        component: SinglePostComponent,
        resolve: {
          post: PostResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
