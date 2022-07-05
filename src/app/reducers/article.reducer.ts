import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ArticleState } from "./app.states";
import * as fromActions from '../actions/article.actions';
import { ANGULAR_ARTICLES, JAVA_ARTICLES } from "../models/article";


export const initialState: ArticleState = { articles: [] };

const _articleReducer = createReducer(
  initialState,
  on(fromActions.JavaArticlesAction, (state) => { return { articles: JAVA_ARTICLES } }),
  on(fromActions.AngularArticleAction, (state) => { return { articles: ANGULAR_ARTICLES } }),
  on(fromActions.FavoriteArticlesAction, (state, {payload}) => {return {articles: payload};})
)

export function articleReducer(state: any, action: Action) {
  return _articleReducer(state, action);
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
)
