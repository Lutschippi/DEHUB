import { useEffect, useRef } from 'react';

const DE_TERMS = [
  'SQL','Python','Kafka','Spark','Airflow','dbt','Iceberg','Delta Lake',
  'Flink','Snowflake','BigQuery','Databricks','ETL','ELT','Lakehouse',
  'Parquet','Arrow','Trino','Presto','Hive','HDFS','S3','GCS',
  'Redshift','Pipeline','Schema','Orchestration','Ingestion','Transform',
  'Partition','Indexing','Streaming','Batch','CDC','Replication',
];

interface Node { x: number; y: number; vx: number; vy: number; r: number; }
interface FloatText { x: number; y: number; vy: number; text: string; alpha: number; }
interface Edge { a: number; b: number; }

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let floatTexts: FloatText[] = [];
    let edges: Edge[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      init();
    }

    function init() {
      if (!canvas) return;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const count = Math.min(28, Math.floor((W * H) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 2 + Math.random() * 2.5,
      }));

      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < 200) {
            edges.push({ a: i, b: j });
          }
        }
      }

      floatTexts = Array.from({ length: 12 }, () => makeFloat(canvas.offsetWidth, canvas.offsetHeight, true));
    }

    function makeFloat(W: number, H: number, init = false): FloatText {
      return {
        x: Math.random() * W,
        y: init ? Math.random() * H : H + 20,
        vy: 0.3 + Math.random() * 0.4,
        text: DE_TERMS[Math.floor(Math.random() * DE_TERMS.length)],
        alpha: 0,
      };
    }

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      // Update edges based on current node positions
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) edges.push({ a: i, b: j });
        }
      }

      // Draw edges
      edges.forEach(({ a, b }) => {
        const na = nodes[a], nb = nodes[b];
        const dx = na.x - nb.x, dy = na.y - nb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = (1 - dist / 200) * 0.18;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,197,94,0.55)';
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(34,197,94,0.12)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Move
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw floating text
      floatTexts.forEach((ft, i) => {
        ft.y -= ft.vy;
        if (ft.y < H * 0.3) {
          ft.alpha = Math.max(0, ft.alpha - 0.012);
          if (ft.alpha <= 0) floatTexts[i] = makeFloat(W, H);
        } else {
          ft.alpha = Math.min(0.5, ft.alpha + 0.008);
        }

        ctx.font = '11px "Courier New", monospace';
        ctx.fillStyle = `rgba(34,197,94,${ft.alpha})`;
        ctx.fillText(ft.text, ft.x, ft.y);
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
