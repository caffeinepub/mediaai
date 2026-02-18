import { useState } from 'react';
import { Zap, Play } from 'lucide-react';
import { generateVoiceScript } from '../../lib/aiStubs';

export function VoiceOverView() {
  const [voiceScriptTopic, setVoiceScriptTopic] = useState('');
  const [voiceScript, setVoiceScript] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateScript = async () => {
    if (!voiceScriptTopic) return;
    setLoading(true);
    try {
      const script = await generateVoiceScript(voiceScriptTopic);
      setVoiceScript(script);
    } catch (error) {
      console.error('Script generation failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewAudio = () => {
    // Non-functional preview button - no external API calls
    console.log('Preview Audio clicked (UI-only, no TTS integration)');
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto space-y-8 bg-slate-900/40 p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Zap className="text-purple-400" size={24} />
            AI Script Writer ✨
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter a topic (e.g., A trip to Mars, Cooking a pizza)"
              className="flex-1 bg-slate-800 border-none rounded-xl px-5 py-3 focus:ring-2 focus:ring-purple-500 outline-none text-sm text-slate-100 placeholder:text-slate-500"
              value={voiceScriptTopic}
              onChange={(e) => setVoiceScriptTopic(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !loading && voiceScriptTopic) {
                  handleGenerateScript();
                }
              }}
            />
            <button
              onClick={handleGenerateScript}
              disabled={loading || !voiceScriptTopic}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:cursor-not-allowed px-6 rounded-xl font-bold text-sm transition-colors"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mx-auto" />
              ) : (
                '✨ Generate Script'
              )}
            </button>
          </div>

          <textarea
            className="w-full bg-slate-800 rounded-2xl p-6 h-40 focus:ring-2 focus:ring-blue-500 outline-none border border-slate-700 mt-6 text-slate-100 placeholder:text-slate-500"
            placeholder="Type or generate a script..."
            value={voiceScript}
            onChange={(e) => setVoiceScript(e.target.value)}
          ></textarea>

          <div className="flex justify-between items-center">
            <select className="bg-slate-800 rounded-lg px-4 py-2 outline-none border border-slate-700 text-slate-100 focus:ring-2 focus:ring-blue-500">
              <option>Male - Zephyr</option>
              <option>Female - Kore</option>
              <option>Excited - Fenrir</option>
            </select>
            <button
              onClick={handlePreviewAudio}
              className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
            >
              <Play size={20} fill="currentColor" /> Preview Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
