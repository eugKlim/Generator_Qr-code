import React, { useRef } from 'react';
import GenerateQr from '../components/GenerateQr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GenerateMoreBtn = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  perspective: 30rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);

&::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: linear-gradient(
    320deg,
    rgba(0, 140, 255, 0.678),
    rgba(0, 255, 0, 0.308)
  );
  z-index: 1;
  transition: background 3s;
}

&:hover::before {
  animation: rotate 1s;
  transition: all 0.5s;
}

& img {
width: 40px;
margin-left: 10px;
}

@keyframes rotate {
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
`;

const GetQrPage = () => {
  const navigate = useNavigate();

  const getUserText = sessionStorage.getItem('textInput');

  // Для скачивания qr coda
  const qrRef = useRef(null);

  const downloadQRCode = (format) => {
    if (format === 'svg') {
      const svg = qrRef.current.querySelector('svg');
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrcode.svg';
        link.click();
      }
    } else if (format === 'png') {
      const svg = qrRef.current.querySelector('svg');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const svgData = new XMLSerializer().serializeToString(svg);

      const img = new Image();
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const png = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = png;
        link.download = 'qrcode.png';
        link.click();
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
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
          <img src="image/noQr.gif" alt="No qr code" className='mx-auto' />
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
          <GenerateMoreBtn
            onClick={() => navigate('/home')}
            className="uppercase px-20 py-10"
          >
            Сгенерировать еще
          </GenerateMoreBtn>

          {getUserText != null && getUserText.length != 0 ? (
            <>
              <GenerateMoreBtn onClick={() => downloadQRCode('png')}>
                Download PNG <img src="image/png-icon.svg" alt="png ico" />
              </GenerateMoreBtn>
              <GenerateMoreBtn onClick={() => downloadQRCode('svg')}>
                Download SVG <img src="image/svg-icon.svg" alt="svg ico" />
              </GenerateMoreBtn>
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
