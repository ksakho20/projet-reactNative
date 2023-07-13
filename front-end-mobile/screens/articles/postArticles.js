import { StyleSheet,View, Text, TextInput, Button } from "react-native";  
import React,{ useState, useEffect} from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { URL } from "../../utils/constant/urls";
import axios from "axios";

export default function PostArticles() {

    const [articles, setAticles] = useState({
        name: "",
        picture: "",
        price: 0,
        content: ""
    })

    const handleChange = (key,value) => {
        setAticles({...articles, [key] : value})

    }

    const handleSubmit =async () => {
        // request de type post
        await axios.post(URL.postArticle, {
            name: articles.name,
            picture: articles.picture,
            price: parseFloat(articles.price),
            descriptions: articles.content
        })
    }
    return (
        <>
            <View>
                <Text>Formulaire</Text> 
                <TextInput
                style={styles.input}
                    placeholder="name"
                    onChangeText={(value) => handleChange("name", value)}
                />


                <TextInput
                style={styles.input}
                    placeholder="price"
                    onChangeText={(value) => handleChange("price", value)}

                />

                <TextInput
                style={styles.input}
                    placeholder="content"
                    onChangeText={(value) => handleChange("content", value)}

                />

                <TextInput
                style={styles.input}
                    placeholder="url picture"
                    onChangeText={(value) => handleChange("picture", value)}

                />
                <Button 
                    onPress={handleSubmit}
                    title="valider"
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
    }
})