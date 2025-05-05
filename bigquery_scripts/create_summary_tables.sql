-- Feeds: Room Type → Total Listings (Bar Chart + Pie Chart in Looker Studio)
CREATE OR REPLACE TABLE airbnb_dataset.summary_room_type_count AS
SELECT 
  room_type, 
  COUNT(*) AS total_listings
FROM airbnb_dataset.listings_cleaned
GROUP BY room_type;


-- Feeds: Room Type → Avg Price, Avg Rating, Avg Availability (Bar Charts)
CREATE OR REPLACE TABLE airbnb_dataset.summary_by_room_type AS
SELECT 
  room_type,
  COUNT(*) AS total_listings,
  ROUND(AVG(price_num), 2) AS avg_price,
  ROUND(AVG(review_scores_rating), 2) AS avg_rating,
  ROUND(AVG(availability_365), 2) AS avg_availability
FROM airbnb_dataset.listings_cleaned
GROUP BY room_type;


--  Feeds: Neighbourhood Group → Total Listings, Avg Price, Avg Rating, Avg Availability (Pie + Bar Charts)
CREATE OR REPLACE TABLE airbnb_dataset.summary_by_neighbourhood_group AS
SELECT 
  neighbourhood_group_cleansed AS neighbourhood_group,
  COUNT(*) AS total_listings,
  ROUND(AVG(price_num), 2) AS avg_price,
  ROUND(AVG(review_scores_rating), 2) AS avg_rating,
  ROUND(AVG(availability_365), 2) AS avg_availability
FROM airbnb_dataset.listings_cleaned
GROUP BY neighbourhood_group;


-- Feeds: Neighbourhood Group + Room Type → Listing Count + Avg Price (Grouped Bar Chart)
CREATE OR REPLACE TABLE airbnb_dataset.summary_by_neighbourhood_group_roomtype AS
SELECT
  neighbourhood_group_cleansed AS neighbourhood_group,
  room_type,
  COUNT(*) AS total_listings,
  ROUND(AVG(price_num), 2) AS avg_price,
  ROUND(AVG(review_scores_rating), 2) AS avg_rating,
  ROUND(AVG(availability_365), 2) AS avg_availability
FROM airbnb_dataset.listings_cleaned
GROUP BY neighbourhood_group_cleansed, room_type
ORDER BY neighbourhood_group_cleansed, room_type;


-- Feeds: City of Los Angeles → Beds Distribution by Room Type (Histogram/Bar Chart)
CREATE OR REPLACE TABLE airbnb_dataset.city_la_beds_by_roomtypes AS
SELECT
  room_type,
  beds_num,
  COUNT(*) AS total_listings
FROM airbnb_dataset.listings_cleaned
WHERE neighbourhood_group_cleansed = 'City of Los Angeles'
  AND beds_num IS NOT NULL
  AND beds_num != 0
GROUP BY room_type, beds_num
ORDER BY room_type, beds_num;