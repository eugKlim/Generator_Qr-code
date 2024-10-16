import React from 'react';
import { useSelector } from 'react-redux';
import GenerateQr from '../components/GenerateQr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GenerateMoreBtn = styled.button`
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
  const { inputValue } = useSelector((state) => state.qrSlice);

  const getUserText = sessionStorage.getItem('textInput');

  return (
    <div className="bg-dark centerBlock">
      <div className="bg-purple-900 p-9 rounded-2xl">
        {getUserText != null ? (
          <GenerateQr value={getUserText} />
        ) : (
          <img src="image/noQr.gif" alt="No qr code" />
        )}

        <div className="mt-6 mb-10">
          <div>
            {getUserText != null && getUserText.length != 0 ? (
              <h2 className="font-bold">
                Ваша ссылка:
                <span className="italic font-normal">{getUserText}</span>
              </h2>
            ) : (
              <p className="font-bold">Сгенерируйте qr code</p>
            )}
          </div>
        </div>

        <div className="">
          <GenerateMoreBtn
            onClick={() => navigate('/home')}
            className="uppercase px-20 py-10"
          >
            Сгенерировать еще
          </GenerateMoreBtn>
        </div>
      </div>
    </div>
  );
};

export default GetQrPage;
