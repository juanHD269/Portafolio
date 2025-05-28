// src/components/Toast.tsx
'use client';

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50 text-sm sm:text-base">
      {message}
    </div>
  );
}
