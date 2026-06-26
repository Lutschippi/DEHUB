# Data Engineering Projects

> Hands-on projects to build your portfolio and demonstrate real-world skills.

## Beginner Projects (0–6 months)

### 1. NYC Taxi Data Pipeline
**Skills**: Python, BigQuery, Looker Studio, Cloud Storage
**Time**: 2–3 weeks

Build a complete ETL pipeline ingesting NYC Taxi trip data into BigQuery with visualization.

Resources:
- [Video Tutorial](https://www.youtube.com/watch?v=WpQECq5Hx9g) — Darshil Parmar
- Dataset: [NYC TLC Trip Record Data](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)

Architecture:
```
NYC TLC API → Python Ingest → GCS → BigQuery → Looker Studio Dashboard
```

### 2. Weather Data Pipeline
**Skills**: Airflow, PostgreSQL, dbt, Python
**Time**: 2–4 weeks

Ingest weather data from OpenWeatherMap API, transform with dbt, visualize trends.

Architecture:
```
OpenWeatherMap API → Airflow DAG → PostgreSQL → dbt models → Metabase
```

### 3. YouTube Analytics Pipeline
**Skills**: AWS Lambda, S3, Glue, Athena
**Time**: 2–3 weeks

- [GitHub Project](https://github.com/Proggleb/youtube_data_engineering_project)

Extract metadata from YouTube Data API, process serverlessly on AWS.

Architecture:
```
YouTube API → AWS Lambda → S3 → AWS Glue → Athena → QuickSight
```

### 4. Stock Market Data Pipeline
**Skills**: Kafka, Python, PostgreSQL, Grafana
**Time**: 3–4 weeks

Stream real-time stock prices with Kafka, store in PostgreSQL, monitor with Grafana.

Architecture:
```
Yahoo Finance API → Kafka Producer → Kafka → Kafka Consumer → PostgreSQL → Grafana
```

---

## Intermediate Projects (6–18 months)

### 5. Real Estate Data Platform
**Skills**: Spark, Delta Lake, Dagster, Apache Superset
**Time**: 4–6 weeks

- [GitHub](https://github.com/sspaeti-com/practical-data-engineering)
- [Full Tutorial](https://www.ssp.sh/blog/data-engineering-project-in-twenty-minutes/)

Full lakehouse implementation with web scraping, Spark processing, and BI.

Architecture:
```
Web Scraper → S3 → Spark → Delta Lake → Dagster → Superset
```

### 6. Azure End-to-End Analytics
**Skills**: Azure Data Factory, ADLS Gen2, Azure Databricks, Synapse, Power BI
**Time**: 4–6 weeks

- [Video Tutorial](https://www.youtube.com/watch?v=iQ41WqhHglk)

Enterprise-grade Azure data platform with medallion architecture.

Architecture:
```
On-prem SQL → ADF → ADLS Bronze → Databricks Silver/Gold → Synapse → Power BI
```

### 7. LLM Data Pipeline
**Skills**: OpenAI API, vector databases, LangChain, Airflow
**Time**: 3–5 weeks

Build pipelines that process and query documents using LLMs.

Resources:
- [Day 1 Lecture](https://www.dataengineer.io/course/large-language-models-day-1-lecture)
- [Day 1 Lab](https://www.dataengineer.io/course/large-language-models-day-1-lab)
- [Day 2 — SQL Query Engine](https://www.dataengineer.io/course/large-language-models-day-2-lecture)

Architecture:
```
Documents → Text Chunker → OpenAI Embeddings → Pinecone/Weaviate → LangChain RAG
```

### 8. Reddit Data Warehouse
**Skills**: Airflow, Celery, PostgreSQL, AWS S3, Glue, Athena, Redshift
**Time**: 4–6 weeks

- [GitHub](https://github.com/airscholar/RedditDataEngineering)

Complete end-to-end pipeline from Reddit API to AWS Redshift.

Architecture:
```
Reddit API → Airflow → PostgreSQL → S3 → Glue → Athena → Redshift → Metabase
```

---

## Advanced Projects (18+ months)

### 9. Real-Time Streaming Analytics Platform
**Skills**: Kafka, Apache Flink, Apache Iceberg, Grafana, Kubernetes
**Time**: 6–10 weeks

Build a production-grade streaming platform processing millions of events per second.

Architecture:
```
Event Sources → Kafka → Flink (stream processing) → Iceberg (lakehouse) → Trino → Grafana
```

### 10. Multi-Cloud Data Lakehouse
**Skills**: Apache Iceberg, AWS + GCP, dbt, Airflow, Polaris Catalog
**Time**: 8–12 weeks

Cloud-agnostic lakehouse that reads/writes across AWS S3 and GCP GCS.

Architecture:
```
Multiple Sources → Airbyte → Apache Iceberg (Polaris Catalog) → Spark/Trino → dbt → BI
```

### 11. Data Platform from Scratch
**Skills**: Kubernetes, Helm, Terraform, All major data tools
**Time**: 12–16 weeks

Build your own data platform with Kubernetes, including all supporting infrastructure.

Components:
- Infrastructure: Terraform + Kubernetes
- Ingestion: Airbyte
- Storage: MinIO (S3-compatible)
- Lakehouse: Apache Iceberg
- Processing: Apache Spark on K8s
- Transformation: dbt
- Orchestration: Apache Airflow
- Quality: Great Expectations
- Catalog: DataHub
- Visualization: Apache Superset
- Monitoring: Prometheus + Grafana

### 12. CDC Pipeline with Debezium
**Skills**: Debezium, Kafka, Flink, Iceberg
**Time**: 4–6 weeks

Capture every database change in real-time and propagate to the lakehouse.

Architecture:
```
PostgreSQL → Debezium (CDC) → Kafka → Flink (upsert) → Iceberg → Trino
```

---

## Project Checklist

For each project, ensure:
- [ ] Clear README with architecture diagram
- [ ] Infrastructure as Code (Terraform/CDK)
- [ ] Docker Compose for local development
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Data quality checks
- [ ] Monitoring and alerting
- [ ] Cost estimation
- [ ] Demo data or instructions to get data

## Portfolio Presentation Tips

1. **Architecture Diagrams**: Use [diagrams.net](https://diagrams.net/) or Mermaid
2. **README Quality**: Professional README with badges, screenshots, quickstart
3. **Performance Metrics**: Include real numbers (X records/sec, Y GB/hour)
4. **Problem Statement**: Explain why you built it, what problem it solves
5. **Lessons Learned**: Show what didn't work and how you fixed it
