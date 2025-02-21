import React from 'react';

type ContainerFormProps = {
  title?: string;
  children: React.ReactNode;
};

const ContainerForm = ({ title, children }: ContainerFormProps) => {
  return (
    <div className="w-full bg-white p-4 rounded-sm shadow-lg">
      {title && (
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default ContainerForm;
