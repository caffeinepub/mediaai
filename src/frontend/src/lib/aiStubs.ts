/**
 * Local stub implementations for AI features.
 * These functions simulate AI responses without making external API calls.
 * Future wiring: Replace these with actual API calls to Google Generative Language endpoints.
 */

// System prompts preserved for future API integration
const PROMPT_ENHANCEMENT_SYSTEM = "You are an expert AI image prompt engineer. Expand the user's simple idea into a detailed, cinematic, high-quality prompt for an image generator. Include lighting, mood, and artistic style. Keep it under 60 words.";
const VOICE_SCRIPT_SYSTEM = "Write a short, engaging 30-second voiceover script (about 50-70 words) based on the user's topic. Make it sound professional and enthusiastic.";
const EDIT_SUGGESTIONS_SYSTEM = "You are a creative director. Suggest 3 unique, artistic ways to edit or modify a photo based on common aesthetic trends (e.g., Cyberpunk, Vintage, Surrealism). Keep suggestions very short.";

/**
 * Enhance a user prompt into a more detailed, cinematic description
 */
export async function enhancePrompt(prompt: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const enhancements = [
    `${prompt}, cinematic lighting, dramatic shadows, ultra-detailed, 8k resolution, professional photography`,
    `${prompt}, golden hour lighting, atmospheric depth, bokeh background, award-winning composition`,
    `${prompt}, studio lighting, high contrast, vibrant colors, magazine quality, sharp focus`,
    `${prompt}, moody atmosphere, volumetric lighting, photorealistic, cinematic color grading`,
  ];

  return enhancements[Math.floor(Math.random() * enhancements.length)];
}

/**
 * Generate a placeholder image for the gallery
 */
export async function generateImage(prompt: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Generate a deterministic placeholder image using Canvas
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // Create gradient based on prompt hash
  const hash = prompt.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = hash % 360;
  const hue2 = (hash * 137) % 360;

  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, `hsl(${hue1}, 70%, 50%)`);
  gradient.addColorStop(1, `hsl(${hue2}, 70%, 30%)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  // Add some visual interest
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < 20; i++) {
    const x = (hash * (i + 1) * 37) % 512;
    const y = (hash * (i + 1) * 73) % 512;
    const size = 20 + ((hash * (i + 1)) % 80);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add text overlay
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const words = prompt.split(' ').slice(0, 3).join(' ');
  ctx.fillText(words, 256, 256);

  return canvas.toDataURL('image/png');
}

/**
 * Get 3 short editing suggestions
 */
export async function getEditSuggestions(): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  const allSuggestions = [
    '1. Add cyberpunk neon glow effects',
    '2. Convert to vintage film aesthetic',
    '3. Apply surreal dreamlike atmosphere',
    '1. Enhance with dramatic lighting',
    '2. Add bokeh blur background',
    '3. Apply cinematic color grading',
    '1. Transform into oil painting style',
    '2. Add golden hour warm tones',
    '3. Create double exposure effect',
  ];

  // Return 3 random suggestions
  const shuffled = [...allSuggestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

/**
 * Apply an edit to an image and return a new modified version
 */
export async function applyImageEdit(imageUrl: string, editPrompt: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Create a modified version of the image
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // Load the original image
  const img = new Image();
  img.src = imageUrl;

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // Draw the original image
  ctx.drawImage(img, 0, 0, 512, 512);

  // Apply a visual effect based on the edit prompt
  const lowerPrompt = editPrompt.toLowerCase();

  if (lowerPrompt.includes('neon') || lowerPrompt.includes('cyberpunk')) {
    // Add neon overlay
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.fillRect(0, 0, 512, 512);
  } else if (lowerPrompt.includes('vintage') || lowerPrompt.includes('film')) {
    // Add sepia tone
    ctx.fillStyle = 'rgba(112, 66, 20, 0.3)';
    ctx.fillRect(0, 0, 512, 512);
  } else if (lowerPrompt.includes('dark') || lowerPrompt.includes('dramatic')) {
    // Darken
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, 512, 512);
  } else {
    // Default: add a subtle color overlay
    ctx.fillStyle = 'rgba(100, 100, 255, 0.15)';
    ctx.fillRect(0, 0, 512, 512);
  }

  // Add "edited" indicator
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText('✨ Edited', 500, 500);

  return canvas.toDataURL('image/png');
}

/**
 * Generate a voice-over script based on a topic
 */
export async function generateVoiceScript(topic: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const scripts = [
    `Welcome to an exciting journey into ${topic}! Today, we'll explore the fascinating world that awaits us. From incredible discoveries to amazing innovations, this adventure will captivate your imagination. Get ready to experience something truly extraordinary. Let's dive in and discover what makes ${topic} so special!`,
    `Imagine a world where ${topic} transforms everything around us. In just 30 seconds, we'll take you on an incredible adventure. Discover the magic, feel the excitement, and witness the wonder. This is more than just a story—it's an experience that will stay with you forever. Are you ready?`,
    `${topic} has never been more exciting! Join us as we uncover the secrets and reveal the possibilities. With cutting-edge insights and captivating stories, we'll show you why this matters. From start to finish, you'll be amazed by what we've discovered. Let's begin this incredible journey together!`,
  ];

  return scripts[Math.floor(Math.random() * scripts.length)];
}
