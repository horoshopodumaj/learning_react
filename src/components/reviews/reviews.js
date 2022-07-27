import Review from './review';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;