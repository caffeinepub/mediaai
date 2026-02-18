import { type ReactNode } from 'react';

interface SidebarNavItemProps {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isOpen: boolean;
}

export function SidebarNavItem({ icon, label, active, onClick, isOpen }: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
        active
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {icon}
      {isOpen && <span className="font-medium">{label}</span>}
    </button>
  );
}
