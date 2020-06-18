import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from '../API/yelp'
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results,setResults]= useState([]);
  const [errorMessage,setErrorMessage]= useState('')

  const SearchApi = async (searchTerm) =>{
    try {
        const response= await yelp.get('/search',{
          params:{
            limit:50,
            term:searchTerm,
            location:'san jose'
          }
        })
        setResults(response.data.businesses)    
    } catch (err) {
      setErrorMessage('Somethink went Wrong')
    }
  }

  return (
    <View>
      <SearchBar term={term} 
      onTermChange={setTerm}
      onTermSubmit={()=>{
        SearchApi(term)
      }}
      />
      {errorMessage ?  <Text>{errorMessage}</Text> : null}
      <Text>We have Found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
