import Article from './model/article.model';
import data from './seed';

export default class ArticleData {
  getData(): Article[] {
    const articles: Article[] = [];
    for (let i = 0; i < data.data.length; i++) {
      const currentArticle = new Article(
        data.data[i].title,
        data.data[i].description,
        data.data[i].author,
        data.data[i].imageUrl
      );

      articles[i] = currentArticle;
    }

    return articles;
  }
}
