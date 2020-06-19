import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from '../components/ResultList'

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) =>{
     return results.filter(results =>{
        return results.price === price
     })
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          SearchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have Found {results.length} results</Text>
      <ResultList results={filterResultByPrice('$')}    title="Cose Effective" />
      <ResultList results={filterResultByPrice('$$')}  title="big Prices" />
      <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
