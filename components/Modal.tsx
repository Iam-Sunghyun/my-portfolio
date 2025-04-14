import React from "react";

const Modal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null; // 이미지가 없으면 렌더링 안 함

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-999"
      onClick={onClose}
    >
      <div className="relative">
        {/* 닫기 버튼 */}
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
          onClick={onClose}
        >
          ❌
        </button>

        {/* 확대된 이미지 */}
        <img
          src={imageUrl}
          alt="Expanded View"
          className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Modal;
