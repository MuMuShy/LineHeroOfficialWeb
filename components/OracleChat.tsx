import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToOracle } from '../services/geminiService';
import { ChatMessage } from '../types';

const OracleChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: '歡迎來到 Line Hero！我是你的遊戲嚮導。想知道如何變強、或是關於這個世界的傳說嗎？' }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const stream = sendMessageToOracle(userMsg.text);
      let fullResponse = "";
      
      // Create a placeholder message for the model's response
      const modelMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '' }]);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId ? { ...msg, text: fullResponse } : msg
        ));
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "魔法連線似乎中斷了... 請稍後再試。",
        isError: true 
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      {/* Chat Window */}
      <div 
        className={`
          mb-4 bg-hero-panel/95 backdrop-blur-xl border border-hero-gold/30 shadow-2xl 
          w-[90vw] max-w-[350px] rounded-xl overflow-hidden transition-all duration-300 origin-bottom-right
          flex flex-col
          ${isOpen ? 'h-[450px] opacity-100 scale-100' : 'h-0 opacity-0 scale-90 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-hero-panel p-4 border-b border-hero-gold/20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-hero-gold/20 rounded-full flex items-center justify-center border border-hero-gold/50">
               <span className="text-hero-gold text-lg">🧙‍♂️</span>
            </div>
            <div>
               <span className="font-bold text-white block text-sm">遊戲嚮導</span>
               <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> 線上
               </span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-hero-gold text-black rounded-tr-none font-medium' 
                    : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                  }
                  ${msg.isError ? 'border-red-500/50 text-red-200' : ''}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isThinking && (
             <div className="flex justify-start">
               <div className="bg-white/5 px-4 py-2 rounded-xl rounded-tl-none text-xs text-gray-400 italic flex gap-1 items-center border border-white/5">
                  <span>正在翻閱冒險日誌</span>
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/40">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="詢問攻略..."
              className="w-full bg-gray-800/50 text-white border border-white/10 rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:border-hero-gold/50 transition-colors text-sm placeholder-gray-500"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isThinking}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-hero-gold disabled:opacity-30 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_14px_0_rgba(255,215,0,0.39)] transition-all duration-300 border-2 border-white/10
          ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-hero-gold hover:scale-110 animate-bounce'}
        `}
        aria-label="Toggle Oracle Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-2xl">🧙‍♂️</span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-hero-panel border border-hero-gold/30 text-hero-gold px-3 py-1.5 rounded-lg text-xs font-bold opacity-100 shadow-lg whitespace-nowrap pointer-events-none">
            有問題嗎？問問嚮導！
          </span>
        )}
      </button>
    </div>
  );
};

export default OracleChat;