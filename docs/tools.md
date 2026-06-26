# Data Engineering Tools Reference

> A curated reference of production-grade data engineering tools organized by category.

## Orchestration

| Tool | License | Language | Stars | Best For |
|------|---------|----------|-------|---------|
| [Apache Airflow](https://airflow.apache.org/) | Apache 2.0 | Python | 37k+ | Complex DAGs, enterprise |
| [Dagster](https://dagster.io/) | Apache 2.0 | Python | 12k+ | Asset-centric, software-defined data |
| [Prefect](https://prefect.io/) | Apache 2.0 | Python | 17k+ | Modern, developer-friendly |
| [Mage](https://mage.ai/) | Apache 2.0 | Python | 8k+ | Fast development, notebooks |
| [Kestra](https://kestra.io/) | Apache 2.0 | Java | 10k+ | Declarative YAML, polyglot |
| [Temporal](https://temporal.io/) | MIT | Go | 12k+ | Durable execution, microservices |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | BSD | Python | 2k+ | Function-level lineage |

## Data Lakehouse

| Tool | Format | ACID | Time Travel | Stars |
|------|--------|------|-------------|-------|
| [Apache Iceberg](https://iceberg.apache.org/) | Open | Yes | Yes | 6k+ |
| [Delta Lake](https://delta.io/) | Proprietary | Yes | Yes | 8k+ |
| [Apache Hudi](https://hudi.apache.org/) | Open | Yes | Yes | 5k+ |
| [Apache Paimon](https://paimon.apache.org/) | Open | Yes | Yes | 2k+ |

## Processing

| Tool | Type | Language | Scale | Stars |
|------|------|----------|-------|-------|
| [Apache Spark](https://spark.apache.org/) | Batch+Stream | Python/Scala | PB | 40k+ |
| [Apache Flink](https://flink.apache.org/) | Stream+Batch | Java/Python | PB | 24k+ |
| [DuckDB](https://duckdb.org/) | Analytical | C++ | TB | 25k+ |
| [Polars](https://pola.rs/) | DataFrame | Rust | TB | 32k+ |
| [Trino](https://trino.io/) | Query Engine | Java | PB | 10k+ |
| [Apache Beam](https://beam.apache.org/) | Unified | Python/Java | PB | 8k+ |

## Transformation

| Tool | Language | Stars | Notes |
|------|----------|-------|-------|
| [dbt Core](https://github.com/dbt-labs/dbt-core) | SQL/Jinja | 10k+ | Industry standard |
| [SQLMesh](https://sqlmesh.com/) | SQL | 2k+ | dbt alternative |
| [Coalesce](https://coalesce.io/) | SQL | - | Cloud-native |
| [Dataform](https://dataform.co/) | SQL | - | Google acquisition |

## Ingestion

| Tool | Type | Stars | Notes |
|------|------|-------|-------|
| [Airbyte](https://airbyte.com/) | EL, 300+ connectors | 16k+ | Open source leader |
| [Fivetran](https://fivetran.com/) | EL, managed | - | Enterprise SaaS |
| [dlt](https://dlthub.com/) | Python SDK | 4k+ | Lightweight, Python-native |
| [Debezium](https://debezium.io/) | CDC | 11k+ | Postgres/MySQL CDC |
| [Apache Kafka Connect](https://kafka.apache.org/documentation/#connect) | Stream ingest | - | Kafka ecosystem |
| [Apache NiFi](https://nifi.apache.org/) | Flow-based | 5k+ | Visual pipelines |
| [Meltano](https://meltano.com/) | EL+T | 2k+ | Singer-based |

## Storage

| Tool | Type | Notes |
|------|------|-------|
| [AWS S3](https://aws.amazon.com/s3/) | Object | Industry standard |
| [Google Cloud Storage](https://cloud.google.com/storage) | Object | GCP native |
| [Azure ADLS Gen2](https://azure.microsoft.com/en-us/products/storage/data-lake-storage/) | Object | Azure native |
| [MinIO](https://min.io/) | Object, OSS | S3-compatible, on-prem |
| [Apache HDFS](https://hadoop.apache.org/) | Distributed FS | Legacy, on-prem |

## Data Warehouse

| Tool | Type | Stars | Notes |
|------|------|-------|-------|
| [Snowflake](https://snowflake.com/) | Cloud DW | - | Multi-cloud |
| [Google BigQuery](https://cloud.google.com/bigquery) | Serverless DW | - | Per-query pricing |
| [Amazon Redshift](https://aws.amazon.com/redshift/) | Cloud DW | - | AWS native |
| [Databricks](https://databricks.com/) | Lakehouse | - | Unified platform |
| [ClickHouse](https://clickhouse.com/) | OLAP | 38k+ | Fastest for analytics |
| [Firebolt](https://firebolt.io/) | Cloud DW | - | Sub-second queries |
| [Databend](https://databend.com/) | Cloud DW | 8k+ | Open source |
| [StarRocks](https://starrocks.io/) | OLAP | 9k+ | Real-time analytics |

## Data Quality

| Tool | Stars | Type | Notes |
|------|-------|------|-------|
| [Great Expectations](https://greatexpectations.io/) | 10k+ | Validation | Industry standard |
| [Soda Core](https://github.com/sodadata/soda-core) | 1k+ | Validation | YAML-based |
| [deequ](https://github.com/awslabs/deequ) | 3k+ | Validation | Spark-based, AWS |
| [DQOps](https://dqops.com/) | 1k+ | Monitoring | Continuous monitoring |
| [HEDDA.IO](https://hedda.io/) | - | Data lineage | - |
| [Gable](https://gable.ai/) | - | Shift-left DQ | Contract testing |
| [Streamdal](https://streamdal.com/) | 1k+ | Stream validation | Real-time |

## Data Catalog & Observability

| Tool | Stars | Type |
|------|-------|------|
| [DataHub](https://datahubproject.io/) | 10k+ | Open-source catalog |
| [Apache Atlas](https://atlas.apache.org/) | 2k+ | Governance/catalog |
| [OpenMetadata](https://open-metadata.org/) | 5k+ | Open-source platform |
| [Amundsen](https://www.amundsendata.io/) | 4k+ | Discovery & metadata |
| [Monte Carlo](https://montecarlodata.com/) | - | Observability SaaS |
| [Atlan](https://atlan.com/) | - | Modern catalog |

## Streaming / Messaging

| Tool | Stars | Notes |
|------|-------|-------|
| [Apache Kafka](https://kafka.apache.org/) | 29k+ | Distributed event streaming |
| [Apache Pulsar](https://pulsar.apache.org/) | 14k+ | Cloud-native messaging |
| [Redpanda](https://redpanda.com/) | 10k+ | Kafka-compatible, faster |
| [AWS Kinesis](https://aws.amazon.com/kinesis/) | - | Managed streaming |
| [RabbitMQ](https://rabbitmq.com/) | 12k+ | Message broker |
| [NATS](https://nats.io/) | 16k+ | High-performance |

## Visualization & BI

| Tool | Stars | License |
|------|-------|---------|
| [Apache Superset](https://superset.apache.org/) | 63k+ | Apache 2.0 |
| [Metabase](https://metabase.com/) | 40k+ | AGPL |
| [Grafana](https://grafana.com/) | 64k+ | AGPL |
| [Redash](https://redash.io/) | 26k+ | BSD |
| [Evidence](https://evidence.dev/) | 4k+ | MIT |
| [Rill](https://rilldata.com/) | 5k+ | Apache 2.0 |
| [Lightdash](https://lightdash.com/) | 4k+ | MIT |

## Feature Store

| Tool | Stars | Notes |
|------|-------|-------|
| [Feast](https://feast.dev/) | 5k+ | Open-source |
| [Tecton](https://tecton.ai/) | - | Enterprise SaaS |
| [Hopsworks](https://hopsworks.ai/) | 1k+ | Open-source platform |

## Infrastructure & DevOps for Data

| Tool | Stars | Notes |
|------|-------|-------|
| [Terraform](https://terraform.io/) | 44k+ | Infrastructure as Code |
| [Kubernetes](https://kubernetes.io/) | 112k+ | Container orchestration |
| [Helm](https://helm.sh/) | 27k+ | K8s package manager |
| [Pulumi](https://pulumi.com/) | 21k+ | Modern IaC |
| [AWS CDK](https://aws.amazon.com/cdk/) | 11k+ | Cloud Development Kit |
