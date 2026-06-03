import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Handshake, 
  Smartphone, 
  Lock, 
  CreditCard, 
  FileText, 
  Wallet, 
  Award, 
  Bell, 
  ShieldCheck, 
  RefreshCw, 
  CheckSquare, 
  Eye, 
  DollarSign, 
  HelpCircle, 
  Info,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import type { Slide } from '../slides';

// Map icon strings to Lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  'handshake': Handshake,
  'smartphone': Smartphone,
  'lock': Lock,
  'credit-card': CreditCard,
  'file-text': FileText,
  'wallet': Wallet,
  'award': Award,
  'bell': Bell,
  'shield-check': ShieldCheck,
  'refresh-cw': RefreshCw,
  'check-square': CheckSquare,
  'eye': Eye,
  'dollar-sign': DollarSign,
  'help-circle': HelpCircle,
};

interface SlideRendererProps {
  slide: Slide;
}

// Animation configurations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, damping: 25, stiffness: 120 }
  }
};

const imageVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

// Colors associated with each step/card for color coding
const stepColors = [
  'var(--accent-orange)',
  'var(--accent-purple)',
  'var(--accent-green)',
  'var(--accent-blue)',
  'var(--text-dark)'
];

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const IconComponent = slide.illustration ? iconMap[slide.illustration] : null;

  // Quiz interactive state
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleOptionClick = (idx: number, correct: boolean) => {
    setSelectedIdx(idx);
    if (correct) {
      setShowSolution(true);
    }
  };

  const resetQuiz = () => {
    setSelectedIdx(null);
    setShowSolution(false);
  };

  switch (slide.type) {
    case 'title':
      return (
        <div className="split-layout">
          <motion.div 
            className="split-left bg-main split-60"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
              <span className="slide-tag">
                {slide.tag}
              </span>
            </motion.div>
            <motion.h1 
              variants={itemVariants} 
              className="gradient-text-orange"
              style={{ fontSize: '3.6rem', marginBottom: '24px' }}
            >
              {slide.title}
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '90%' }}>
              {slide.subtitle}
            </motion.p>
          </motion.div>

          <div className="split-right bg-alt split-40" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              variants={imageVariants} 
              initial="hidden" 
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
            >
              {IconComponent && <IconComponent size={180} strokeWidth={1} style={{ color: 'var(--accent-orange)', filter: 'drop-shadow(0 10px 20px rgba(255, 103, 0, 0.2))' }} />}
              
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 103, 0, 0.15) 0%, rgba(255, 103, 0, 0) 70%)',
                filter: 'blur(20px)',
                zIndex: -1
              }} />

              <div style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 103, 0, 0.15)',
                zIndex: -2,
                animation: 'spin 65s linear infinite'
              }} />
            </motion.div>
          </div>
        </div>
      );

    case 'split':
      return (
        <div className="split-layout">
          <div className="split-left bg-alt split-40" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              <Smartphone size={160} strokeWidth={1} style={{ color: 'var(--accent-purple)', filter: 'drop-shadow(0 10px 20px rgba(139, 92, 246, 0.15))' }} />
              
              <div style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 75%)',
                filter: 'blur(15px)',
                zIndex: -1
              }} />
              
              <div style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                transform: 'rotate(45deg)',
                borderRadius: '24px',
                zIndex: -2
              }} />
            </motion.div>
          </div>

          <motion.div 
            className="split-right bg-main split-60"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingRight: '12%' }}
          >
            <motion.h2 
              variants={itemVariants} 
              className="gradient-text-purple"
              style={{ fontSize: '2.8rem', marginBottom: '24px' }}
            >
              {slide.title}
            </motion.h2>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
              Vender no crediário é uma das nossas ferramentas mais poderosas para garantir que o cliente <strong style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent-orange)', textDecorationThickness: '3px' }}>não saia da loja de mãos vazias</strong>.
            </motion.p>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', lineHeight: '1.7', marginTop: '18px', color: 'var(--text-light)' }}>
              O PayJoy revolucionou o mercado ao permitir que pessoas sem limite no cartão de crédito conquistem o smartphone que desejam — de forma simples e acessível.
            </motion.p>
          </motion.div>
        </div>
      );

    case 'cards':
      return (
        <motion.div 
          className="full-layout"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="split-layout" style={{ height: 'auto', marginBottom: '30px' }}>
            <div style={{ flex: 1.5 }}>
              <motion.h2 variants={itemVariants} style={{ fontSize: '2.6rem', marginBottom: '12px' }}>{slide.title}</motion.h2>
              {slide.subtitle && <motion.p variants={itemVariants} style={{ fontSize: '1.15rem' }}>{slide.subtitle}</motion.p>}
            </div>
            {IconComponent && (
              <div style={{ flex: 0.5, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <motion.div variants={imageVariants} style={{ position: 'relative' }}>
                  <IconComponent size={80} strokeWidth={1} style={{ color: 'var(--accent-orange)', opacity: 0.8 }} />
                  <div style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 103, 0, 0.15) 0%, transparent 70%)',
                    zIndex: -1
                  }} />
                </motion.div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '24px', width: '100%', marginTop: '10px' }}>
            {slide.cards?.map((card, idx) => {
              const CardIcon = card.icon ? iconMap[card.icon] : null;
              const cardAccentColor = stepColors[idx % stepColors.length];

              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    borderTop: `6px solid ${cardAccentColor}`,
                    borderRadius: '12px',
                    padding: '36px 28px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {CardIcon ? (
                    <div style={{
                      background: `linear-gradient(135deg, ${cardAccentColor} 0%, rgba(255, 255, 255, 0.4) 100%)`,
                      color: '#ffffff',
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: `0 8px 16px rgba(0, 0, 0, 0.06)`
                    }}>
                      <CardIcon size={22} style={{ color: idx === 2 ? 'var(--text-dark)' : '#ffffff' }} />
                    </div>
                  ) : (
                    <div style={{
                      backgroundColor: cardAccentColor,
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      marginBottom: '20px',
                      boxShadow: `0 4px 8px rgba(0, 0, 0, 0.05)`
                    }}>
                      {idx + 1}
                    </div>
                  )}
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '14px', fontWeight: 700 }}>{card.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.6' }}>{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      );

    case 'timeline':
      return (
        <motion.div 
          className="full-layout"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2.6rem', marginBottom: '24px' }}>{slide.title}</motion.h2>
          
          <div style={{ position: 'relative', marginTop: '65px', marginBottom: '45px' }}>
            <svg 
              style={{
                position: 'absolute',
                top: '-40px',
                left: '2%',
                width: '96%',
                height: '50px',
                zIndex: 0
              }} 
              viewBox="0 0 1000 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent-orange)" />
                  <stop offset="25%" stopColor="var(--accent-purple)" />
                  <stop offset="50%" stopColor="var(--accent-green)" />
                  <stop offset="75%" stopColor="var(--accent-blue)" />
                  <stop offset="100%" stopColor="var(--text-dark)" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M 20 50 C 120 -20, 180 120, 270 50 C 370 -20, 430 120, 520 50 C 620 -20, 680 120, 770 50 C 870 -20, 930 120, 980 50" 
                fill="none" 
                stroke="url(#timeline-grad)" 
                strokeWidth="4"
                strokeDasharray="8 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
              <motion.circle 
                cx="20" 
                cy="50" 
                r="7" 
                fill="var(--accent-orange)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              />
            </svg>

            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
              {slide.steps?.map((step, idx) => {
                const stepColor = stepColors[idx % stepColors.length];
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '0 14px',
                      marginTop: idx % 2 === 1 ? '35px' : '0'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: stepColor,
                      color: '#fff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      marginBottom: '18px',
                      boxShadow: `0 6px 14px rgba(0, 0, 0, 0.08)`,
                      border: '2px solid #ffffff'
                    }}>
                      {idx + 1}
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: '1.45' }}>{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            style={{
              background: 'linear-gradient(135deg, #fff5f5 0%, #ffe3e3 100%)',
              borderLeft: '6px solid var(--accent-orange)',
              padding: '20px 24px',
              borderRadius: '0 12px 12px 0',
              marginTop: '45px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#b91c1c', margin: 0, lineHeight: '1.6' }}>
              <strong>Atenção:</strong> A ordem correta é fundamental para o sucesso e a segurança da operação. Nunca pule etapas — especialmente o recebimento da entrada <strong style={{ textDecoration: 'underline' }}>antes de abrir a caixa do aparelho</strong>.
            </p>
          </motion.div>
        </motion.div>
      );

    case 'tips':
      return (
        <div className="split-layout">
          <div className="split-left bg-alt split-35" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Award size={160} strokeWidth={1} style={{ color: 'var(--accent-orange)', filter: 'drop-shadow(0 10px 20px rgba(255, 103, 0, 0.15))' }} />
              
              <div style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 103, 0, 0.12) 0%, rgba(255, 103, 0, 0) 70%)',
                filter: 'blur(15px)',
                zIndex: -1
              }} />
              
              <div style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 103, 0, 0.1)',
                zIndex: -2
              }} />
            </motion.div>
          </div>

          <motion.div 
            className="split-right bg-main split-65"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingRight: '8%' }}
          >
            <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '32px' }}>{slide.title}</motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {slide.tips?.map((tip, idx) => {
                const tipColor = stepColors[idx % stepColors.length];

                return (
                  <motion.div 
                    key={tip.id} 
                    variants={itemVariants}
                    style={{ display: 'flex', alignItems: 'flex-start' }}
                  >
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: tipColor,
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '22px',
                      flexShrink: 0,
                      boxShadow: `0 6px 14px rgba(0, 0, 0, 0.05)`
                    }}>
                      {tip.id}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '8px', fontWeight: 700 }}>{tip.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.55' }}>{tip.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      );

    case 'objection1':
    case 'objection2':
      if (!slide.quiz) return null;
      return (
        <div className="split-layout">
          <motion.div 
            className="split-left split-55 bg-main"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ padding: '3rem 4rem 3rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <motion.span variants={itemVariants} style={{
                fontSize: '0.75rem',
                color: 'var(--text-light)',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '10px'
              }}>
                {slide.tag}
              </motion.span>
              <motion.h2 
                className={slide.type === 'objection1' ? 'gradient-text-orange' : 'gradient-text-purple'} 
                variants={itemVariants} 
                style={{ fontSize: '2.2rem', marginBottom: '20px' }}
              >
                {slide.title}
              </motion.h2>
              
              <motion.p variants={itemVariants} style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '16px' }}>
                {slide.quiz.question}
              </motion.p>
            </div>
            
            {/* Interactive Options list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              {slide.quiz.options.map((opt, idx) => {
                const isSelected = selectedIdx === idx;
                
                let borderColor = 'rgba(0, 0, 0, 0.08)';
                let bgStyle = '#ffffff';
                let iconEl = null;

                if (isSelected) {
                  borderColor = opt.isCorrect ? 'var(--accent-green)' : '#f87171';
                  bgStyle = opt.isCorrect ? '#ecfdf5' : '#fef2f2';
                  iconEl = opt.isCorrect ? 
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} /> : 
                    <XCircle size={18} style={{ color: '#f87171', flexShrink: 0 }} />;
                }

                return (
                  <motion.button
                    key={idx}
                    variants={itemVariants}
                    onClick={() => handleOptionClick(idx, opt.isCorrect)}
                    disabled={showSolution && !isSelected}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: `2px solid ${borderColor}`,
                      backgroundColor: bgStyle,
                      textAlign: 'left',
                      cursor: showSolution ? 'default' : 'pointer',
                      fontSize: '0.88rem',
                      lineHeight: '1.45',
                      fontWeight: isSelected ? 600 : 500,
                      color: isSelected ? 'var(--text-dark)' : 'var(--text-light)',
                      boxShadow: isSelected ? 'none' : '0 2px 6px rgba(0,0,0,0.02)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                    whileHover={showSolution ? {} : { x: 4, borderColor: 'var(--text-light)' }}
                  >
                    <span>{opt.text}</span>
                    {iconEl}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="split-right split-45"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ 
              justifyContent: 'center', 
              paddingLeft: '3rem', 
              paddingRight: '4rem',
              borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
              position: 'relative'
            }}
          >
            {!showSolution ? (
              <motion.div 
                variants={imageVariants} 
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                {slide.type === 'objection1' ? (
                  <HelpCircle size={90} strokeWidth={1} style={{ color: 'var(--accent-orange)', opacity: 0.3, margin: '0 auto 20px' }} />
                ) : (
                  <Bell size={90} strokeWidth={1} style={{ color: 'var(--accent-purple)', opacity: 0.3, margin: '0 auto 20px', animation: 'spin 180s linear infinite' }} />
                )}
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '10px' }}>Simulação Interativa</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  Selecione a resposta ideal sugerida no treinamento para desbloquear a resposta correta e a tática de vendas.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-green)' }} />
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Resposta Perfeita!
                  </h4>
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: '1.65', marginBottom: '24px' }}>
                  "{slide.quiz.correctAnswer}"
                </p>

                <div 
                  style={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                    borderLeft: '5px solid var(--accent-blue)',
                    padding: '18px 20px',
                    borderRadius: '0 8px 8px 0',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Info size={20} style={{ color: 'var(--accent-blue)', marginRight: '12px', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '0.85rem', color: '#1e40af', margin: 0, lineHeight: '1.5' }}>
                      <strong>Tática de Vendas:</strong> {slide.quiz.tactic}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={resetQuiz} 
                  style={{ 
                    padding: '8px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(0, 0, 0, 0.15)', 
                    background: '#ffffff', 
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  Refazer Simulação
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      );

    case 'objection_grid':
      return (
        <motion.div 
          className="full-layout"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} style={{
            fontSize: '0.75rem',
            color: 'var(--text-light)',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.05em',
            display: 'block',
            marginBottom: '10px'
          }}>
            {slide.tag}
          </motion.span>
          <motion.h2 className="gradient-text-purple" variants={itemVariants} style={{ fontSize: '2.6rem', marginBottom: '40px' }}>{slide.title}</motion.h2>

          <div style={{ display: 'flex', gap: '30px' }}>
            {slide.objections?.map((obj, idx) => {
              const ObjIcon = obj.icon ? iconMap[obj.icon] : null;
              const cardAccentColor = idx === 0 ? 'var(--accent-green)' : 'var(--accent-orange)';

              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    borderTop: `6px solid ${cardAccentColor}`,
                    padding: '40px 32px',
                    borderRadius: '12px',
                    flex: 1
                  }}
                >
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--text-dark)', 
                    marginBottom: '20px', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontWeight: 700
                  }}>
                    {ObjIcon && <ObjIcon size={24} style={{ marginRight: '14px', color: cardAccentColor }} />}
                    {obj.question}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.65' }}>
                    {obj.answer}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      );

    case 'closing':
      return (
        <div className="split-layout">
          <motion.div 
            className="split-left split-60"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="gradient-text-orange" variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{slide.title}</motion.h2>
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', marginBottom: '24px' }}>{slide.subtitle}</motion.p>
            
            <motion.div 
              variants={itemVariants}
              style={{
                borderLeft: '4px solid var(--accent-orange)',
                paddingLeft: '24px',
                marginBottom: '40px'
              }}
            >
              <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontStyle: 'italic', lineHeight: '1.55', fontWeight: 500 }}>
                "{slide.content}"
              </p>
            </motion.div>

            <div style={{ display: 'flex', gap: '16px' }}>
              {slide.closingCards?.map((card, idx) => {
                const CardIcon = card.icon ? iconMap[card.icon] : null;
                const cardAccentColor = stepColors[idx % stepColors.length];

                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      borderTop: `4px solid ${cardAccentColor}`,
                      padding: '20px',
                      borderRadius: '8px',
                      flex: 1,
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <h5 style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-dark)', 
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 700
                    }}>
                      {CardIcon && <CardIcon size={16} style={{ marginRight: '8px', color: cardAccentColor }} />}
                      {card.title}
                    </h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: '1.4' }}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="split-right bg-alt split-40" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Handshake size={140} strokeWidth={1} style={{ color: 'var(--accent-orange)', filter: 'drop-shadow(0 10px 20px rgba(255, 103, 0, 0.15))' }} />
              
              <div style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 103, 0, 0.12) 0%, rgba(255, 103, 0, 0) 70%)',
                filter: 'blur(15px)',
                zIndex: -1
              }} />
              
              <div style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                border: '1px dashed rgba(255, 103, 0, 0.15)',
                borderRadius: '50%',
                zIndex: -2,
                animation: 'spin 80s linear infinite'
              }} />
            </motion.div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
