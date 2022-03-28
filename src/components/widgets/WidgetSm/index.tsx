import { FC, useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import style from "./style.module.scss";

interface ICoin {
  symbol: string;
  amount: number;
  color: string;
  inCurrency: number;
}

export interface WidgetSmProps {
  data: ICoin[];
  title: string;
}

const WidgetSm: FC<WidgetSmProps> = ({
  data,
  title,
}) => {
  const initValue = {
    symbol: "",
    amount: 0,
    color: "",
    inCurrency: 0,
  };
  const [active, setActive] = useState<ICoin>(initValue);

  // Example value
  const width = 100;
  const half = width / 2;

  return (
    <div className={ style.body }>

      <div className={ style.wrapper }>
        <svg width={ width } height={ width }>
          <Group top={ half } left={ half }>
            <Pie
              data={ data }
              pieValue={ (data) => data.amount * data.inCurrency }
              outerRadius={ half }
              innerRadius={ ({ data }) => {
                const size = active && active.symbol === data.symbol ? 12 : 8;
                return half - size;
              } }
              padAngle={ 0.01 }
            >
              { (pie) => pie.arcs.map((arc) => (
                <g
                  key={ arc.data.symbol }
                  onMouseEnter={ () => setActive(arc.data) }
                  onMouseLeave={ () => setActive(initValue) }
                >
                  <path d={ pie.path(arc) } fill={ arc.data.color } />
                </g>
              )) }
            </Pie>

            { active ? (
              <>
                <Text textAnchor="middle" fill="#fff" fontSize={ 40 } dy={ -20 }>
                  { `$${Math.floor(active.amount * active.inCurrency)}` }
                </Text>

                <Text
                  textAnchor="middle"
                  fill={ active.color }
                  fontSize={ 20 }
                  dy={ 20 }
                >
                  { `${active.amount} ${active.symbol}` }
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="#fff" fontSize={ 40 } dy={ -20 }>
                  { `$${Math.floor(
                    data.reduce((acc, coin) => acc + coin.amount * coin.inCurrency, 0),
                  )}` }
                </Text>

                <Text textAnchor="middle" fill="#aaa" fontSize={ 20 } dy={ 20 }>
                  { `${data.length} Assets` }
                </Text>
              </>
            ) }
          </Group>
        </svg>
        <div className={ style.description }>
          <p className={ style.title }>{ title }</p>
          <div className={ style.description_wrapper }>
            <p className={ style.amount } />
          </div>
        </div>
      </div>

    </div>

  );
};

export default WidgetSm;
