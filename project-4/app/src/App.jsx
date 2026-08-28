import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");
  
   
   useEffect(() => {
    const fetchFoodData = async () => {
    setLoading(true);

    try{
      const response = await fetch(BASE_URL);

      const json = await response.json();

      setData(json);
      setFilteredData(json);
      setLoading(false);

    }catch(error){
      setError("Unable to fetch data");
    }
   };
   fetchFoodData();
  }, []);
  
  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();

    if (searchValue === "") {
      setFilteredData(data);
      return;
    }

    const filteredFood = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(filteredFood ?? []);
  };


    const filterFood = (category) => {
      if(category === "all"){
        setFilteredData(data);
        setSelectedBtn("all");
        return;
      }

      const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(category.toLowerCase())
      );
      
      setFilteredData(filter ?? []);
      setSelectedBtn(category);
    };

    const filterBtn = [
      {
        name: "All",
        type: "all",
      },
      {
        name: "Breakfast",
        type: "breakfast",
      },
      {
        name: "Lunch",
        type: "lunch",
      },
      {
        name: "Dinner",
        type: "dinner",
      }
    ];


   if(error) return <div>{error}</div>;
   if(loading) return <div>loading...</div>;

  return (
  <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((btn) => (
          <Button 
            isSelected={selectedBtn === btn.type}
          onClick={() => filterFood(btn.type)} key={btn.type}>
            {btn.name}
          </Button>
        ))}
      </FilterContainer>
   
    </Container>
        <SearchResult data={filteredData}/>
  
  </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
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
    &::placeholder{
      color:white;
      }

   }
  }
   @media (0 < width < 600px){
    flex-direction:column;
    height: 120px;

   }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 12px 16px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background:${({isSelected})=> (isSelected ? "#f22f2f" : "#ff4343" ) } ;
  outline: 1px solid ${({isSelected})=> (isSelected ? "white" : "#ff4343" ) } ;
  color: white;
  cursor: pointer;
  padding: 6px 16px;
  &:hover {
    background-color: #f22f2f;
    }

`;





