import { useState } from 'react';
import { MediaAiShell } from './components/mediaai/MediaAiShell';
import { ImageMakerView } from './features/image-maker/ImageMakerView';
import { VideoStudioView } from './features/video-studio/VideoStudioView';
import { VoiceOverView } from './features/voice-over/VoiceOverView';

export type TabType = 'image' | 'video' | 'voice';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('image');

  const renderContent = () => {
    switch (activeTab) {
      case 'image':
        return <ImageMakerView />;
      case 'video':
        return <VideoStudioView />;
      case 'voice':
        return <VoiceOverView />;
      default:
        return <ImageMakerView />;
    }
  };

  return (
    <MediaAiShell activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </MediaAiShell>
  );
}

export default App;
