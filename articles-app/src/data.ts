import Article from './model/article.model';
import data from './seed';

export default class ArticleData {
  getData(): Article[] {
    const articles: Article[] = [];

    for (let i = 0; i < data.length; i++) {
      const currentArticle = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );

      articles[i] = currentArticle;
    }

    return articles;
  }
}
