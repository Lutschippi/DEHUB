import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = [
  {
    cmd: "pip install apache-spark pyspark dbt-core",
    output: [
      "Collecting apache-spark...",
      "Downloading apache_spark-3.4.1-py2.py3-none-any.whl",
      "Installing collected packages: apache-spark, pyspark, dbt-core",
      "[SUCCESS] Successfully installed all packages"
    ]
  },
  {
    cmd: "spark-submit --master yarn pipeline.py",
    output: [
      "[INFO] Connecting to ResourceManager at yarn-master:8032",
      "[INFO] Uploading resource file:/home/hadoop/pipeline.py -> hdfs://namenode:8020/user/hadoop/.sparkStaging/...",
      "[INFO] Application report for application_1684392019_0001 (state: ACCEPTED)",
      "[SUCCESS] Application completed successfully"
    ]
  },
  {
    cmd: "dbt run --select +orders_mart",
    output: [
      "Running with dbt=1.7.0",
      "Found 12 models, 4 tests, 2 snapshots, 0 analyses",
      "Concurrency: 4 threads (target='prod')",
      "1 of 3 START table model analytics.stg_orders .................... [RUN]",
      "1 of 3 OK created table model analytics.stg_orders ............... [SUCCESS in 1.25s]",
      "[SUCCESS] Finished running 3 table models in 4.12s."
    ]
  },
  {
    cmd: "kafka-topics --create --topic events --partitions 12",
    output: [
      "WARNING: Due to limitations in metric names, topics with a period ('.') or underscore ('_') could collide.",
      "Created topic events with 12 partitions and replication factor 3.",
      "[SUCCESS] Topic creation completed."
    ]
  },
  {
    cmd: "airflow dags trigger data_pipeline",
    output: [
      "[INFO] Authenticating to Airflow API...",
      "Created <DagRun data_pipeline @ 2024-05-12T10:00:00+00:00: manual__2024-05-12T10:00:00+00:00, externally triggered: True>",
      "[SUCCESS] Triggered data_pipeline successfully"
    ]
  },
  {
    cmd: "SELECT * FROM iceberg.prod.events LIMIT 1000000;",
    output: [
      "Executing query on Trino cluster...",
      "Query 20240512_100123_00045_xxqzz RUNNING",
      "Scanned 4.2 GB, 1,000,000 rows returned in 2.41s",
      "[SUCCESS] Query finished"
    ]
  }
];

export function Terminal() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState<{cmd: string, output: string[]}[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentCmd = COMMANDS[cmdIndex];
    
    if (isTyping) {
      if (charIndex < currentCmd.cmd.length) {
        const timeout = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 40 + Math.random() * 40);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setShowOutput(true);
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else if (showOutput) {
      const timeout = setTimeout(() => {
        setHistory(prev => {
          const newHistory = [...prev, currentCmd];
          if (newHistory.length > 2) newHistory.shift();
          return newHistory;
        });
        setCmdIndex((prev) => (prev + 1) % COMMANDS.length);
        setCharIndex(0);
        setShowOutput(false);
        setIsTyping(true);
      }, 2500);
      return () => clearTimeout(timeout);
    }
    
    // Explicit return for the case where nothing is executing
    return () => {};
  }, [cmdIndex, charIndex, isTyping, showOutput]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-[#0a0a0a] shadow-2xl relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:100%_2px] pointer-events-none z-10 mix-blend-screen"></div>
      
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#121212] border-b border-border relative z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-muted-foreground font-mono">
          dehub@engineer:~
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm md:text-sm h-[340px] flex flex-col justify-end text-zinc-300 relative z-20">
        <div className="flex-1 overflow-hidden flex flex-col justify-end">
          {history.map((h, i) => (
            <div key={i} className="mb-5 opacity-50">
              <div className="flex text-primary">
                <span className="mr-3 select-none">❯</span>
                <span className="break-all">{h.cmd}</span>
              </div>
              <div className="mt-1 space-y-1 text-xs md:text-sm">
                {h.output.map((line, j) => (
                  <div key={j} className={`
                    ${line.includes('[SUCCESS]') ? 'text-primary' : ''}
                    ${line.includes('[INFO]') ? 'text-secondary' : ''}
                    ${line.includes('WARNING') ? 'text-yellow-400' : ''}
                  `}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mb-2">
            <div className="flex text-primary items-center">
              <span className="mr-3 select-none">❯</span>
              <span className="break-all">
                {COMMANDS[cmdIndex].cmd.substring(0, charIndex)}
              </span>
              {isTyping && (
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }} 
                  className="w-2.5 h-4 bg-primary ml-1 inline-block translate-y-[2px]"
                ></motion.span>
              )}
            </div>
            {showOutput && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 space-y-1 text-xs md:text-sm">
                {COMMANDS[cmdIndex].output.map((line, j) => (
                  <div key={j} className={`
                    ${line.includes('[SUCCESS]') ? 'text-primary' : ''}
                    ${line.includes('[INFO]') ? 'text-secondary' : ''}
                    ${line.includes('WARNING') ? 'text-yellow-400' : ''}
                  `}>
                    {line}
                  </div>
                ))}
              </motion.div>
            )}
            {!isTyping && !showOutput && (
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }} 
                className="w-2.5 h-4 bg-primary ml-1 block mt-2"
              ></motion.span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}