import { Container, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { NButton } from "../../../common/NButton";
import { ChangeEvent, useState } from "react";
import { addLoan } from "../../../firebase/useAddLoan";
import { addLoanType } from "../../../types/addLoanType";
import { NTypo } from "../../../common/NTypo";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../BackButton";

export const Register = () => {

  const navigate = useNavigate();

  const [payUser, setPayUser] = useState<string>("自分");
  const [payMoney, setPayMoney] = useState<number>(0);
  const [payTime, setPayTime] = useState<Date>(new Date());
  const [payType, setPayType] = useState<string>("ご飯");

  const selectList = ['ご飯', '交通費', 'イベント', 'その他']

  const submitHandler = async() => {
    const formattedPayMoney = payUser == '自分' ? payMoney : -payMoney;
    const addDoc:addLoanType = {
      payUser: payUser,
      money: formattedPayMoney,
      payTime: payTime,
      payType: payType
    }

    try {
      await addLoan(addDoc);
      navigate('/');
    } catch (error) {
      console.error('Error getting documents: ', error);
      navigate(-1);
    }
  }

  const selectPayUser = (e:ChangeEvent<HTMLInputElement>) => {
    setPayUser(e.target.value);
  }

  const changePayMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setPayMoney(Number(e.target.value));
  }

  const changePayTime = (e: ChangeEvent<HTMLInputElement>) => {
    setPayTime(new Date(e.target.value));
  }

  const selectPayType = (e:SelectChangeEvent) => {
    setPayType(e.target.value);
  }

  return (
    <Container>
      <BackButton HeadTxt="登録"/>
      <Stack direction='column' spacing={3} sx={{  paddingTop:'7vh' }}>
        <RadioGroup row onChange={selectPayUser} sx={{ justifyContent: 'center' }} defaultValue={payUser}>
          <FormControlLabel value={"自分"} control={<Radio />} label={<NTypo>自分</NTypo>}/>
          <FormControlLabel value={"相手"} control={<Radio />} label={<NTypo>相手</NTypo>}/>
        </RadioGroup>
        <TextField label="借入金" type="number" onChange={changePayMoney} defaultValue={0}/>
        <TextField label="支払い日" type="date" InputLabelProps={{ shrink:true }} onChange={changePayTime} defaultValue={payTime.toLocaleDateString('sv-SE')}/>

        <Select value={payType} onChange={selectPayType}>
          {selectList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <NButton onClick={submitHandler} variant="contained">確定</NButton>
      </Stack>
    </Container>
  );
};
