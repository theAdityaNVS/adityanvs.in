import React from 'react';
import { Github, ExternalLink, Code2, GitCommit, Star } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import DecryptedText from '../ui/DecryptedText';

const GithubStats: React.FC = () => {
  const username = "theAdityaNVS";


  // Use local proxy that will try your self-hosted endpoint, then the public service, then local fallbacks
  const statsUrl = `/api/github-stats?username=${username}&kind=stats`;

  const streakUrl = `https://github-readme-streak--stats.vercel.app?user=${username}&theme=transparent&hide_border=true&exclude_days=Sun%2CSat`;

  const langUrl = `/api/github-stats?username=${username}&kind=langs`

  // Fallbacks: try public service first, then local static SVG to avoid broken images
  const handleStatsError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const attempts = parseInt(img.dataset.attempts || '0', 10);
    if (attempts === 0) {
      img.dataset.attempts = '1';
      img.src = `https://github--stats.vercel.app/api?username=${username}&theme=transparent&show_icons=true&hide_border=true&count_private=true`;
    } else {
      img.dataset.attempts = '2';
      img.src = '/github-stats-fallback.svg';
    }
  };

  const handleLangError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const attempts = parseInt(img.dataset.attempts || '0', 10);
    if (attempts === 0) {
      img.dataset.attempts = '1';
      img.src = `https://github--stats.vercel.app/api/top-langs/?username=${username}&theme=transparent&layout=compact&hide_border=true`;
    } else {
      img.dataset.attempts = '2';
      img.src = '/github-langs-fallback.svg';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              <DecryptedText text="Open Source Activity" />
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <Github size={20} className="group-hover:text-primary transition-colors" />
            <span className="font-medium">View Full Profile</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Card */}
          <TiltCard className="h-full">
            <div className="glass-panel p-6 rounded-3xl h-full flex flex-col bg-slate-900/40 border border-white/5 relative group min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Contribution Stats</h3>
              </div>
              <div className="flex items-center justify-center grow">
                <img
                  src={statsUrl}
                  alt="Github Stats"
                  className="w-full h-auto max-w-md object-contain"
                  loading="lazy"
                  onError={handleStatsError}
                  data-attempts={0}
                />
              </div>
            </div>
          </TiltCard>

          {/* Streak Card */}
          <TiltCard className="h-full">
            <div className="glass-panel p-6 rounded-3xl h-full flex flex-col bg-slate-900/40 border border-white/5 relative group min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                  <GitCommit size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Commit Streak</h3>
              </div>
              <div className="flex items-center justify-center grow">
                <img
                  src={streakUrl}
                  alt="Github Streak"
                  className="w-full h-auto max-w-md object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Top Languages */}
        <div className="mt-8">
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center bg-slate-900/40 border border-white/5 relative group min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <div className="flex items-center gap-3 mb-8 self-start">
                <div className="p-2 rounded-lg bg-accent/20 text-accent">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Most Used Languages</h3>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={langUrl}
                  alt="Top Languages"
                  className="w-full md:w-2/3 h-auto object-contain"
                  loading="lazy"
                  onError={handleLangError}
                  data-attempts={0}
                />
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;