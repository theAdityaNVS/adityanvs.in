import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, AlertCircle, X, MessageCircle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';
import MagneticWrapper from './ui/MagneticWrapper';
import { error as logError } from '../utils/logger';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Nova, an AI assistant trained on this portfolio. Ask me anything about Aditya's skills, experience, or projects!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setHasError(false);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I'm thinking...",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Use logger to keep output consistent and toggleable
      logError('AI Error:', error);
      setHasError(true);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to my brain (Gemini API) right now. Please try again later or verify the API key.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Chat Window */}
      <div
        className={`
            mb-4 w-[350px] md:w-[400px] max-h-[600px] h-[70vh] flex flex-col
            rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl origin-bottom-right transition-all duration-300 ease-out
            ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'}
        `}
        style={{
          background: 'rgba(2, 6, 23, 0.65)',
          backdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Nova AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wide">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-slate-700 hidden' : 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10'
                }`}>
                {msg.role === 'model' && <Bot size={12} className="text-primary" />}
              </div>

              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-white/10 text-slate-100 rounded-bl-none border border-white/5'
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-slate-400 ml-8 text-xs">
              <Loader2 className="animate-spin" size={12} />
              <span>Nova is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/5 bg-white/5">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Aditya..."
              className="flex-1 bg-black/20 border border-white/10 rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:bg-black/40 transition-all"
              disabled={isLoading}

            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-1.5 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
          {hasError && !import.meta.env.VITE_GEMINI_API_KEY && (
            <div className="mt-2 text-[10px] text-red-400 flex items-center gap-1 justify-center">
              <AlertCircle size={10} />
              <span>API Key missing</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Toggle Button */}
      <MagneticWrapper strength={50}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
                relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)]
                ${isOpen
              ? 'bg-slate-800 text-slate-400 rotate-90'
              : 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-110'
            }
            `}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

          {/* Notification Dot if closed (optional logic could go here) */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[8px] items-center justify-center font-bold text-white border-2 border-darker">1</span>
            </span>
          )}
        </button>
      </MagneticWrapper>
    </div>
  );
};

export default AIAssistant;