import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RefreshCw, 
  ChevronRight, 
  BookOpen
} from 'lucide-react';
import { payjoyQuizData, type QuizQuestion } from '../quizData';

interface FinalQuizRendererProps {
  onClose: () => void;
}

const quizVariants: Variants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

export const FinalQuizRenderer: React.FC<FinalQuizRendererProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const activeQuestion: QuizQuestion = payjoyQuizData[currentIdx];

  const handleStart = () => {
    setGameState('playing');
    setCurrentIdx(0);
    setSelectedAns(null);
    setScore(0);
  };

  const handleSelectAnswer = (option: string) => {
    if (selectedAns !== null) return; // Prevent multiple clicks
    setSelectedAns(option);
    const isCorr = option === activeQuestion.correctAnswer;
    if (isCorr) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < payjoyQuizData.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAns(null);
    } else {
      setGameState('result');
    }
  };

  const percentCorrect = Math.round((score / payjoyQuizData.length) * 100);
  const isPassed = score >= 14; // 70% threshold

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <AnimatePresence mode="wait">
        
        {/* INTRO SCREEN */}
        {gameState === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="full-layout"
            style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <BookOpen size={100} strokeWidth={1} style={{ color: 'var(--accent-orange)' }} />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle, rgba(255, 103, 0, 0.15) 0%, transparent 70%)',
                filter: 'blur(10px)',
                zIndex: -1
              }} />
            </div>

            <h2 className="gradient-text-orange" style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
              Teste de Certificação PayJoy
            </h2>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
              Você concluiu os slides do treinamento! Agora é a hora de validar seus conhecimentos. O quiz contém **20 questões** dinâmicas sobre processos, segurança e quebra de objeções.
            </p>

            <div className="quiz-intro-stats" style={{ 
              backgroundColor: 'var(--bg-alt)', 
              padding: '20px 30px', 
              borderRadius: '12px', 
              marginBottom: '40px',
              border: '1px solid rgba(0,0,0,0.05)',
              fontSize: '0.95rem'
            }}>
              <div><strong>Total de questões:</strong> 20</div>
              <div style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '30px' }}>
                <strong>Nota mínima para passar:</strong> 70% (14 corretas)
              </div>
            </div>

            <div className="closing-cards-container" style={{ gap: '16px' }}>
              <button 
                onClick={onClose}
                style={{
                  padding: '14px 28px',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Voltar aos Slides
              </button>
              
              <button 
                onClick={handleStart}
                style={{
                  padding: '14px 36px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: 'var(--accent-orange)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: '0 8px 20px rgba(255, 103, 0, 0.25)'
                }}
              >
                Iniciar Teste
              </button>
            </div>
          </motion.div>
        )}

        {/* PLAYING SCREEN */}
        {gameState === 'playing' && (
          <motion.div 
            key={currentIdx}
            variants={quizVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="full-layout"
            style={{ justifyContent: 'space-between', padding: '3.5rem 5rem' }}
          >
            {/* Header progress info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Questão {currentIdx + 1} de {payjoyQuizData.length}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '250px' }}>
                <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--bg-alt)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${((currentIdx + 1) / payjoyQuizData.length) * 100}%`, 
                    background: 'linear-gradient(90deg, var(--accent-orange) 0%, var(--accent-purple) 100%)' 
                  }} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>
                  {Math.round(((currentIdx + 1) / payjoyQuizData.length) * 100)}%
                </span>
              </div>
            </div>

            {/* Core Question & Layout */}
            <div className="split-layout" style={{ flex: 1, gap: '40px', alignItems: 'center', margin: '0' }}>
              {/* Question & Options Left */}
              <div className="quiz-question-column">
                <h3 style={{ fontSize: '1.65rem', color: 'var(--text-dark)', lineHeight: '1.3', fontWeight: 700 }}>
                  {activeQuestion.question}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeQuestion.options.map((opt, oIdx) => {
                    const isSelected = selectedAns === opt;
                    const isCorrectChoice = opt === activeQuestion.correctAnswer;
                    const hasSelectedAny = selectedAns !== null;

                    let borderColor = 'rgba(0, 0, 0, 0.08)';
                    let bgStyle = '#ffffff';
                    
                    if (hasSelectedAny) {
                      if (isCorrectChoice) {
                        borderColor = 'var(--accent-green)';
                        bgStyle = '#ecfdf5';
                      } else if (isSelected) {
                        borderColor = '#f87171';
                        bgStyle = '#fef2f2';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectAnswer(opt)}
                        disabled={hasSelectedAny}
                        style={{
                          padding: '14px 18px',
                          borderRadius: '10px',
                          border: `2px solid ${borderColor}`,
                          backgroundColor: bgStyle,
                          textAlign: 'left',
                          cursor: hasSelectedAny ? 'default' : 'pointer',
                          fontSize: '0.88rem',
                          lineHeight: '1.4',
                          fontWeight: isSelected || (hasSelectedAny && isCorrectChoice) ? 600 : 500,
                          color: hasSelectedAny && !isSelected && !isCorrectChoice ? 'var(--text-light)' : 'var(--text-dark)',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          opacity: hasSelectedAny && !isSelected && !isCorrectChoice ? 0.6 : 1
                        }}
                      >
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: isSelected || (hasSelectedAny && isCorrectChoice) ? 
                            (isCorrectChoice ? 'var(--accent-green)' : '#f87171') : 'var(--bg-alt)',
                          color: isSelected || (hasSelectedAny && isCorrectChoice) ? '#ffffff' : 'var(--text-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + oIdx)}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback & Explanation Right */}
              <div className="quiz-explanation-column">
                {selectedAns === null ? (
                  <div style={{ textAlign: 'center', opacity: 0.4 }}>
                    <HelpCircle size={70} strokeWidth={1} style={{ color: 'var(--text-light)', margin: '0 auto 16px' }} />
                    <p style={{ fontSize: '0.9rem' }}>Selecione uma resposta ao lado para enviar.</p>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {selectedAns === activeQuestion.correctAnswer ? (
                        <>
                          <CheckCircle2 size={22} style={{ color: 'var(--accent-green)' }} />
                          <h4 style={{ color: 'var(--accent-green)', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Correto!</h4>
                        </>
                      ) : (
                        <>
                          <XCircle size={22} style={{ color: '#ef4444' }} />
                          <h4 style={{ color: '#ef4444', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Incorreto!</h4>
                        </>
                      )}
                    </div>

                    <div style={{
                      background: 'linear-gradient(135deg, #fefefc 0%, var(--bg-alt) 100%)',
                      borderLeft: `4px solid ${selectedAns === activeQuestion.correctAnswer ? 'var(--accent-green)' : 'var(--accent-orange)'}`,
                      padding: '16px 20px',
                      borderRadius: '0 8px 8px 0',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>Explicação:</h5>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: '1.45' }}>{activeQuestion.explanation}</p>
                    </div>

                    <button 
                      onClick={handleNext}
                      style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--text-dark)',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        alignSelf: 'flex-start',
                        boxShadow: 'var(--shadow-sm)',
                        marginTop: '10px'
                      }}
                    >
                      <span>{currentIdx === payjoyQuizData.length - 1 ? "Ver Resultado" : "Próxima Questão"}</span>
                      <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* RESULTS SCREEN */}
        {gameState === 'result' && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="full-layout"
            style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}
          >
            {isPassed ? (
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <Award size={100} strokeWidth={1} style={{ color: 'var(--accent-green)' }} />
                {/* Glowing backdrop */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  zIndex: -1
                }} />
              </div>
            ) : (
              <XCircle size={100} strokeWidth={1} style={{ color: '#ef4444', marginBottom: '24px' }} />
            )}

            <h2 className={isPassed ? "gradient-text-orange" : ""} style={{ fontSize: '2.8rem', color: isPassed ? undefined : '#ef4444', marginBottom: '16px' }}>
              {isPassed ? "Certificação Concluída!" : "Quase lá! Tente mais uma vez"}
            </h2>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '600px', marginBottom: '30px' }}>
              {isPassed 
                ? "Parabéns! Você alcançou o aproveitamento mínimo e está certificado no Crediário PayJoy pela Mi Place."
                : "Você não atingiu a pontuação mínima de 70% (14 acertos). Revise o conteúdo dos slides e tente o teste novamente."}
            </p>

            {/* Score box */}
            <div className="quiz-results-box">
              <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>Sua Pontuação</span>
              <h3 style={{ fontSize: '3rem', color: isPassed ? 'var(--accent-green)' : '#ef4444', fontWeight: 800 }}>
                {score} <span style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>/ {payjoyQuizData.length}</span>
              </h3>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: isPassed ? 'var(--accent-green)' : '#ef4444' }}>
                Aproveitamento: {percentCorrect}%
              </span>
            </div>

            <div className="closing-cards-container" style={{ gap: '16px' }}>
              <button 
                onClick={onClose}
                style={{
                  padding: '14px 28px',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Voltar aos Slides
              </button>

              <button 
                onClick={handleStart}
                style={{
                  padding: '14px 30px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: isPassed ? 'var(--accent-green)' : 'var(--accent-orange)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: isPassed ? '0 8px 20px rgba(16, 185, 129, 0.2)' : '0 8px 20px rgba(255, 103, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <RefreshCw size={16} />
                <span>{isPassed ? "Refazer Teste" : "Tentar Novamente"}</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
