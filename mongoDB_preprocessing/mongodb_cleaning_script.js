// List Columns
print("Listing all columns in one document:");
printjson(Object.keys(db.listings.findOne()));

// Drop unnecessary columns
db.listings.updateMany({}, { $unset: {
  "_id": "",
  "id": "",
  "scrape_id": "",
  "listing_url": "",
  "picture_url": "",
  "host_url": "",
  "host_thumbnail_url": "",
  "host_picture_url": "",
  "host_neighbourhood": "",
  "host_verifications": "",
  "host_has_profile_pic": "",
  "host_identity_verified": "",
  "neighbourhood": "",
  "calendar_last_scraped": "",
  "calendar_updated": "",
  "license": "",
  "name": "",
  "description": "",
  "neighborhood_overview": "",
  "host_about": "",
  "bathrooms_text": "",
  "calculated_host_listings_count_entire_homes": "",
  "calculated_host_listings_count_private_rooms": "",
  "calculated_host_listings_count_shared_rooms": ""
}});

// Check missing values per column
const columns = [
  "price","bedrooms","bathrooms","beds","latitude","longitude",
  "property_type","room_type","host_response_time","host_response_rate",
  "host_acceptance_rate","host_is_superhost","host_listings_count","host_total_listings_count",
  "neighbourhood_cleansed","neighbourhood_group_cleansed","availability_30",
  "availability_60","availability_90","availability_365","number_of_reviews",
  "number_of_reviews_ltm","number_of_reviews_130d","number_of_reviews_ly",
  "estimated_occupancy_l365d","estimated_revenue_l365d","first_review","last_review",
  "review_scores_rating","review_scores_accuracy","review_scores_cleanliness",
  "review_scores_checkin","review_scores_communication","review_scores_location",
  "review_scores_value","instant_bookable","reviews_per_month"
];

print("\nMissing value counts:");
columns.forEach(field => {
  const count = db.listings.countDocuments({ [field]: null });
  print(`${field}: ${count} missing`);
});

//  Impute numeric columns: compute median and update nulls
function imputeMedian(field) {
  const total = db.listings.countDocuments({ [field]: { $ne: null } });
  const middle = Math.floor(total / 2);
  const medianDoc = db.listings.find({ [field]: { $ne: null } }).sort({ [field]: 1 }).skip(middle).limit(1).toArray();
  const median = medianDoc[0][field];
  print(`Median ${field}: ${median}`);
  db.listings.updateMany({ [field]: null }, { $set: { [field]: median } });
}

["price", "bedrooms", "bathrooms", "beds", "host_listings_count", "host_total_listings_count"].forEach(imputeMedian);

//  Map property_type → room_type
db.listings.find({}).forEach(doc => {
  let mappedRoomType = "";
  if (doc.property_type != null) {
    const prop = doc.property_type.toLowerCase();
    if (prop.includes("entire") || prop.includes("whole")) {
      mappedRoomType = "Entire home/apt";
    } else if (prop.includes("private room")) {
      mappedRoomType = "Private room";
    } else if (prop.includes("hotel") || prop.includes("motel")) {
      mappedRoomType = "Hotel room";
    } else if (prop.includes("shared room")) {
      mappedRoomType = "Shared room";
    } else {
      mappedRoomType = "Entire home/apt"; // fallback
    }
  } else {
    mappedRoomType = "Entire home/apt";
  }
  db.listings.updateOne({ _id: doc._id }, { $set: { room_type: mappedRoomType } });
});

//  Impute categorical fields
db.listings.updateMany({ host_is_superhost: null }, { $set: { host_is_superhost: "f" } });
db.listings.updateMany({ host_response_time: null }, { $set: { host_response_time: "unknown" } });
db.listings.updateMany({ host_response_rate: null }, { $set: { host_response_rate: "0%" } });
db.listings.updateMany({ host_acceptance_rate: null }, { $set: { host_acceptance_rate: "0%" } });

//  Verify missing values again
print("\nMissing value counts after imputation:");
columns.forEach(field => {
  const count = db.listings.countDocuments({ [field]: null });
  print(`${field}: ${count} missing`);
});

print("\n Cleaning completed!");