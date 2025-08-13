export default function ReviewsSection({ reviews }) {
  return (
    <div className="reviews-section">
      <h3>Customer Reviews</h3>
      {reviews.map(review => (
        <div key={review.id} className="review">
          <div className="review-header">
            <span className="review-author">{review.author}</span>
            <div className="review-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
          <p className="review-text">{review.text}</p>
          <span className="review-date">{review.date}</span>
        </div>
      ))}
    </div>
  );
}