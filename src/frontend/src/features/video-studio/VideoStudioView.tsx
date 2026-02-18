import { Video, Plus } from 'lucide-react';

export function VideoStudioView() {
  const handleAddPhotos = () => {
    // Placeholder action - no external calls
    console.log('Add Photos clicked');
  };

  const handleGenerateVideo = () => {
    // Placeholder action - no external calls
    console.log('Generate Video clicked');
  };

  return (
    <div className="p-8 flex items-center justify-center h-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30 mb-4">
          <Video size={48} className="text-blue-500" />
        </div>
        <h3 className="text-2xl font-bold">Video Slideshow Creator</h3>
        <p className="text-slate-400 max-w-md">
          Select generated images to combine them into a cinematic video with AI transitions.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAddPhotos}
            className="bg-slate-800 px-6 py-3 rounded-xl hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <Plus size={20} /> Add Photos
          </button>
          <button
            onClick={handleGenerateVideo}
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition-all"
          >
            Generate Video
          </button>
        </div>
      </div>
    </div>
  );
}
