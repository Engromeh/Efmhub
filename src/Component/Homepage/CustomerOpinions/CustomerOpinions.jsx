
const reviews = [
    { name: "hedra", opinion: "Good Company", rating: 3 },
    { name: "hedra", opinion: "Good Company", rating: 3 },
    { name: "hedra", opinion: "Good Company", rating: 3 }
];

const CustomerOpinions = () => {
    return (
        <>

        <div className="CustomerOpinions-section">
            <h2>Customer opinions</h2>
            <div className="CustomerOpinions-container">
                {reviews.map((review, index) => (
                    <div key={index} className="CustomerOpinions-card">
                        <h3>{review.name}</h3>
                        <p>{review.opinion}</p>
                        <div className="CustomerOpinions-stars">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <span key={starIndex} className={starIndex < review.rating ? "star filled" : "star"}>★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </>
    );
};

export default CustomerOpinions;
