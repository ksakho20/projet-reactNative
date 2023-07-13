import React, { useState, useEffect }  from "react";
import { FlatList, Text, View, Image , TouchableOpacity} from 'react-native'

import axios from "axios";

import Data from '../../data.json';
import { URL } from '../../utils/constant/urls';

export default function Articles({ navigation }) {

    const [articles, setAticles] = useState([])

    useEffect(() => {
        const fetchAllArticles = async () => {
            const {data} = await axios.get(URL.fetchAllArticles);
            console.log(data['hydra:member']);
            setAticles(data['hydra:member']);
        };
        fetchAllArticles() 
    },[]);


    const renderItem= ( {item} ) =>{
        const {id, name, price, picture, content}=item
    
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Detail", {
                        id: id
                        
                    })
                
                }}
            >
                <View>
                    <Text> {name}</Text>
                    <Image 
                        source= {{uri:picture}}
                        style ={{
                            height:200,
                            width:200
                        }}
                
                />
                    <Text>{price} </Text>
                    <Text>{content}</Text>
            </View>
            </TouchableOpacity>
        
        )
    }

    return(
    <FlatList
        data={articles}
        keyExtractor={item =>item.id}
        renderItem={renderItem}

    />

    )
}

