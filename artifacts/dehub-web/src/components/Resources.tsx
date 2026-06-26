import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Video, Headphones, MessageSquare, ExternalLink } from 'lucide-react';

const TABS = [
  { id: 'books', label: 'Books', icon: Book },
  { id: 'communities', label: 'Communities', icon: MessageSquare },
  { id: 'courses', label: 'Courses', icon: Video },
  { id: 'podcasts', label: 'Podcasts', icon: Headphones },
];

const CONTENT: Record<string, {title: string, author: string, desc: string}[]> = {
  books: [
    { title: 'Fundamentals of Data Engineering', author: 'Joe Reis & Matt Housley', desc: 'The definitive guide to the data engineering lifecycle.' },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', desc: 'Deep dive into distributed systems architecture.' },
    { title: 'Streaming Systems', author: 'Tyler Akidau et al.', desc: 'The what, where, when, and how of large-scale data processing.' },
    { title: 'High Performance Spark', author: 'Holden Karau & Rachel Warren', desc: 'Best practices for scaling and optimizing Apache Spark.' },
  ],
  communities: [
    { title: 'DataExpert.io Discord', author: 'Community', desc: 'The most active Discord for aspiring and senior DEs.' },
    { title: 'Data Talks Club', author: 'Community', desc: 'A global community of data enthusiasts and engineers.' },
    { title: 'Data Engineer Things', author: 'Publication & Slack', desc: 'Stories, tutorials, and community for data practitioners.' },
  ],
  courses: [
    { title: 'Data Engineering Bootcamp', author: 'DataExpert.io', desc: 'Comprehensive curriculum covering the modern data stack.' },
    { title: 'Distributed Systems', author: 'MIT 6.824', desc: 'Free engineering course on distributed architecture.' },
  ],
  podcasts: [
    { title: 'The Data Engineering Podcast', author: 'Tobias Macey', desc: 'Weekly deep dives into data management.' },
    { title: 'Catalog & Cocktails', author: 'Juan Sequeda & Tim Gasper', desc: 'Honest, no-BS conversations about data.' },
  ]
};

export function Resources() {
  const [activeTab, setActiveTab] = useState('books');

  return (
    <section id="resources" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Resource <span className="text-secondary">Library</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Curated materials to accelerate your journey.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,255,136,0.2)]' 
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {CONTENT[activeTab].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors flex flex-col h-full cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors pr-6">{item.title}</h3>
                    <div className="p-2 rounded-lg bg-background group-hover:bg-primary/10 transition-colors shrink-0">
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm text-secondary font-mono mb-4">{item.author}</p>
                  <p className="text-muted-foreground mt-auto leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}