import { FC } from "react";
import style from "./style.module.scss";

export interface DashRoundProps {
  color: string;
}

const DashRound: FC<DashRoundProps> = ({
  color,
}) => (
  <div>
    Dash Round
  </div>

);

export default DashRound;
