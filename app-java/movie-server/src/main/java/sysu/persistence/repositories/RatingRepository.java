package sysu.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sysu.persistence.models.Rating;

/**
 * Created by Shower on 2017/4/20 0020.
 */
public interface RatingRepository extends JpaRepository<Rating, Long> {
}
