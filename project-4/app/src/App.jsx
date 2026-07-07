import styles from ".styled-components";

const App = () => {
  return (
  <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>

      <div className="search">
    </TopContainer>
  </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;
const TopContainer = styled.div``;
