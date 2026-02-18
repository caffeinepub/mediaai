# Specification

## Summary
**Goal:** Build the MediaAI frontend UI shell and three tab screens (Image Maker, Video Studio, Voice Over) with a cohesive dark/cinematic theme and fully stubbed AI behaviors (no external AI network calls).

**Planned changes:**
- Implement the app shell with collapsible left sidebar (3 items: Image Maker, Video Studio, Voice Over) and a top header whose title changes based on the active tab.
- Build the Image Maker tab with prompt input, Enhance/Create actions, loading states, and a responsive gallery grid of generated images.
- Add a full-screen Image Preview & AI Editor overlay with edit prompt, “Get Edit Suggestions” (3 chips), suggestion-to-text insertion, and “Apply AI Changes” that prepends a new image and updates the selected image.
- Build the Voice Over tab with topic input, stubbed “Generate Script”, editable script textarea, voice dropdown (Male - Zephyr, Female - Kore, Excited - Fenrir), and a non-functional “Preview Audio” button.
- Build the Video Studio tab as a presentational screen with title/description and “Add Photos” / “Generate Video” placeholder buttons.
- Replace any external Google Generative Language/Imagen calls with local stub implementations that simulate prompt enhancement, script generation, edit suggestions, image creation, and image editing while preserving loading/UI behaviors.
- Apply consistent dark/cinematic styling across sidebar, header, tab content, and modal (spacing, typography, borders, hover/focus states).

**User-visible outcome:** Users can navigate between three tabs, generate placeholder images into a gallery, open an image in a full-screen editor with stubbed AI suggestions/edits that add new images to the gallery, generate and edit a stubbed voice-over script with voice selection, and view a Video Studio screen with non-functional action buttons.
