#  Google Cloud Storage & BigQuery Pipeline Setup

This file documents the steps taken to upload the cleaned Airbnb dataset to Google Cloud Storage (GCS), create a BigQuery dataset and table, and perform SQL queries for analysis.

---

## Uploading Cleaned CSV to Google Cloud Storage (GCS)

1. Log into Google Cloud Console.
2. Go to **Cloud Storage → Buckets**.
3. Click **"Create bucket"** and fill:
   - Name: `airbnb_cleaned_data_bucket`
   - Location: `us-central1` (or your region)
   - Storage class: `Standard`
4. Once the bucket is created, click **Upload files**.
5. Select `cleaned_airbnb_data.csv` from your VM or local system.
6. Verify upload completes successfully.

The cleaned CSV is now stored in GCS.

---

## Create BigQuery Dataset

1. Navigate to **BigQuery → Create dataset**.
2. Fill:
   - Dataset ID: `airbnb_dataset`
   - Location: `us-central1`
   - Leave encryption default.
3. Click **Create dataset**.

✅ Dataset `airbnb_dataset` is created.

---

## 3️⃣ Create BigQuery Table from CSV

1. Inside BigQuery UI → select `airbnb_dataset`.
2. Click **"Create Table"**.
3. In **Source**, choose:
   - **Create table from:** `Google Cloud Storage`
   - **File path:** `gs://airbnb_cleaned_data_bucket/cleaned_airbnb_data.csv`
   - **File format:** `CSV`
4. Under **Destination**, fill:
   - Table name: `listings_cleaned`
5. Under **Schema**, choose:
   - **"Auto detect"**  (or upload schema manually if defined)
6. Click **Create Table**.

Table `airbnb_dataset.listings_cleaned` created.

---

##  Querying Data in BigQuery

Once table is created, you can start writing SQL queries like:

```sql
SELECT COUNT(*) FROM airbnb_dataset.listings_cleaned;