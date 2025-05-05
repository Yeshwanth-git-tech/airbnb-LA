# airbnb-LA
Airbnb LA Data Pipeline & Visualization Pipeline Project

This project builds a complete data pipeline to process, clean, analyze, and visualize Airbnb listings in Los Angeles.
The flow starts from MongoDB preprocessing → exporting cleaned CSV → uploading to Google Cloud Storage → BigQuery processing → Google Looker Studio visualization.


Project Folder Structure & Description

/
├── README.md                         ← This file: Project overview & documentation
├── mongoDB_preprocessing/            ← MongoDB data cleaning scripts & steps
│   ├── mongodb_steps.md              ← Step-by-step markdown guide for MongoDB cleaning process
│   ├── mongodb_cleaning_script.js    ← JavaScript (mongo shell) cleaning script
│   ├── mongodb_export_cleaned.md     ← Steps to export cleaned dataset as CSV
├── gcs_bigquery_pipeline/            ← Google Cloud & BigQuery scripts & steps
│   ├── gcs_bigquery_steps.md         ← Instructions to create GCS bucket, upload CSV, load into BigQuery
│   ├── create_summary_tables.sql     ← BigQuery SQL scripts to generate summary tables for visualization
├── visualizations/                   ← Final data visualizations
│   └── Airbnb-LA.pdf                 ← PDF exported from Google Looker Studio with all charts



Tools Used
	•	MongoDB
	•	Google Cloud Storage
	•	BigQuery
	•	Google Looker Studio
	•	JavaScript (Mongo Shell)
	•	SQL
