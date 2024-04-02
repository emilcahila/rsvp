import React, { useEffect, useRef } from 'react';

type ModalContent = {
  title: string;
  content: string;
};

const Modal: React.FC<{ content: ModalContent; closeModal: () => void }> = ({
  content,
  closeModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-black/50">
      <div ref={modalRef} className="rounded-lg bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">{content.title}</h2>
        <p className="mb-4">{content.content}</p>
        <button
          onClick={() => closeModal()}
          className="mx-auto rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { Modal };
