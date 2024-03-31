// import { DifferencePay } from "../DifferencePay.tsx/DifferencePay";
// import { EachPay } from "../EachPay/EachPay";
import { AmountHistory } from "../AmountHistory/AmountHistory";
import { FloatingAddButton } from "../FloatingAddButton/FloatingAddButton";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { styles } from "./style";


export const Home = () => {

  return (
    <div css={styles.container}>
      {/* <EachPay />
      <div css={styles.differenceBox}>
        <DifferencePay />
      </div> */}
      <HamburgerMenu />
      <AmountHistory />
      <FloatingAddButton />
    </div>
  );
};
