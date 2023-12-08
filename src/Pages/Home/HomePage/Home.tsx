import { DifferencePay } from "../DifferencePay.tsx/DifferencePay";
import { EachPay } from "../EachPay/EachPay";
import { styles } from "./style";


export const Home = () => {
  return (
    <div css={styles.container}>
      <EachPay />
      <div css={styles.differenceBox}>
        <DifferencePay />
      </div>
    </div>
  );
};
