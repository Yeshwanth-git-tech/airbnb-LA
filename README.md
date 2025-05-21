# airbnb-LA

**Airbnb LA Data Pipeline & Visualization Pipeline Project**

This project builds a complete data pipeline to process, clean, analyze, and visualize Airbnb listings in Los Angeles.  
The flow starts from MongoDB preprocessing → exporting cleaned CSV → uploading to Google Cloud Storage → BigQuery processing → Google Looker Studio visualization.

---

<img width="862" alt="Screenshot 2025-05-21 at 12 47 45 PM" src="https://github.com/user-attachments/assets/5b94b605-9cbd-43e1-9481-7a01a04c16f2" />


## 🛠️ Workflow Summary

1. ✅ Clean raw Airbnb data inside **MongoDB**
2. ✅ Export cleaned data as **CSV**
3. ✅ Upload CSV to **Google Cloud Storage**
4. ✅ Load data into **BigQuery**
5. ✅ Run **SQL aggregation queries** to create summary tables
6. ✅ Visualize insights using **Google Looker Studio**

---

## 📁 Project Folder Structure & Description

This repository contains the following key folders and files:

- `/README.md`: Project overview, documentation, and explanation of the workflow.
- `/mongoDB_preprocessing/`: Contains MongoDB scripts and guides for cleaning the raw Airbnb data. Includes:
  - `mongodb_steps.md`: Markdown guide with step-by-step instructions for cleaning data in MongoDB.
  - `mongodb_cleaning_script.js`: JavaScript (Mongo shell) script used to drop unnecessary columns, impute missing values, and map property types.
  - `mongodb_export_cleaned.md`: Instructions for exporting the cleaned MongoDB collection to CSV.
- `/gcs_bigquery_pipeline/`: Contains the steps and scripts for the Google Cloud & BigQuery part of the pipeline. Includes:
  - `gcs_bigquery_steps.md`: Guide to creating a Google Cloud Storage bucket, uploading the CSV file, and loading it into BigQuery.
  - `create_summary_tables.sql`: SQL queries to generate aggregated summary tables from the cleaned dataset in BigQuery.
- `/visualizations/`: Contains the final visualizations exported from Google Looker Studio.
  - `Airbnb-LA.pdf`: PDF file containing all the charts and visuals from the analysis.

---

## 📈 Visualizations Covered

👉 Total listings per room type  
👉 Average price, rating, and availability per room type  
👉 Listings by neighbourhood group  
👉 Listings by neighbourhood + room type  
👉 Beds distribution in City of LA  

(See `/visualizations/Airbnb-LA.pdf` for detailed charts)

---

## 🛠️ Tools Used

- MongoDB
- Google Cloud Storage
- BigQuery
- Google Looker Studio
- JavaScript (Mongo Shell)
- SQL
