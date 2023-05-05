import { useState } from "react";
import LoadImg from "../../public/img/loading.png"
import { Container, LoadImage } from "./Load.styles";

interface loadProps{
  loadwin:boolean,
}

export const Load : React.FC<loadProps>=({loadwin})=>{

  return(
      <Container style={loadwin === true?{display:"flex"}:{display:"none"}}>
        <LoadImage src={LoadImg}/>
      </Container>
  );
};