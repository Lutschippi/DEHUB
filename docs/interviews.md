# Data Engineering Interview Guide

> Comprehensive guide to passing data engineering interviews at any level.

## Interview Process Overview

Most data engineering interviews follow this structure:

```
1. Recruiter Screen (30 min)
   └── Experience, motivation, salary expectations

2. Technical Phone Screen (45–60 min)
   └── SQL, Python, basic DE concepts

3. Take-Home Assignment (4–8 hours)
   └── Build a small pipeline or solve a DE problem

4. Technical Loop (3–5 rounds)
   ├── SQL & Python coding
   ├── System design
   ├── Architecture & past experience
   └── Culture / behavioral

5. Offer Stage
```

## SQL Interview Questions

### Window Functions
```sql
-- Top 3 products by sales per category
SELECT *
FROM (
  SELECT 
    category,
    product_name,
    total_sales,
    ROW_NUMBER() OVER (PARTITION BY category ORDER BY total_sales DESC) as rn
  FROM sales_summary
) ranked
WHERE rn <= 3;
```

### CTEs and Recursive CTEs
```sql
-- Employee hierarchy
WITH RECURSIVE org_chart AS (
  -- Base case: top-level employees
  SELECT id, name, manager_id, 0 AS level
  FROM employees
  WHERE manager_id IS NULL
  
  UNION ALL
  
  -- Recursive case
  SELECT e.id, e.name, e.manager_id, oc.level + 1
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;
```

### Running Totals & Moving Averages
```sql
SELECT 
  date,
  revenue,
  SUM(revenue) OVER (ORDER BY date) as running_total,
  AVG(revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_7day_avg
FROM daily_revenue;
```

## Python Interview Questions

### Process Large Files
```python
# Efficiently process a large CSV without loading into memory
import csv
from collections import defaultdict

def process_large_file(filepath: str) -> dict:
    category_totals = defaultdict(float)
    
    with open(filepath, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            category_totals[row['category']] += float(row['amount'])
    
    return dict(category_totals)
```

### PySpark Pattern
```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, window

spark = SparkSession.builder.appName("Interview").getOrCreate()

# Read data
df = spark.read.parquet("s3://bucket/events/")

# Aggregate with window function
result = (df
    .withWatermark("event_time", "10 minutes")
    .groupBy(
        window(col("event_time"), "1 hour"),
        col("user_id")
    )
    .agg(sum("amount").alias("total_amount"))
)
```

## System Design Questions

### Design a Data Warehouse

**Typical prompt**: "Design a data warehouse for an e-commerce company processing 10M orders/day"

**Key areas to cover**:
1. **Requirements clarification**: Read vs write patterns? Latency SLAs? Historical data?
2. **High-level architecture**: Medallion architecture (Bronze/Silver/Gold)
3. **Ingestion**: Batch (Airbyte/Fivetran) vs streaming (Kafka + Flink)
4. **Storage**: Which warehouse? (BigQuery/Snowflake/Redshift) + why
5. **Transformation**: dbt models, star schema design
6. **Serving**: BI tool, APIs for downstream
7. **Reliability**: Idempotency, data quality checks, SLAs
8. **Cost optimization**: Partitioning, clustering, caching

### Design a Real-Time Analytics System

**Typical prompt**: "Design a system to show real-time dashboard metrics updated every 5 seconds"

```
Events → Kafka → Flink (aggregation) → Redis (hot cache) → API → Dashboard
                                     ↓
                               Iceberg (cold storage)
```

Key decisions:
- Kafka for durability and replay
- Flink for stateful stream processing
- Redis for low-latency reads (<5ms)
- Iceberg for historical analysis

## Data Modeling Questions

### SCD Type 2 Design
```sql
-- SCD Type 2: Customer dimension with history
CREATE TABLE dim_customer (
  customer_key BIGINT PRIMARY KEY,  -- surrogate key
  customer_id  VARCHAR,             -- natural key
  name         VARCHAR,
  email        VARCHAR,
  city         VARCHAR,
  
  -- SCD Type 2 metadata
  effective_date DATE NOT NULL,
  expiry_date    DATE NOT NULL DEFAULT '9999-12-31',
  is_current     BOOLEAN NOT NULL DEFAULT TRUE,
  
  created_at   TIMESTAMP DEFAULT NOW()
);
```

### Fact Table Design
```sql
-- Orders fact table (star schema)
CREATE TABLE fact_orders (
  order_key      BIGINT PRIMARY KEY,
  -- Foreign keys to dimensions
  date_key       INT REFERENCES dim_date(date_key),
  customer_key   BIGINT REFERENCES dim_customer(customer_key),
  product_key    BIGINT REFERENCES dim_product(product_key),
  -- Measures
  quantity       INT,
  unit_price     DECIMAL(10,2),
  total_amount   DECIMAL(10,2),
  discount_pct   DECIMAL(5,2)
);
```

## Behavioral Questions

### STAR Method
Structure answers as: **S**ituation → **T**ask → **A**ction → **R**esult

**Common Questions**:
1. "Tell me about a data pipeline you built from scratch"
2. "Describe a time you had to handle a data quality incident in production"
3. "How did you handle disagreement with a stakeholder about a technical decision?"
4. "Tell me about the largest scale system you've worked with"
5. "Describe a time you had to learn a new technology quickly"

## Salary Negotiation Tips

1. **Know your market rate**: Check levels.fyi, LinkedIn Salary, Glassdoor
2. **Get multiple offers**: Leverage competing offers
3. **Negotiate everything**: Base, equity, signing bonus, PTO, remote
4. **Don't anchor first**: Let them make the first offer
5. **Ask about total comp**: Base + equity + bonus + benefits

## Company-Specific Resources

- **Google**: [Google System Design Interview](https://www.youtube.com/c/GoogleforDevelopers)
- **Meta**: [Meta Engineering Blog](https://engineering.fb.com/)
- **Netflix**: [Netflix Tech Blog](https://netflixtechblog.com/)
- **Airbnb**: [Airbnb Engineering](https://medium.com/airbnb-engineering)
- **Uber**: [Uber Engineering](https://www.uber.com/blog/engineering/)
- **Stripe**: [Stripe Engineering Blog](https://stripe.com/blog/engineering)
