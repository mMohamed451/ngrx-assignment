import { Article, FAVORITE_ARTICLES } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ArticleState } from 'src/app/reducers/app.states';
import * as articleReducer from '../../reducers/article.reducer';
import * as fromActions from '../../actions/article.actions';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articles$!: Observable<Article[]>;

  constructor(private store: Store<ArticleState>) {
    this.articles$ = store.select(articleReducer.getArticles);
   }

  showJavaArticles() {
    this.store.dispatch(fromActions.JavaArticlesAction());
  }

  showAngularArticles() {
    this.store.dispatch(fromActions.AngularArticleAction());
  }

  showFavoriteArticles() {
    this.store.dispatch(fromActions.FavoriteArticlesAction({ payload: FAVORITE_ARTICLES }));
  }
}
