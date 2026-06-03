import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  BookOpen 
} from 'lucide-react';
import { slides } from './slides';
import { SlideRenderer } from './components/SlideRenderer';
import { FinalQuizRenderer } from './components/FinalQuizRenderer';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);
  const [isResponsive, setIsResponsive] = useState(false);

  // Touch Swipe State
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Background Audio State - Default to true to trigger autoplay
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio] = useState(() => {
    const a = new Audio('/jazz.mp3');
    a.loop = true;
    a.volume = 0.25; // Soft background level
    return a;
  });

  // Handle fallback source if local file isn't present
  useEffect(() => {
    const handleAudioError = () => {
      console.log("Local jazz.mp3 not found, falling back to network lofi stream.");
      audio.src = 'https://archive.org/download/mr.-preset-jazz-lo-fi-beats-2024/01.%20Sunny%20Morning%20-%20Mr.%20Preset.mp3';
      // Re-trigger play if active
      if (isPlaying) {
        audio.play().catch(err => console.log("Autoplay blocked: ", err));
      }
    };

    audio.addEventListener('error', handleAudioError);
    return () => audio.removeEventListener('error', handleAudioError);
  }, [audio, isPlaying]);

  // Audio Play/Pause trigger with browser autoplay policy bypass
  useEffect(() => {
    const playAudio = () => {
      audio.play().catch((err) => {
        console.log('Autoplay bloqueado pelo navegador. Aguardando interação do usuário...', err);
        
        // Tenta tocar na primeira interação do usuário (clique, toque ou tecla)
        const playOnInteraction = () => {
          audio.play()
            .then(() => {
              setIsPlaying(true);
              removeListeners();
            })
            .catch(e => console.error('Erro na reprodução após interação:', e));
        };

        const removeListeners = () => {
          window.removeEventListener('click', playOnInteraction);
          window.removeEventListener('keydown', playOnInteraction);
          window.removeEventListener('touchstart', playOnInteraction);
        };

        window.addEventListener('click', playOnInteraction);
        window.addEventListener('keydown', playOnInteraction);
        window.addEventListener('touchstart', playOnInteraction);
      });
    };

    if (isPlaying) {
      playAudio();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  // Speaker notes toggling
  const [showNotes, setShowNotes] = useState(false);

  // Quiz final activation state
  const [isQuizMode, setIsQuizMode] = useState(false);

  // Auto-scale handler to perfectly frame 16:9 slides on any screen size
  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1280;
      const targetHeight = 720;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const isMobileOrTablet = windowWidth < 1024 || windowHeight < 700;
      setIsResponsive(isMobileOrTablet);

      if (isMobileOrTablet) {
        setScale(1);
      } else {
        // Calculate scale to fit width and height with padding
        const scaleX = windowWidth / targetWidth;
        const scaleY = windowHeight / targetHeight;
        const nextScale = Math.min(scaleX, scaleY) * 0.95;
        setScale(Math.max(nextScale, 0.15));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Advance to the final certification quiz
      setIsQuizMode(true);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isQuizMode) return;
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null || isQuizMode) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Detect horizontal swipe (horizontal displacement must be greater than vertical displacement)
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        // Swipe left -> Next
        handleNext();
      } else if (diffX < -50) {
        // Swipe right -> Prev
        handlePrev();
      }
    }

    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore navigation keys if typing in interactive forms or quiz elements or if in final quiz mode
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA' ||
        isQuizMode
      ) {
        return;
      }
      
      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'Enter':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          handlePrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isQuizMode]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Slide transition variants for smooth sliding
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1280 : -1280,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 1280 : -1280,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <div 
      className="presentation-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background blobs for premium glassmorphism effect */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* 16:9 Viewport */}
      <div 
        className={`slide-viewport ${isResponsive ? 'responsive-mode' : ''}`}
        style={isResponsive ? {} : { transform: `scale(${scale})` }}
      >
        {/* Top Utility Controls (Music & Notes) - Hidden in Quiz Mode */}
        {!isQuizMode && (
          <div className="utilities-overlay">
            {/* Music Toggle */}
            <button 
              className={`control-btn ${isPlaying ? 'active' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Mudar música/Pausar" : "Tocar Jazz de fundo"}
              aria-label="Jazz Background Music"
              style={{ width: isPlaying ? '90px' : '44px', borderRadius: isPlaying ? '24px' : '50%', display: 'flex', gap: '4px', transition: 'all 0.3s' }}
            >
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
              {isPlaying && (
                <div className="equalizer">
                  <span className="bar animating"></span>
                  <span className="bar animating"></span>
                  <span className="bar animating"></span>
                  <span className="bar animating"></span>
                </div>
              )}
            </button>

            {/* Notes Toggle */}
            <button 
              className={`control-btn ${showNotes ? 'active' : ''}`}
              onClick={() => setShowNotes(!showNotes)}
              title="Notas do Apresentador (Roteiro)"
              aria-label="Toggle speaker notes"
            >
              <BookOpen size={18} />
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="slide-content-area">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {isQuizMode ? (
              <motion.div
                key="certification-quiz"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="slide-wrapper"
              >
                <FinalQuizRenderer onClose={() => setIsQuizMode(false)} />
              </motion.div>
            ) : (
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="slide-wrapper"
              >
                <SlideRenderer slide={slides[currentIndex]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Speaker Notes Drawer overlay - Hidden in Quiz Mode */}
        {!isQuizMode && (
          <AnimatePresence>
            {showNotes && (
              <motion.div 
                initial={{ y: 220 }}
                animate={{ y: 0 }}
                exit={{ y: 220 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="notes-drawer"
              >
                <h5 style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Roteiro do Vendedor - Slide {currentIndex + 1}
                </h5>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: '1.5' }}>
                  {slides[currentIndex].notes}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Slide Counter - Hidden in Quiz Mode */}
        {!isQuizMode && (
          <div className="slide-number">
            {currentIndex + 1} / {slides.length}
          </div>
        )}

        {/* Navigation Overlay - Hidden in Quiz Mode */}
        {!isQuizMode && (
          <div className="controls-overlay">
            <button 
              className="control-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Slide Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              className="control-btn"
              onClick={toggleFullscreen}
              aria-label="Tela Cheia"
            >
              <Maximize2 size={16} />
            </button>

            <button 
              className={`control-btn ${currentIndex === slides.length - 1 ? 'active' : ''}`}
              onClick={handleNext}
              title={currentIndex === slides.length - 1 ? "Iniciar Teste de Certificação" : "Próximo Slide"}
              aria-label="Próximo Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Bottom Progress Bar - Hidden in Quiz Mode */}
        {!isQuizMode && (
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
