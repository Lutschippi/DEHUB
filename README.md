<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=DEHUB&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=The%20Ultimate%20Data%20Engineering%20Hub&descAlignY=55&descSize=20" width="100%"/>

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/Lutschippi/DEHUB?style=for-the-badge&logo=github&color=FFD700&labelColor=0d1117)](https://github.com/Lutschippi/DEHUB/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Lutschippi/DEHUB?style=for-the-badge&logo=github&color=00ff88&labelColor=0d1117)](https://github.com/Lutschippi/DEHUB/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/Lutschippi/DEHUB?style=for-the-badge&logo=github&color=00d4ff&labelColor=0d1117)](https://github.com/Lutschippi/DEHUB/watchers)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge&labelColor=0d1117)](LICENSE)
[![Website](https://img.shields.io/badge/Website-dehub.engineer-00ff88?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0d1117)](http://dehub.engineer/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=git&labelColor=0d1117)](CONTRIBUTING.md)
[![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge&logo=handshake&labelColor=0d1117)](CONTRIBUTING.md)

<br/>

```bash
$ pip install dehub-knowledge --upgrade
✓ Loaded: 500+ Resources | 50+ Tools | 10+ Roadmaps | 1 Community
```

<br/>

> **The command center for data engineers worldwide.**
> From zero to petabyte-scale — everything you need to become an elite data engineer.

<br/>

[🚀 Get Started](#-getting-started) •
[📚 Resources](#-resources) •
[🗺️ Roadmap](#️-roadmap) •
[🛠️ Tools](#️-data-engineering-ecosystem) •
[🌐 Website](http://dehub.engineer/) •
[🤝 Contribute](#-contributing)

</div>

---

## 📡 Live Terminal Preview

```bash
╔══════════════════════════════════════════════════════════════╗
║  dehub@engineer:~$                                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  $ dbt run --select +orders_mart                             ║
║  [INFO] Running with dbt=1.8.0                               ║
║  [INFO] Found 47 models, 312 tests                          ║
║  ✓ Completed successfully                                    ║
║                                                              ║
║  $ spark-submit --master yarn pipeline.py                   ║
║  [INFO] SparkContext initialized                             ║
║  [INFO] Processing 2.4B records...                          ║
║  ✓ Job completed: 847s elapsed                              ║
║                                                              ║
║  $ kafka-topics --create --topic events --partitions 12     ║
║  ✓ Created topic "events"                                   ║
║                                                              ║
║  $ SELECT COUNT(*) FROM iceberg.prod.events;                ║
║  > 1,427,893,004 rows                                       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

- [🚀 Getting Started](#-getting-started)
- [🗺️ Roadmap](#️-roadmap)
- [📚 Books](#-books--must-read)
- [🎓 Courses & Bootcamps](#-courses--bootcamps)
- [🛠️ Data Engineering Ecosystem](#️-data-engineering-ecosystem)
- [💼 Projects & Portfolio](#-projects--portfolio)
- [🌐 Communities](#-communities)
- [🎙️ Podcasts](#️-podcasts)
- [📰 Newsletters](#-newsletters)
- [🎥 YouTube Channels](#-youtube-channels)
- [💼 Interview Preparation](#-interview-preparation)
- [📊 Data Engineering Salary](#-data-engineering-salary)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## 🚀 Getting Started

**New to Data Engineering?** Follow this path:

```
📍 You are here
    │
    ▼
[1] 📖 Read "Fundamentals of Data Engineering" (Joe Reis & Matt Housley)
    │
    ▼
[2] 🐍 Learn Python + SQL to professional level
    │
    ▼
[3] 🌊 Build your first pipeline (Batch → Streaming)
    │
    ▼
[4] ☁️  Get cloud certified (AWS/GCP/Azure)
    │
    ▼
[5] 🚀 Contribute to open-source, get hired
```

**Experienced Engineer?** Jump to:
- [Advanced Tools & Frameworks](#️-data-engineering-ecosystem)
- [System Design Resources](#system-design)
- [Senior-level Interview Prep](#-interview-preparation)
- [Open Source Projects](#-projects--portfolio)

---

## 🗺️ Roadmap

### Beginner Path (0–6 months)

| Skill | Resources | Status |
|-------|-----------|--------|
| Python for Data Engineering | [Python for Data Analysis](https://wesmckinney.com/book/) | 🔥 Essential |
| SQL Mastery | [Mode SQL Tutorial](https://mode.com/sql-tutorial/) | 🔥 Essential |
| Linux & Bash | [The Linux Command Line](https://linuxcommand.org/tlcl.php) | ✅ Required |
| Git & Version Control | [Pro Git Book](https://git-scm.com/book) | ✅ Required |
| Basic ETL Concepts | [Fundamentals of Data Engineering](https://www.amazon.com/Fundamentals-Data-Engineering-Robust-Systems/dp/1098108302/) | 🔥 Essential |
| Docker Basics | [Docker Official Docs](https://docs.docker.com/) | ✅ Required |

### Intermediate Path (6–18 months)

| Skill | Resources | Status |
|-------|-----------|--------|
| Apache Spark | [Spark: The Definitive Guide](https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/) | 🔥 Essential |
| Apache Airflow | [Astronomer Guides](https://www.astronomer.io/guides/) | 🔥 Essential |
| dbt (Data Build Tool) | [dbt Learn](https://courses.getdbt.com/) | 🔥 Essential |
| Cloud Platforms | AWS/GCP/Azure Certifications | ✅ Required |
| Data Modeling | [Kimball - Data Warehouse Toolkit](https://www.kimballgroup.com/) | 🔥 Essential |
| Kafka/Streaming | [Confluent Kafka Tutorials](https://developer.confluent.io/) | ⭐ Recommended |

### Advanced Path (18+ months)

| Skill | Resources | Status |
|-------|-----------|--------|
| Data Architecture | [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/) | 🔥 Essential |
| Apache Iceberg | [Apache Iceberg: The Definitive Guide](https://www.oreilly.com/library/view/apache-iceberg-the/9781098148614/) | 🔥 Essential |
| Real-Time Streaming | [Streaming Systems](https://www.amazon.com/Streaming-Systems-Where-Large-Scale-Processing/dp/1491983876) | ⭐ Recommended |
| Data Mesh | [Data Mesh (Zhamak Dehghani)](https://www.oreilly.com/library/view/data-mesh/9781492092384/) | ⭐ Recommended |
| ML Engineering | [Designing Machine Learning Systems](https://www.amazon.com/Designing-Machine-Learning-Systems-Production-Ready/dp/1098107969) | ⭐ Recommended |
| System Design | [ByteByteGo](https://bytebytego.com/) | ✅ Required |

### Expert Path

| Skill | Focus |
|-------|-------|
| Data Platform Architecture | Design multi-cloud, multi-region data platforms |
| Cost Optimization | FinOps for data, query optimization at scale |
| Team Leadership | Building and mentoring data engineering teams |
| Open Source Contribution | Build tooling the community relies on |

---

## 📚 Books — Must Read

### Top 3 Essential Books

| # | Book | Author | Level |
|---|------|--------|-------|
| 1 | [Fundamentals of Data Engineering](https://www.amazon.com/Fundamentals-Data-Engineering-Robust-Systems/dp/1098108302/) | Joe Reis & Matt Housley | All Levels |
| 2 | [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/) | Martin Kleppmann | Intermediate+ |
| 3 | [Designing Machine Learning Systems](https://www.amazon.com/Designing-Machine-Learning-Systems-Production-Ready/dp/1098107969) | Chip Huyen | Advanced |

### Complete Book List

<details>
<summary>View all 35+ books</summary>

#### Data Engineering Core
- [Fundamentals of Data Engineering](https://www.amazon.com/Fundamentals-Data-Engineering-Robust-Systems/dp/1098108302/)
- [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/)
- [Data Engineering Design Patterns](https://www.dedp.online/)
- [97 Things Every Data Engineer Should Know](https://www.amazon.com/Things-Every-Data-Engineer-Should/dp/1492062413)
- [Data Pipelines Pocket Reference](https://www.oreilly.com/library/view/data-pipelines-pocket/9781492087823/)

#### Apache Spark
- [Spark: The Definitive Guide](https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/)
- [Learning Spark, 2nd Edition](https://pages.databricks.com/rs/094-YMS-629/images/LearningSpark2.0.pdf) *(Free PDF)*
- [High Performance Spark](https://www.amazon.com/High-Performance-Spark-Practices-Optimizing/dp/1491943203)
- [Modern Data Engineering with Apache Spark](https://www.amazon.com/Modern-Engineering-Apache-Spark-Hands/dp/1484274512)

#### Streaming
- [Streaming Systems](https://www.amazon.com/Streaming-Systems-Where-Large-Scale-Processing/dp/1491983876)
- [Stream Processing with Apache Flink](https://www.oreilly.com/library/view/stream-processing-with/9781491974285/)

#### Cloud & Lakehouse
- [Data Engineering with AWS](https://www.oreilly.com/library/view/data-engineering-with/9781804614426/)
- [Delta Lake: The Definitive Guide](https://www.oreilly.com/library/view/delta-lake-the/9781098151935/)
- [Apache Iceberg The Definitive Guide](https://www.oreilly.com/library/view/apache-iceberg-the/9781098148614/)
- [Architecting an Apache Iceberg Lakehouse](https://www.manning.com/books/architecting-an-apache-iceberg-lakehouse)
- [Snowflake Data Engineering](https://www.manning.com/books/snowflake-data-engineering)

#### dbt & Transformation
- [Data Engineering with dbt](https://www.amazon.com/Data-Engineering-dbt-cloud-based-dependable-ebook/dp/B0C4LL19G7)
- [Unlocking dbt](https://www.amazon.com/Unlocking-dbt-Design-Transformations-Warehouse/dp/1484296990/)

#### Data Architecture
- [Data Mesh](https://www.oreilly.com/library/view/data-mesh/9781492092384/)
- [Deciphering Data Architectures](https://www.oreilly.com/library/view/deciphering-data-architectures/9781098150754/)
- [Data Management at Scale, 2nd Edition](https://www.oreilly.com/library/view/data-management-at/9781098138851/)
- [Data Governance: The Definitive Guide](https://www.oreilly.com/library/view/data-governance-the/9781492063483/)
- [Building Evolutionary Architectures, 2nd Edition](https://www.oreilly.com/library/view/building-evolutionary-architectures/9781492097532/)
- [Kimball - The Data Warehouse Toolkit](https://ia801609.us.archive.org/14/items/the-data-warehouse-toolkit-kimball/The%20Data%20Warehouse%20Toolkit%20-%20Kimball.pdf)

#### Machine Learning & AI
- [Designing Machine Learning Systems](https://www.amazon.com/Designing-Machine-Learning-Systems-Production-Ready/dp/1098107969)
- [Machine Learning System Design Interview](https://www.amazon.com/Machine-Learning-System-Design-Interview/dp/1736049127)
- [The Hundred-Page Machine Learning Book](https://www.amazon.com/Hundred-Page-Machine-Learning-Book/dp/199957950X)
- [Learn AI Data Engineering in a Month of Lunches](https://www.manning.com/books/learn-ai-data-engineering-in-a-month-of-lunches)

#### Analytics & Python
- [Pandas Cookbook, 3rd Edition](https://www.amazon.com/Pandas-Cookbook-Practical-scientific-exploratory/dp/1836205872)
- [Python for Data Analysis, 3E](https://wesmckinney.com/book/) *(Free Online)*
- [Trino: The Definitive Guide](https://trino.io/trino-the-definitive-guide.html)
- [Hadoop: The Definitive Guide](https://www.oreilly.com/library/view/hadoop-the-definitive/9781491901687/)

</details>

---

## 🎓 Courses & Bootcamps

### Free Bootcamps

| Name | Provider | Level | Duration |
|------|----------|-------|----------|
| [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | DataTalks.Club | Beginner | 9 weeks |
| [Beginner Data Engineering Bootcamp](https://learn.dataexpert.io/) | DataExpert.io | Beginner | 4 weeks |
| [Intermediate Bootcamp](https://learn.dataexpert.io/) | DataExpert.io | Intermediate | 6 weeks |
| [DE Fundamentals](https://www.databricks.com/resources/learn/training) | Databricks | All Levels | Self-paced |

### Premium Courses

| Name | Provider | Level |
|------|----------|-------|
| [Data Expert Courses](https://www.dataexpert.io/) | Zach Wilson | All Levels |
| [dbt Fundamentals](https://courses.getdbt.com/courses/fundamentals) | dbt Labs | Beginner |
| [Astronomer Certification](https://academy.astronomer.io/) | Astronomer | Intermediate |
| [Databricks Certified Associate](https://www.databricks.com/learn/certification) | Databricks | Intermediate |
| [Snowflake SnowPro Core](https://training.snowflake.com/certification) | Snowflake | Intermediate |
| [Google Cloud Professional Data Engineer](https://cloud.google.com/certification/data-engineer) | Google | Advanced |
| [AWS Data Analytics Specialty](https://aws.amazon.com/certification/certified-data-analytics-specialty/) | AWS | Advanced |

---

## 🛠️ Data Engineering Ecosystem

### Orchestration

| Tool | Stars | Description |
|------|-------|-------------|
| [Apache Airflow](https://airflow.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/airflow?style=flat-square&logo=github) | Industry-standard workflow orchestrator |
| [Dagster](https://www.dagster.io) | ![Stars](https://img.shields.io/github/stars/dagster-io/dagster?style=flat-square&logo=github) | Data-aware orchestration platform |
| [Prefect](https://www.prefect.io) | ![Stars](https://img.shields.io/github/stars/PrefectHQ/prefect?style=flat-square&logo=github) | Modern workflow automation |
| [Mage](https://www.mage.ai) | ![Stars](https://img.shields.io/github/stars/mage-ai/mage-ai?style=flat-square&logo=github) | Modern data pipeline tool |
| [Kestra](https://kestra.io/) | ![Stars](https://img.shields.io/github/stars/kestra-io/kestra?style=flat-square&logo=github) | Declarative orchestration |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | ![Stars](https://img.shields.io/github/stars/dagworks-inc/hamilton?style=flat-square&logo=github) | Function-based DAG framework |

### Data Lake / Lakehouse

| Tool | Stars | Description |
|------|-------|-------------|
| [Apache Iceberg](https://iceberg.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/iceberg?style=flat-square&logo=github) | Open table format for huge datasets |
| [Delta Lake](https://delta.io/) | ![Stars](https://img.shields.io/github/stars/delta-io/delta?style=flat-square&logo=github) | ACID transactions for big data |
| [Apache Hudi](https://hudi.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/hudi?style=flat-square&logo=github) | Incremental data processing |
| [Apache Polaris](https://polaris.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/polaris?style=flat-square&logo=github) | Open catalog for Apache Iceberg |
| [DuckLake](https://ducklake.select/) | - | SQL-native lakehouse |

### Data Warehouse

| Tool | Description |
|------|-------------|
| [Snowflake](https://www.snowflake.com/) | Cloud-native data warehouse |
| [Google BigQuery](https://cloud.google.com/bigquery) | Serverless data warehouse |
| [Databricks](https://www.databricks.com/) | Unified analytics platform |
| [Amazon Redshift](https://aws.amazon.com/redshift/) | AWS data warehouse |
| [Firebolt](https://www.firebolt.io/) | Ultra-fast cloud warehouse |
| [Databend](https://www.databend.com/) | Open-source cloud DW |
| [ClickHouse](https://clickhouse.com/) | Real-time analytics |

### Processing Engines

| Tool | Stars | Description |
|------|-------|-------------|
| [Apache Spark](https://spark.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/spark?style=flat-square&logo=github) | Unified analytics engine |
| [Apache Flink](https://flink.apache.org/) | ![Stars](https://img.shields.io/github/stars/apache/flink?style=flat-square&logo=github) | Stream & batch processing |
| [DuckDB](https://duckdb.org/) | ![Stars](https://img.shields.io/github/stars/duckdb/duckdb?style=flat-square&logo=github) | In-process analytical DB |
| [Trino](https://trino.io/) | ![Stars](https://img.shields.io/github/stars/trinodb/trino?style=flat-square&logo=github) | Distributed SQL query engine |
| [Polars](https://pola.rs/) | ![Stars](https://img.shields.io/github/stars/pola-rs/polars?style=flat-square&logo=github) | Fast DataFrame library |

### Transformation

| Tool | Stars | Description |
|------|-------|-------------|
| [dbt](https://www.getdbt.com/) | ![Stars](https://img.shields.io/github/stars/dbt-labs/dbt-core?style=flat-square&logo=github) | SQL-first transformation |
| [SQLMesh](https://sqlmesh.com/) | ![Stars](https://img.shields.io/github/stars/TobikoData/sqlmesh?style=flat-square&logo=github) | Next-gen dbt alternative |
| [Coalesce](https://coalesce.io/) | - | Cloud-native transformation |

### Data Quality

| Tool | Stars | Description |
|------|-------|-------------|
| [Great Expectations](https://www.greatexpectations.io) | ![Stars](https://img.shields.io/github/stars/great-expectations/great_expectations?style=flat-square&logo=github) | Data quality framework |
| [Soda](https://www.soda.io/) | ![Stars](https://img.shields.io/github/stars/sodadata/soda-core?style=flat-square&logo=github) | Data quality platform |
| [dbt tests](https://docs.getdbt.com/docs/build/data-tests) | - | Built-in dbt testing |
| [Metaplane](https://www.metaplane.dev/) | - | Data observability |
| [DQOps](https://dqops.com/) | ![Stars](https://img.shields.io/github/stars/dqops/dqo?style=flat-square&logo=github) | Automated data quality |

### Streaming & Messaging

| Tool | Description |
|------|-------------|
| [Apache Kafka](https://kafka.apache.org/) | Distributed event streaming |
| [Apache Pulsar](https://pulsar.apache.org/) | Cloud-native messaging |
| [Redpanda](https://redpanda.com/) | Kafka-compatible streaming |
| [Confluent](https://www.confluent.io/) | Managed Kafka platform |
| [AWS Kinesis](https://aws.amazon.com/kinesis/) | Real-time data streaming |

### Data Catalog & Governance

| Tool | Description |
|------|-------------|
| [Apache Atlas](https://atlas.apache.org/) | Data governance & metadata |
| [DataHub](https://datahubproject.io/) | Modern metadata platform |
| [OpenMetadata](https://open-metadata.org/) | Open-source data catalog |
| [Amundsen](https://www.amundsendata.io/) | Data discovery & metadata |

### Ingestion & Integration

| Tool | Description |
|------|-------------|
| [Airbyte](https://airbyte.com/) | Open-source data integration |
| [Fivetran](https://www.fivetran.com/) | Automated data movement |
| [Debezium](https://debezium.io/) | CDC (Change Data Capture) |
| [Apache NiFi](https://nifi.apache.org/) | Data flow automation |
| [dlt](https://dlthub.com/) | Python data load tool |

### Visualization

| Tool | Description |
|------|-------------|
| [Apache Superset](https://superset.apache.org/) | Open-source BI |
| [Metabase](https://www.metabase.com/) | Business intelligence |
| [Grafana](https://grafana.com/) | Observability & analytics |
| [Redash](https://redash.io/) | Query & visualization |

---

## 💼 Projects & Portfolio

Build these projects to demonstrate real-world data engineering skills:

### Beginner Projects

1. **[End-to-End NYC Taxi Data Pipeline](https://www.youtube.com/watch?v=WpQECq5Hx9g)**
   - Tools: Python, BigQuery, Looker Studio
   - Skills: ETL, cloud storage, BI visualization

2. **[Weather Data Pipeline](https://github.com/DataTalksClub/data-engineering-zoomcamp)**
   - Tools: Airflow, PostgreSQL, dbt
   - Skills: Orchestration, scheduling, transformation

3. **Extract YouTube Metadata**
   - [GitHub Project](https://github.com/Proggleb/youtube_data_engineering_project)
   - Tools: AWS Lambda, S3, Free Tier
   - Skills: Serverless, cloud storage, API ingestion

### Intermediate Projects

4. **[Real Estate Data Platform](https://www.ssp.sh/blog/data-engineering-project-in-twenty-minutes/)**
   - [GitHub](https://github.com/sspaeti-com/practical-data-engineering)
   - Tools: S3, Spark, Delta Lake, Dagster, Superset
   - Skills: Lakehouse, orchestration, visualization

5. **[Azure End-to-End Analytics Platform](https://www.youtube.com/watch?v=iQ41WqhHglk)**
   - Tools: ADF, ADLS, Databricks, Synapse, Power BI
   - Skills: Azure ecosystem, medallion architecture

6. **LLM Data Pipeline**
   - [Lecture](https://www.dataengineer.io/course/large-language-models-day-1-lecture)
   - Tools: OpenAI API, vector databases, Airflow
   - Skills: AI integration, vector search

### Advanced Projects

7. **Real-Time Streaming Analytics**
   - Tools: Kafka, Flink, Iceberg, Grafana
   - Skills: Event-driven architecture, stream processing

8. **SQL Query Engine with LLMs**
   - [Tutorial](https://www.dataengineer.io/course/large-language-models-day-2-lecture)
   - Tools: LangChain, LLMs, databases
   - Skills: AI-powered tooling

9. **Multi-Cloud Lakehouse**
   - Tools: Apache Iceberg, AWS + GCP, dbt, Airflow
   - Skills: Cloud-agnostic architecture

---

## 🌐 Communities

> Join these communities to learn, network, and grow as a data engineer.

### Discord Communities

| Community | Members | Focus |
|-----------|---------|-------|
| [DataExpert.io Discord](https://discord.gg/JGumAXncAK) | 10,000+ | Data Engineering |
| [AdalFlow](https://discord.com/invite/ezzszrRZvT) | - | AI/ML Engineering |
| [Chip Huyen MLOps](https://discord.gg/dzh728c5t3) | 10,000+ | ML Operations |

### Slack Communities

| Community | Focus |
|-----------|-------|
| [Data Talks Club](https://datatalks.club/slack) | Data Science & Engineering |
| [dbt Community](https://www.getdbt.com/community/join-the-community) | dbt, Analytics Engineering |
| [Great Expectations](https://greatexpectations.io/slack) | Data Quality |
| [Prefect](https://www.prefect.io/slack) | Workflow Orchestration |

### Online Communities

| Community | Platform | Focus |
|-----------|----------|-------|
| [Data Engineer Things](https://www.dataengineerthings.org/) | Newsletter/Community | Data Engineering |
| [r/dataengineering](https://reddit.com/r/dataengineering) | Reddit | Data Engineering |
| [r/apachespark](https://reddit.com/r/apachespark) | Reddit | Apache Spark |
| [LinkedIn DE Community](https://www.linkedin.com/groups/8828070/) | LinkedIn | Professional Networking |

---

## 🎙️ Podcasts

| Podcast | Host | Topics |
|---------|------|--------|
| [The Data Engineering Show](https://www.dataengineeringshow.com/) | Databand | DE tools & practices |
| [Data Engineering Podcast](https://www.dataengineeringpodcast.com/) | Tobias Macey | Open-source data tools |
| [DataTopics](https://www.datatopics.io/) | - | Data engineering trends |
| [DataWare](https://www.ascend.io/dataaware-podcast/) | Ascend.io | Data pipelines |
| [The Datastack Show](https://datastackshow.com/) | - | Modern data stack |
| [Analytics Power Hour](https://analyticshour.io/) | - | Analytics & data |
| [Drill to Detail](https://www.rittmananalytics.com/drilltodetail/) | Mark Rittman | Analytics engineering |

---

## 📰 Newsletters

| Newsletter | Author | Topics |
|------------|--------|--------|
| [DataEngineer.io Newsletter](https://blog.dataengineer.io/) | Zach Wilson | DE career & tech |
| [The Developing Dev](https://www.thedevving.com/) | Ryan Peterman | Engineering growth |
| [Data Engineering Weekly](https://www.dataengineeringweekly.com/) | Ananth Packkildurai | DE news |
| [Benn Stancil's Newsletter](https://benn.substack.com/) | Benn Stancil | Data strategy |
| [Ahead of the Trend](https://aheadofthetrend.substack.com/) | - | Data trends |
| [Seattle Data Guy](https://seattledataguy.substack.com/) | Ben Rogojan | DE tips |

---

## 🎥 YouTube Channels

| Channel | Focus | Subscribers |
|---------|-------|-------------|
| [Zach Wilson](https://www.youtube.com/@eczachly) | Data Engineering Career | 50,000+ |
| [Seattle Data Guy](https://www.youtube.com/@SeattleDataGuy) | DE Interviews & Tips | 50,000+ |
| [Andreas Kretz](https://www.youtube.com/@andreaskayy) | Data Engineering School | 50,000+ |
| [ByteByteGo](https://www.youtube.com/@ByteByteGo) | System Design | 1,000,000+ |
| [Alex The Analyst](https://www.youtube.com/@AlexTheAnalyst) | Data Analysis | 700,000+ |

---

## 💼 Interview Preparation

### Data Engineering Interview Topics

```
Technical Interview Topics:
├── SQL
│   ├── Window Functions (ROW_NUMBER, RANK, LAG, LEAD)
│   ├── CTEs and Recursive CTEs
│   ├── Query Optimization & EXPLAIN plans
│   └── Aggregations & Subqueries
├── Python
│   ├── PySpark DataFrames
│   ├── Pandas/Polars operations
│   ├── Generators & Iterators
│   └── OOP for data pipelines
├── System Design
│   ├── Design a data warehouse
│   ├── Design a real-time analytics system
│   ├── Design a CDC pipeline
│   └── Design a data lake
├── Data Modeling
│   ├── Star Schema vs Snowflake
│   ├── Slowly Changing Dimensions (SCD)
│   ├── Data Vault 2.0
│   └── Kimball vs Inmon
└── Infrastructure
    ├── Docker & Kubernetes
    ├── Cloud platforms (AWS/GCP/Azure)
    ├── CI/CD for data pipelines
    └── Monitoring & Alerting
```

### Interview Resources

- [Data Engineering Interview Questions](https://github.com/OBenner/data-engineering-interview-questions) — Comprehensive list
- [ByteByteGo System Design](https://bytebytego.com/) — System design prep
- [SQLZoo](https://sqlzoo.net/) — SQL practice
- [LeetCode Database Problems](https://leetcode.com/problemset/database/) — SQL challenges
- [Glassdoor DE Interview Reviews](https://www.glassdoor.com/) — Company-specific prep

### Resume Tips

- Quantify impact: "Reduced pipeline runtime by 67%" beats "improved pipeline"
- Include GitHub links to real projects
- Mention data volumes (TB, PB scale)
- List certifications (AWS, GCP, Databricks, dbt)

---

## 📊 Data Engineering Salary

| Level | YoE | USA Salary Range |
|-------|-----|-----------------|
| Junior DE | 0–2 | $80k–$120k |
| Mid-level DE | 2–5 | $120k–$170k |
| Senior DE | 5–8 | $160k–$220k |
| Staff DE | 8–12 | $200k–$280k |
| Principal DE | 12+ | $260k–$400k+ |

*Source: levels.fyi, LinkedIn Salary, Glassdoor (2024)*

---

## 🌟 Top Influencers to Follow

### LinkedIn

| Name | Profile | Followers |
|------|---------|-----------|
| Zach Wilson | [EcZachly](https://www.linkedin.com/in/eczachly/) | 100,000+ |
| Seattle Data Guy | [SeattleDataGuy](https://www.linkedin.com/in/benjaminrogojan/) | 50,000+ |
| Andreas Kretz | [Andreas Kretz](https://www.linkedin.com/in/andreas-kretz/) | 50,000+ |
| Lior Gavish | [Lior Gavish](https://www.linkedin.com/in/liorgavish/) | 30,000+ |

### Twitter/X

| Name | Handle | Followers |
|------|--------|-----------|
| ByteByteGo | [@alexxubyte](https://twitter.com/alexxubyte/) | 500,000+ |
| Dan Kornas | [@dankornas](https://www.twitter.com/dankornas) | 66,000+ |
| Zach Wilson | [@EcZachly](https://www.twitter.com/EcZachly) | 30,000+ |
| Seattle Data Guy | [@SeattleDataGuy](https://www.twitter.com/SeattleDataGuy) | 10,000+ |

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingResource`)
3. Commit your Changes (`git commit -m 'Add some AmazingResource'`)
4. Push to the Branch (`git push origin feature/AmazingResource`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 👥 Contributors

<a href="https://github.com/Lutschippi/DEHUB/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Lutschippi/DEHUB" />
</a>

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Lutschippi/DEHUB&type=Date)](https://star-history.com/#Lutschippi/DEHUB&Date)

---

<div align="center">

**Built with ❤️ for the Data Engineering Community**

[🌐 Website](http://dehub.engineer/) • [⭐ Star this repo](https://github.com/Lutschippi/DEHUB) • [🐛 Report Bug](https://github.com/Lutschippi/DEHUB/issues) • [💡 Request Feature](https://github.com/Lutschippi/DEHUB/issues)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

</div>
