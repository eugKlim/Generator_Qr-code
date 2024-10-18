import React, { useRef, useEffect } from 'react';
import GenerateQr from '../components/GenerateQr';
import { DownloadImage } from '../components/DownloadImage';
import ButtonComponent from '../components/ButtonComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getQrHistoryStorage } from '../components/QrSlice';

const AllQrPage = () => {
  // for download qr
  const qrRef = useRef();
  const handleDownloadImage = (format) => {
    const svgElement = qrRef.current.querySelector('svg');
    DownloadImage(svgElement, format);
  };
  // /

  // getQr from localStorage
  const dispatch = useDispatch();
  const { qrHistoryStorage } = useSelector((state) => state.qrSlice);
  useEffect(() => {
    dispatch(getQrHistoryStorage());
  }, []);
  // /

  return (
    <div className="bg-dark pt-20 pb-40  grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-20 justify-items-center">
      {/* card */}
      {qrHistoryStorage.length != 0 ? (
        qrHistoryStorage.map((item, index) => (
          <div
            className="inline-block p-4 rounded-2xl w-96 bgGradient"
            key={index}
          >
            <div ref={qrRef}>
              <GenerateQr value={item} />
            </div>

            <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis my-8">
              Ссылка:
              <span className="italic font-normal"> {item}</span>
            </h2>

            <div className="flex flex-col space-y-5">
              <ButtonComponent event={() => handleDownloadImage('png')}>
                Download PNG <img src="image/png-icon.svg" alt="png ico" />
              </ButtonComponent>
              <ButtonComponent event={() => handleDownloadImage('svg')}>
                Download SVG <img src="image/svg-icon.svg" alt="svg ico" />
              </ButtonComponent>

              <ButtonComponent>
                DELETE
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
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </ButtonComponent>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-xl text-rose-500 uppercase">Нет сгенерированных Qr</h2>
      )}
      {/* /card */}
    </div>
  );
};

export default AllQrPage;
