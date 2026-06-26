import React, { useState, useEffect, useRef } from 'react';
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
      "[INFO] Uploading resource pipeline.py -> hdfs://namenode:8020/user/hadoop/.sparkStaging/",
      "[INFO] Application report: state ACCEPTED",
      "[SUCCESS] Application completed successfully"
    ]
  },
  {
    cmd: "dbt run --select +orders_mart",
    output: [
      "Running with dbt=1.8.0",
      "Found 47 models, 312 tests, 0 analyses",
      "Concurrency: 4 threads (target='prod')",
      "1 of 3 OK created table model analytics.orders_mart .... [SUCCESS in 1.25s]",
      "[SUCCESS] Finished running 3 table models in 4.12s."
    ]
  },
  {
    cmd: "kafka-topics --create --topic events --partitions 12",
    output: [
      "[INFO] Connecting to Kafka broker at kafka:9092",
      "Created topic events with 12 partitions, replication factor 3.",
      "[SUCCESS] Topic creation completed."
    ]
  },
  {
    cmd: "airflow dags trigger data_pipeline",
    output: [
      "[INFO] Authenticating to Airflow API...",
      "Created <DagRun data_pipeline @ 2024-05-12T10:00:00+00:00: manual, externally triggered: True>",
      "[SUCCESS] Triggered data_pipeline successfully"
    ]
  },
  {
    cmd: "SELECT COUNT(*) FROM iceberg.prod.events;",
    output: [
      "Executing query on Trino cluster...",
      "Query 20240512_100123_00045_xxqzz RUNNING",
      "Scanned 4.2 GB in 2.41s",
      "[SUCCESS] 1,427,893,004 rows returned"
    ]
  }
];

// Phase-based state machine — each phase owns exactly one timeout.
// Transitions: typing → pausing → showing → advancing → typing (next cmd)
type Phase = 'typing' | 'pausing' | 'showing' | 'advancing';

export function Terminal() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');
  const [history, setHistory] = useState<{ cmd: string; output: string[] }[]>([]);

  // Use a ref to store the timeout so cleanup is always accurate.
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Always clear any pending timer before scheduling a new one.
    if (timerRef.current !== null) clearTimeout(timerRef.current);

    const currentCmd = COMMANDS[cmdIndex];

    if (phase === 'typing') {
      if (charIndex < currentCmd.cmd.length) {
        // Type next character with a realistic random delay.
        timerRef.current = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 35 + Math.random() * 45);
      } else {
        // Finished typing — pause briefly before showing output.
        timerRef.current = setTimeout(() => {
          setPhase('pausing');
        }, 200);
      }
    } else if (phase === 'pausing') {
      timerRef.current = setTimeout(() => {
        setPhase('showing');
      }, 350);
    } else if (phase === 'showing') {
      // Output is visible — wait for the user to read it, then advance.
      timerRef.current = setTimeout(() => {
        setPhase('advancing');
      }, 2800);
    } else if (phase === 'advancing') {
      // Push current command to history and move to the next command.
      setHistory(prev => {
        const next = [...prev, currentCmd];
        return next.length > 2 ? next.slice(next.length - 2) : next;
      });
      setCmdIndex(prev => (prev + 1) % COMMANDS.length);
      setCharIndex(0);
      setPhase('typing');
    }

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, charIndex, cmdIndex]);

  const currentCmd = COMMANDS[cmdIndex];
  const displayedText = currentCmd.cmd.substring(0, charIndex);
  const showCursor = phase === 'typing' || phase === 'pausing';
  const showOutput = phase === 'showing' || phase === 'advancing';

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-[#0a0a0a] shadow-2xl relative">
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:100%_2px] pointer-events-none z-10 mix-blend-screen" />

      {/* Title bar */}
      <div className="flex items-center px-4 py-3 bg-[#121212] border-b border-border relative z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs text-muted-foreground font-mono">
          dehub@engineer:~
        </div>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm h-[340px] flex flex-col justify-end text-zinc-300 relative z-20">
        <div className="flex-1 overflow-hidden flex flex-col justify-end">

          {/* Command history */}
          {history.map((h, i) => (
            <div key={i} className="mb-4 opacity-40">
              <div className="flex text-primary">
                <span className="mr-3 select-none">❯</span>
                <span className="break-all">{h.cmd}</span>
              </div>
              <div className="mt-1 space-y-1 text-xs pl-6">
                {h.output.map((line, j) => (
                  <div
                    key={j}
                    className={
                      line.includes('[SUCCESS]') ? 'text-primary' :
                      line.includes('[INFO]') ? 'text-cyan-400' :
                      line.includes('WARNING') ? 'text-yellow-400' :
                      'text-zinc-400'
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Active command */}
          <div className="mb-2">
            <div className="flex text-primary items-center">
              <span className="mr-3 select-none">❯</span>
              <span className="break-all">{displayedText}</span>
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                  className="w-2.5 h-4 bg-primary ml-0.5 inline-block translate-y-[2px] flex-shrink-0"
                />
              )}
            </div>

            {/* Output — rendered when phase is 'showing' or 'advancing' */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 space-y-1 text-xs pl-6"
              >
                {currentCmd.output.map((line, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: j * 0.08 }}
                    className={
                      line.includes('[SUCCESS]') ? 'text-primary' :
                      line.includes('[INFO]') ? 'text-cyan-400' :
                      line.includes('WARNING') ? 'text-yellow-400' :
                      'text-zinc-400'
                    }
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
