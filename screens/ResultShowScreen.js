import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp  from '../API/yelp'
const ResultShowScreen = props =>{
    const [result,setResult] = useState(null)
    const Id = props.route.params.id
    const getResult =async (id) =>{
      const response = await yelp.get(`/${id}`)
      setResult(response.data)
    }
    useEffect(()=>{
          getResult(Id)
    },[])
     
    if(!result){
        return null
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) =>{
              return (
                  <Image source={{uri:item}} style={styles.image} />
              )
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
   image:{
       height:200,
       width:300
   }
})

export default ResultShowScreen