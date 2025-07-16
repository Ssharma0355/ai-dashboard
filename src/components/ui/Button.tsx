"use client";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition cursor-pointer"
    >
      {children}
    </button>
  );
};
