import React, { useEffect, useRef } from 'react';
import GenerateQr from '../components/GenerateQr';
import { useNavigate } from 'react-router-dom';
import { DownloadImage } from '../components/DownloadImage';
import ButtonComponent from '../components/ButtonComponent';
import { useDispatch } from 'react-redux';
import { setNewQrInStorage, setInputValue } from '../components/QrSlice';

const GetQrPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserText = sessionStorage.getItem('textInput');

  useEffect(() => {
    dispatch(setInputValue(getUserText));
    dispatch(setNewQrInStorage(getUserText));
  });

  // for download qr
  const qrRef = useRef();
  const handleDownloadImage = (format) => {
    const svgElement = qrRef.current.querySelector('svg');
    DownloadImage(svgElement, format);
  };
  // /

  return (
    <div className="bg-dark centerBlock">
      <div className="bg-purple-900 p-9 rounded-2xl w-96">
        {getUserText != null ? (
          <div ref={qrRef}>
            <GenerateQr value={getUserText} />
          </div>
        ) : (
          <img src="image/noQr.gif" alt="No qr code" className="mx-auto" />
        )}

        <div className="mt-6 mb-10">
          <div>
            {getUserText != null && getUserText.length != 0 ? (
              <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                Ваша ссылка:
                <span className="italic font-normal"> {getUserText}</span>
              </h2>
            ) : (
              <p className="font-bold">Сгенерируйте qr code</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <ButtonComponent
            event={() => navigate('/home')}
            className="uppercase px-20 py-10"
          >
            Сгенерировать еще
          </ButtonComponent>

          {getUserText != null && getUserText.length != 0 ? (
            <>
              <ButtonComponent event={() => handleDownloadImage('png')}>
                Download PNG <img src="image/png-icon.svg" alt="png ico" />
              </ButtonComponent>
              <ButtonComponent event={() => handleDownloadImage('svg')}>
                Download SVG <img src="image/svg-icon.svg" alt="svg ico" />
              </ButtonComponent>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQrPage;
