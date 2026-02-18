import { Wand2, Download } from 'lucide-react';
import { SuggestionChips } from './SuggestionChips';

interface ImageEditorOverlayProps {
  selectedImage: string;
  editPrompt: string;
  setEditPrompt: (prompt: string) => void;
  aiSuggestions: string[];
  loading: boolean;
  onGetSuggestions: () => void;
  onApplyEdit: () => void;
  onClose: () => void;
}

export function ImageEditorOverlay({
  selectedImage,
  editPrompt,
  setEditPrompt,
  aiSuggestions,
  loading,
  onGetSuggestions,
  onApplyEdit,
  onClose,
}: ImageEditorOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-12 overflow-y-auto">
      <div className="flex w-full h-full max-w-7xl gap-8">
        <div className="flex-1 flex items-center justify-center bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl">
          <img src={selectedImage} className="max-h-full object-contain" alt="Selected" />
        </div>

        <div className="w-96 flex flex-col gap-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Wand2 size={24} className="text-blue-500" />
              AI Editor
            </h3>

            <SuggestionChips
              suggestions={aiSuggestions}
              onGetSuggestions={onGetSuggestions}
              onSuggestionClick={setEditPrompt}
              loading={loading}
            />

            <textarea
              className="w-full bg-slate-800 rounded-xl p-4 h-32 text-sm outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700 text-slate-100 placeholder:text-slate-500"
              placeholder="Explain how to modify this photo..."
              value={editPrompt}
              onChange={(e) => setEditPrompt(e.target.value)}
            ></textarea>
            <button
              onClick={onApplyEdit}
              disabled={loading || !editPrompt}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
              ) : (
                'Apply AI Changes'
              )}
            </button>
          </div>

          <div className="mt-auto flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-slate-800 py-4 rounded-xl hover:bg-slate-700 transition-all font-bold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = selectedImage;
                link.download = 'mediaai-edited-image.png';
                link.click();
              }}
              className="flex-1 bg-white text-black py-4 rounded-xl hover:bg-slate-200 transition-all font-bold flex items-center justify-center gap-2"
            >
              <Download size={20} /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
