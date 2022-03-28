import { FC } from "react";
import style from "./style.module.scss";

export interface MyButtonProps {
  color: string;
}

const MyButton: FC<MyButtonProps> = ({
  children,
  color,
}) => (
  <>
    <p className={ style.test }>Test</p>
    <button type="button" style={{ color }}>
      { children }
    </button>
  </>

);

export default MyButton;
