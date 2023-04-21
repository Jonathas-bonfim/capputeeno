import { useNavigate } from "react-router-dom";
import { ButtonNavigation } from "./styles";

import backIMG from '../../assets/images/product/back.svg'

export function ButtonBackNavigation() {
  const navigate = useNavigate()
  return (
    <ButtonNavigation
      onClick={() => navigate(-1)}
    >
      <img src={backIMG} alt="Voltar" />
      Voltar
    </ButtonNavigation>
  )
}