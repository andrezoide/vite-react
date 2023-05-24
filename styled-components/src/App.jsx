import { StyledButton, StyledButton2 } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper.style"

function App() {
  return (
    <Wrapper>
      {/* podemo passar propriedades para nossos styled components */}
      <StyledButton backgroundColor='blue'>teste</StyledButton>
      <StyledButton backgroundColor='green'>teste</StyledButton>
      <StyledButton backgroundColor='yellow'>teste</StyledButton>
      <StyledButton2>teste</StyledButton2>
      <a href='#'>clica</a>
    </Wrapper>

  )
}

export default App
