# MongoDB Data Preprocessing (NoSQL)

### ✅ Why MongoDB?

We used MongoDB because:
- The raw dataset was **semi-structured JSON** with nested fields
- MongoDB handles **documents (JSON-like)** efficiently
- Many irrelevant columns were dropped inside MongoDB → reduced file size BEFORE exporting
- Easier schema flexibility for large (70 columns) dataset without strict relational schema

Even though final output was a structured CSV → MongoDB allowed **exploratory, schema-less preprocessing**.

---

## 🧑‍💻 **MongoDB Commands:**

### Install MongoDB & Tools
```bash
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
mongo --version
sudo apt install mongo-tools