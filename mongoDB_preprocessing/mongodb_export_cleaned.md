# mongoexport, and the exported file all exist inside your VM’s filesystem.

mongoexport --db airbnb_db --collection listings \
  --type=csv \
  --fields "price,bedrooms,bathrooms,beds,latitude,longitude,property_type,room_type,host_response_time,host_response_rate,host_acceptance_rate,host_is_superhost,host_listings_count,host_total_listings_count,neighbourhood_cleansed,neighbourhood_group_cleansed,availability_30,availability_60,availability_90,availability_365,number_of_reviews,number_of_reviews_ltm,number_of_reviews_130d,number_of_reviews_ly,estimated_occupancy_l365d,estimated_revenue_l365d,first_review,last_review,review_scores_rating,review_scores_accuracy,review_scores_cleanliness,review_scores_checkin,review_scores_communication,review_scores_location,review_scores_value,instant_bookable,reviews_per_month" \
  --out cleaned_airbnb_data.csv