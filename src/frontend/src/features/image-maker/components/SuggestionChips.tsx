import { MessageSquareQuote } from 'lucide-react';

interface SuggestionChipsProps {
  suggestions: string[];
  onGetSuggestions: () => void;
  onSuggestionClick: (suggestion: string) => void;
  loading: boolean;
}

export function SuggestionChips({
  suggestions,
  onGetSuggestions,
  onSuggestionClick,
  loading,
}: SuggestionChipsProps) {
  return (
    <div className="space-y-2">
      <button
        onClick={onGetSuggestions}
        disabled={loading}
        className="text-xs text-blue-400 flex items-center gap-1 hover:text-blue-300 transition-colors mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MessageSquareQuote size={14} /> Get Edit Suggestions ✨
      </button>
      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => onSuggestionClick(s.replace(/^\d+\.\s*/, ''))}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2 py-1 rounded-lg text-slate-300 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
