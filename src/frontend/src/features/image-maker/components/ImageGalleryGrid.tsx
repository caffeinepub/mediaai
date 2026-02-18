import { Layers, Download } from 'lucide-react';

interface ImageGalleryGridProps {
  images: string[];
  onImageSelect: (img: string) => void;
}

export function ImageGalleryGrid({ images, onImageSelect }: ImageGalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500">
        <p>No images generated yet. Create your first image above!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={() => onImageSelect(img)}
        >
          <img src={img} alt="AI Generated" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button
              className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/40 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Layers size={20} />
            </button>
            <button
              className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/40 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement('a');
                link.href = img;
                link.download = `mediaai-image-${idx + 1}.png`;
                link.click();
              }}
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
