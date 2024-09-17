import React from 'react';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={`fixed bottom-0 left-0 w-full bg-white py-2 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p className="text-gray-600 text-sm">Made in UK ❤️ 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;