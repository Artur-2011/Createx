import React, { useRef } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick, wrap }) => {
  const contentRef = useRef(null);
  const height = isOpen ? contentRef.current.scrollHeight : 0;
  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className='texts'>
          <p style={{ color: 'var(--primary)' }}>{title}</p><p style={{ color: isOpen ? 'var(--primary)' : null }}>{wrap}</p>
        </h3>
        <span className="icon">
          {isOpen ? '—' : '+'}
        </span>
      </div>

      <div
        className="accordion-content"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className="accordion-content-inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;