import { QRCodeSVG } from 'qrcode.react';

const GenerateQr = () => {
  return (
    <div className="ml-10">
      <div className="bg-teal-300 p-6 inline-block">
        <QRCodeSVG value={value} />
      </div>
    </div>
  );
};

export default GenerateQr;
