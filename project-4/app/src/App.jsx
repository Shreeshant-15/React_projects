import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

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
console.log(data);

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
   
        <SearchResult data={data || []}/>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 96%;
  max-width: none;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height:140px;
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

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 12px 16px;
`;

export const Button = styled.button`
  border: 1px solid red;
  border-radius: 5px;
  background: red;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
`;





