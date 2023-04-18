import { useNavigate } from "react-router-dom";
import { ButtonNavigation } from "./styles";

export function ButtonBackNavigation() {
  const navigate = useNavigate()
  return (
    <ButtonNavigation
      onClick={() => navigate(-1)}
    >
      Voltar
    </ButtonNavigation>
  )
}