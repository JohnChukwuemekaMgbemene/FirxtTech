import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion as M, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

export default function AuthPage() {
  const location = useLocation();
  const isSignup = location.pathname.includes('signup');
  const isForgot = location.pathname.includes('forgot-password');

  // Panel animation variants
  const panelVariants = {
    initial: (custom) => ({
      x: custom === 'left' ? '-100%' : '100%',
      opacity: 0,
      position: 'absolute',
    }),
    animate: {
      x: 0,
      opacity: 1,
      position: 'static',
      transition: { type: 'spring', stiffness: 70, damping: 20 },
    },
    exit: (custom) => ({
      x: custom === 'left' ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
      transition: { type: 'spring', stiffness: 70, damping: 20 },
    }),
  };

  // Determine what to show
  let formKey, formCustom, formComponent;
  let imageKey, imageCustom, showImage = true;

  if (isSignup) {
    formKey = 'form-left';
    formCustom = 'left';
    formComponent = <Signup />;
    imageKey = 'image-right';
    imageCustom = 'right';
  } else if (isForgot) {
    formKey = 'form-forgot';
    formCustom = 'right';
    formComponent = <ForgotPassword />;
    imageKey = 'image-left';
    imageCustom = 'left';
    // Optionally, set showImage = false; if you want to HIDE the image for ForgotPassword
    // showImage = false;
  } else {
    // login
    formKey = 'form-right';
    formCustom = 'right';
    formComponent = <Login />;
    imageKey = 'image-left';
    imageCustom = 'left';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 overflow-hidden">
      <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-lg overflow-hidden flex" style={{ minWidth: 700 }}>
        {/* Image Panel */}
        <AnimatePresence initial={false} mode="wait">
          {showImage && (
            <M.div
              key={imageKey}
              custom={imageCustom}
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`hidden md:flex md:w-2/3 items-center justify-center bg-blue-50 h-full z-10`}
              style={{ minWidth: 0 }}
            >
              <img
                src="/login-animate.svg"
                alt="Login Illustration"
                className="w-4/5 max-h-[400px] animate-bounce-slow"
              />
            </M.div>
          )}
        </AnimatePresence>
        {/* Form Panel */}
        <AnimatePresence initial={false} mode="wait">
          <M.div
            key={formKey}
            custom={formCustom}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full md:w-1/3 p-8 flex flex-col justify-center h-full bg-white z-20"
            style={{ minWidth: 0 }}
          >
            {formComponent}
          </M.div>
        </AnimatePresence>
        {/* Bounce animation */}
        <style>
          {`
            @keyframes bounce {
              0% { transform: translateY(0); }
              100% { transform: translateY(-20px); }
            }
            .animate-bounce-slow {
              animation: bounce 3s infinite alternate;
            }
          `}
        </style>
      </div>
    </div>
  );
}