
export const ToFormatDate = (date: Date) => {

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // const hour = date.getHours();
  // const minute = date.getMinutes();

  
  return `${year}年${month}月${day}日`
}
