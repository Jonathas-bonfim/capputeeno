import { Navigation } from "../../components/Navigation";
import { ContainerCenter } from "../../components/Navigation/styles";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ContainerCenter>
        <Navigation />
      </ContainerCenter>
    </HomeContainer>
  )
}