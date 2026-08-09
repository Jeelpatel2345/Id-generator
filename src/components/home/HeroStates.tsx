import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2', label: 'Formats' },
  { value: 'HD', label: 'Export Quality' },
  { value: 'Instant', label: 'Download' },
];

const HeroStats = () => {
  return (
    <div className="mt-14 flex flex-wrap items-center gap-8 sm:gap-12">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex flex-col"
          >
            <span className="text-3xl font-bold text-white font-heading">{stat.value}</span>
            <span className="text-sm text-slate-400 mt-1">{stat.label}</span>
          </motion.div>
          
          {index < stats.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="hidden sm:block w-px h-12 bg-white/10"
            ></motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroStats;