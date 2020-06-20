import React from "react";
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from "react-native";
import ResultDetail from './ResultDetail'

const ResultList = props => {
  if(!props.results.length){
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
       <FlatList 
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={props.results}
        keyExtractor={results => results.id}
        renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=> props.navigation.navigate('ResultShowScreen',{
            id:item.id
          })}>
          <ResultDetail result={item} />
          </TouchableOpacity>
        )
        }}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:15,
    marginBottom:5
  },
  container:{
    marginBottom:10
  }

});

export default  ResultList;
