import { useState } from 'react';
import { Shield, Lock, BarChart3, Terminal } from 'lucide-react';
import MatrixRain from '@/components/MatrixRain';
import PasswordAnalyzer from '@/components/PasswordAnalyzer';
import EncryptionVault from '@/components/EncryptionVault';
import SecurityDashboard from '@/components/SecurityDashboard';

type Tab = 'analyzer' | 'vault' | 'dashboard';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('analyzer');

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'analyzer', label: 'ANALYZER', icon: <Shield className="w-4 h-4" /> },
    { id: 'vault', label: 'VAULT', icon: <Lock className="w-4 h-4" /> },
    { id: 'dashboard', label: 'DASHBOARD', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
            <div className="relative">
              <Terminal className="w-8 h-8 text-primary animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-xl font-orbitron tracking-widest text-foreground neon-text-green">
                CYBERGUARD
              </h1>
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em]">
                PASSWORD SECURITY & ENCRYPTION SUITE
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">LOCAL ONLY</span>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="bg-card/50 backdrop-blur-sm border-b border-border/30">
          <div className="max-w-4xl mx-auto px-4 flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-xs font-orbitron tracking-wider transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary neon-text-green'
                    : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content */}
        <main className="flex-1 py-6 px-4">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'analyzer' && <PasswordAnalyzer />}
            {activeTab === 'vault' && <EncryptionVault />}
            {activeTab === 'dashboard' && <SecurityDashboard />}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm py-3">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <span className="text-[10px] font-mono text-muted-foreground">
              © 2026 CYBERGUARD — ALL PROCESSING LOCAL
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              NO TRACKING • NO ANALYTICS • AES-256-GCM
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
