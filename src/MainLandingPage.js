import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

// import AnimationRevealPage from "../src/helpers/AnimationRevealPage.js";

import logo from '../src/images/logo-xtrading-text.svg';

export default () => {
  return (
    <div tw="flex flex-col justify-center justify-items-center content-center h-screen text-center font-sans">
      <h1><img src={logo} alt="XTrading" tw="w-48" /></h1>
      <p tw="mb-6">xTrading provides the best ways to manage assets and instantly invest <br />in AI-powered portfolios and strategies from global top leading traders and hedge funds. </p>
      <ul tw="list-none p-0 m-0">
        <li tw="mb-2">
          <a href="/login" tw="inline-block p-3 text-center no-underline bg-primary-500 text-white w-32">Login</a>
        </li>
        <li tw="mb-2">
          <a href="/signup"tw="inline-block p-3 text-center no-underline bg-primary-600 text-white w-32">Signup</a>
        </li>
        <li tw="mb-2">
          <a href="/myexchanges"tw="inline-block p-3 text-center no-underline bg-primary-700 text-white w-32">My Exchanges</a>
        </li>
        <li>
          <a href="/components"tw="inline-block p-3 text-center no-underline bg-primary-800 text-white w-32">Components</a>
        </li>
      </ul>
    </div>
  );
};
