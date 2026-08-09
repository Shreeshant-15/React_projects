import styled from "styled-components";
import React, { useState } from "react";

const BASE_URL = "https://localhost:9000/";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
   
   useEffect(() => {
    const fetchFoodData = async () => {
    setLoading(true);

    try{
      const response = await fetch(BASE_URL);

      const json = await response.json();

      setData(json);
      setLoading(false);

    }catch(error){
      setError("Unable to fetch data");
    }
   };
   fetchFoodData();
  }, []);


   if(error) return <div>{error}</div>;
   if(loading) return <div>Loading...</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>

      </FilterContainer>
      <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>

    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width:1200px;
  margin:0 auto;
`;
const TopContainer = styled.div`
  min-height:140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;

  .search{
    input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding:0 10px;
   }
  }
`;

const FilterContainer = styled.section`
  display:flex;
  justify-content:center;
  gap:12px;
  padding-bottom:40px;
`;

const Button = styled.button`
  background:#ff4343;
  border-radius:5px;
  padding:6px 12px;
  border:none;
  color:white;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const FoodCards = styled.div``;