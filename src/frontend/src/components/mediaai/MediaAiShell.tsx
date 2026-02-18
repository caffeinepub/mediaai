import { type ReactNode, useState } from 'react';
import { Sparkles, Settings } from 'lucide-react';
import { SidebarNavItem } from './SidebarNavItem';
import { type TabType } from '../../App';
import { ImageIcon, Video, Mic } from 'lucide-react';

interface MediaAiShellProps {
  children: ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function MediaAiShell({ children, activeTab, onTabChange }: MediaAiShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'image':
        return 'AI Image Creation & Editing';
      case 'video':
        return 'Video Slideshow Builder';
      case 'voice':
        return 'AI Voice Synthesizer';
      default:
        return 'MediaAI';
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">MediaAI</span>}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <SidebarNavItem
            icon={<ImageIcon size={20} />}
            label="Image Maker"
            active={activeTab === 'image'}
            onClick={() => onTabChange('image')}
            isOpen={isSidebarOpen}
          />
          <SidebarNavItem
            icon={<Video size={20} />}
            label="Video Studio"
            active={activeTab === 'video'}
            onClick={() => onTabChange('video')}
            isOpen={isSidebarOpen}
          />
          <SidebarNavItem
            icon={<Mic size={20} />}
            label="Voice Over"
            active={activeTab === 'voice'}
            onClick={() => onTabChange('voice')}
            isOpen={isSidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Settings size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md z-10">
          <h2 className="text-lg font-semibold flex items-center gap-2">{getHeaderTitle()}</h2>
        </header>

        <div className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
          {children}
        </div>
      </main>
    </div>
  );
}
