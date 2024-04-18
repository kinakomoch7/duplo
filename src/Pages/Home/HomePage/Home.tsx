import { AmountDisplay } from "../AmountDisplay/AmountDisplay";
import { AmountHistory } from "../AmountHistory/AmountHistory";
import { FloatingAddButton } from "../FloatingAddButton/FloatingAddButton";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { styles } from "./style";


export const Home = () => {

  return (
    <div css={styles.container}>
      <HamburgerMenu />
      <AmountDisplay h='30vh'/>
      <AmountHistory h='50vh'/>
      <FloatingAddButton />
    </div>
  );
};
