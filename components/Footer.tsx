import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61564219032805',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/linehero_rpg/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@linehero_rpg?hl=zh-tw',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.15 2a10.15 10.15 0 0 0-10.15 10.15 10.15 10.15 0 0 0 10.15 10.15 10.15 10.15 0 0 0 10.15-10.15A10.16 10.16 0 0 0 12.15 2Zm0 18.7a8.55 8.55 0 1 1 8.55-8.55 8.56 8.56 0 0 1-8.55 8.55Zm0-13.6a5.05 5.05 0 0 0-3.82 8.35 5.05 5.05 0 0 0 8.35-3.82 5.06 5.06 0 0 0-4.53-4.53Zm0 8.5a3.45 3.45 0 1 1 3.45-3.45 3.45 3.45 0 0 1-3.45 3.45Z"/>
           <path d="M12 6.5a5.5 5.5 0 1 0 5.5 5.5c0-1.5-.6-2.9-1.6-3.9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
           <path d="M16 12a4 4 0 1 1-4-4 4 4 0 0 1 4 4z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/76gSTeqtBw',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.3494 18.3494 0 00-5.4882 0 12.64 12.64 0 00-.6173-1.1588.0775.0775 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9667 19.9667 0 005.9937 3.0333.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.111 13.111 0 01-1.872-8.99.077.077 0 01-.0076-.1023c.372-.272.7462-.5658 1.1068-.8753a.077.077 0 01.0842-.008c3.6711 1.678 7.646 1.678 11.2856 0a.076.076 0 01.0847.008c.3643.3127.742.6083 1.118.8812a.077.077 0 01.0075.1017 13.063 13.063 0 01-1.885 8.978.0767.0767 0 00-.0406.1067c.3564.7025.771 1.3673 1.2342 2.0008a.0765.0765 0 00.0847.0272 19.8759 19.8759 0 006.0027-3.0273.077.077 0 00.0321-.0554c.532-5.4833-1.686-9.9863-3.838-13.6737a.0698.0698 0 00-.0306-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-1 mb-4">
               <span className="font-en-display text-2xl font-bold tracking-wide text-white">
                 LineHero
               </span>
               <span className="text-xl font-bold text-hero-gold font-sans">無盡冒險</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              重新定義線上冒險 RPG，
              <br/>
              在 LINE 聊天室中體驗純粹的文字 RPG 樂趣。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-hero-gold/30 inline-block pb-1">快速導覽</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('game-intro-line')} className="hover:text-hero-gold transition-colors text-left">LINE 玩法介紹</button></li>
              <li><button onClick={() => onNavigate('game-intro-web')} className="hover:text-hero-gold transition-colors text-left">Web 玩法介紹</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-hero-gold transition-colors text-left">商城 / 儲值</button></li>
              <li><button onClick={() => onNavigate('office-games')} className="hover:text-hero-gold transition-colors text-left">企業專案</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-hero-gold/30 inline-block pb-1">條款</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-hero-gold transition-colors text-left">隱私權政策</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-hero-gold transition-colors text-left">服務條款</button></li>
              <li><button onClick={() => onNavigate('refund')} className="hover:text-hero-gold transition-colors text-left">退款政策</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-hero-gold/30 inline-block pb-1">追蹤我們</h4>
            <div className="flex space-x-4">
               {socialLinks.map(link => (
                 <a 
                    key={link.name} 
                    href={link.url} 
                    aria-label={link.name}
                    title={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-hero-gold hover:text-black transition-colors text-white"
                  >
                   {link.icon}
                 </a>
               ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2025 LineHero Games. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-2">
            <span>Made in Taiwan</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Play on LINE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
