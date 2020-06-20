import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from '../components/ResultList'

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMessage] = useResults([]);
  const filterResultByPrice = (price) =>{
     return results.filter(results =>{
        return results.price === price
     })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          SearchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
     
      <ScrollView>
      <ResultList results={filterResultByPrice('$')}   title="Cose Effective"
      navigation={navigation}
      />
      <ResultList results={filterResultByPrice('$$')}  title="big Prices" 
      navigation={navigation} />
      <ResultList results={filterResultByPrice('$$')} title="Big Spender" 
      navigation={navigation}/>
      <ResultList results={filterResultByPrice('$$')} title="Big Spender" 
      navigation={navigation}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
