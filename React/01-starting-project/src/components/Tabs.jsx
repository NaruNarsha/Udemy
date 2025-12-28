export default function Tabs({ children, buttons, buttonsContainer  }){
    const ButtonsContainer = buttonsContainer || "div";
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}