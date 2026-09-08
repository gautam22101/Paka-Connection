import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  size?: number;
  delay?: number;
}

export default function ConnectionVisual({ className = '', variant = 'default' }: { className?: string; variant?: 'default' | 'dense' | 'minimal' }) {
  const nodes: Node[] = variant === 'dense'
    ? [
        { x: 10, y: 20, size: 6 }, { x: 25, y: 10, size: 4 }, { x: 40, y: 30, size: 8 },
        { x: 55, y: 15, size: 5 }, { x: 70, y: 35, size: 6 }, { x: 85, y: 20, size: 4 },
        { x: 15, y: 60, size: 5 }, { x: 30, y: 75, size: 7 }, { x: 50, y: 55, size: 4 },
        { x: 65, y: 70, size: 6 }, { x: 80, y: 55, size: 5 }, { x: 90, y: 80, size: 4 },
      ]
    : variant === 'minimal'
    ? [{ x: 20, y: 30, size: 6 }, { x: 50, y: 50, size: 8 }, { x: 80, y: 30, size: 6 }]
    : [
        { x: 15, y: 25, size: 6 }, { x: 35, y: 15, size: 4 }, { x: 55, y: 35, size: 8 },
        { x: 75, y: 20, size: 5 }, { x: 90, y: 40, size: 4 },
        { x: 25, y: 65, size: 5 }, { x: 50, y: 55, size: 6 }, { x: 70, y: 70, size: 4 },
        { x: 85, y: 60, size: 5 },
      ];

  const connections = variant === 'minimal'
    ? [[0,1],[1,2]]
    : variant === 'dense'
    ? [[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[2,8],[3,9]]
    : [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[2,6],[3,8]];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {connections.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#FF6B00"
            strokeWidth={0.15}
            strokeOpacity={0.15}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.1, ease: 'easeOut' }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.size ? node.size / 10 : 0.5}
            fill="#FF6B00"
            fillOpacity={0.2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          />
        ))}
      </svg>
    </div>
  );
}
