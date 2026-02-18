import { useState } from 'react';
import { Wand2, Zap } from 'lucide-react';
import { ImageGalleryGrid } from './components/ImageGalleryGrid';
import { ImageEditorOverlay } from './components/ImageEditorOverlay';
import { enhancePrompt, generateImage, applyImageEdit, getEditSuggestions } from '../../lib/aiStubs';

export function ImageMakerView() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleEnhancePrompt = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const enhanced = await enhancePrompt(prompt);
      setPrompt(enhanced);
    } catch (error) {
      console.error('Enhancement failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const imageUrl = await generateImage(prompt);
      setImages([imageUrl, ...images]);
      setPrompt('');
    } catch (error) {
      console.error('Generation failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetSuggestions = async () => {
    if (!selectedImage) return;
    setLoading(true);
    try {
      const suggestions = await getEditSuggestions();
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error('Suggestions failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyEdit = async () => {
    if (!selectedImage || !editPrompt) return;
    setLoading(true);
    try {
      const newImageUrl = await applyImageEdit(selectedImage, editPrompt);
      setImages([newImageUrl, ...images]);
      setSelectedImage(newImageUrl);
      setEditPrompt('');
    } catch (error) {
      console.error('Edit failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (img: string) => {
    setSelectedImage(img);
    setAiSuggestions([]);
    setEditPrompt('');
  };

  const handleCloseEditor = () => {
    setSelectedImage(null);
    setEditPrompt('');
    setAiSuggestions([]);
  };

  return (
    <>
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Describe the photo you want to create..."
                  className="flex-1 bg-slate-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none text-slate-100 placeholder:text-slate-500"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !loading && prompt) {
                      handleGenerateImage();
                    }
                  }}
                />
                <button
                  onClick={handleEnhancePrompt}
                  disabled={loading || !prompt}
                  className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-4 rounded-xl font-bold flex items-center gap-2 transition-all border border-purple-500/30"
                  title="Enhance prompt with AI"
                >
                  <Zap size={20} /> ✨
                </button>
                <button
                  onClick={handleGenerateImage}
                  disabled={loading || !prompt}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
                  ) : (
                    <Wand2 size={20} />
                  )}
                  Create
                </button>
              </div>
            </div>
          </div>

          <ImageGalleryGrid images={images} onImageSelect={handleImageSelect} />
        </div>
      </div>

      {selectedImage && (
        <ImageEditorOverlay
          selectedImage={selectedImage}
          editPrompt={editPrompt}
          setEditPrompt={setEditPrompt}
          aiSuggestions={aiSuggestions}
          loading={loading}
          onGetSuggestions={handleGetSuggestions}
          onApplyEdit={handleApplyEdit}
          onClose={handleCloseEditor}
        />
      )}
    </>
  );
}
