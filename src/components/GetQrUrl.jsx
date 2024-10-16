import React, { useState } from 'react';

const GetQrUrl = () => {
  const [value, setValue] = useState('');

  return (
    <div className="min-w-80 xl:w-2/5 md:w-4/5 sm:w-full min-h-96 bg-orange-500 text-center relative left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-3xl bgGradient">
      <div className="w-full">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="p-5 rounded-xl w-4/5 mb-4 shadow-custom bg-white text-black text-xl"
          placeholder="URL"
        />

        <button
          className={`${
            value.length === 0
              ? 'bg-rose-600 opacity-45  cursor-not-allowed'
              : 'bg-green-700'
          } uppercase flex items-center py-5 px-14 font-bold rounded-xl m-auto shadow-custom`}
          disabled={value.length === 0}
        >
          <span className="mr-3">Сгенерировать QR</span>

          {value.length != 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default GetQrUrl;
