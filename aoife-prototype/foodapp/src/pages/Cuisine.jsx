import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';


function Cuisine() {

    //const [cuisine, setCuisine] = useState([]);
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
            );
        const recipes = await data.json();
       // console.log(recipes.result);
       // console.log(recipes.results);
      // debugger;
        setCuisine(recipes.results);
       
    };

    useEffect(() => {
      getCuisine(params.type);
      console.log(params.type);
    }, [params.type]);



  return ( 
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Card>
            );
        })}
    </Grid>
  );



}



const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

/*
const Grid = styled.div`
    display: grid;
    grid-template-colums: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    `;
*/
    const Card = styled.div`
    img {
     width: 100%;
      border-radius: 2rem;
    }
    a{
       text-decoration: none;
    }
    h4{
        text-allign:centre;
        padding: 1rem;
    }
`;

export default Cuisine;