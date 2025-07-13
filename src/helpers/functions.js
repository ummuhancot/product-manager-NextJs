import { resolve } from "styled-jsx/css";

export const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
