package esplai.sheet03.repository;

import esplai.sheet03.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArticleRepository extends JpaRepository<Article, Long> {
}
