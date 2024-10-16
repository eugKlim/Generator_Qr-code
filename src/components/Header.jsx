import React from 'react';
import styled from 'styled-components';

const NavItem = styled.li`
cursor: pointer;

  &::before {
    margin-left: auto;
    margin-bottom: 6px;
  }
  &::after {
    margin-top: 6px;
  }
  &::after, &::before {
    content: '';
    
    width: 0%;
    height: 2px;
    background: rgb(234 88 12 / var(--tw-bg-opacity));
    display: block;
    transition: 0.5s;
    }
    
    &:hover::after, &:hover::before {
      width: 100%;
}
`;

const Header = () => {
  return (
    <div className="w-full p-6 bg-sky-700 bg-opacity-95 flex justify-between items-center flex-wrap">
      <h1 className="text-2xl font-KaushanScripts uppercase italic text-shadow-custom">
        <span className="text-rose-600 font-bold">Qr</span>Generator
      </h1>

      <nav>
        <ul className="flex items-center space-x-6 uppercase tracking-widest">
          <NavItem>На главную</NavItem>
          <span className="h-full text-gray-400 text-lg bold">|</span>
          <NavItem className="relative pr-5">
            Сохраненные Qr
            <span className="bg-orange-600 py-1 px-2 rounded-full -mt-10 inline-block absolute bottom-4 -right-2 ">
              0
            </span>
          </NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
