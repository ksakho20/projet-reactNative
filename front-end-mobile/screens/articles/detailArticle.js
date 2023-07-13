import { View, Text, Image, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from "../../utils/constant/urls";

const DetailArticle = ({ route }) => {
  const [article, setArticle] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const { id } = route.params;

  const fetchArticle = async () => {
    try {
      const { data } = await axios.get(`${URL.fetchArticle}/${id}`);
      setArticle(data);
      setName(data.name);
      setPrice(data.price.toString());
      setContent(data.content);
    } catch (error) {
      console.log('Error fetching article:', error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  const handleUpdatePress = async () => {
    try {
      const updatedData = {
        name: name,
        picture: article.picture,
        price: parseFloat(price),
        content: content
      };
      await axios.put(`${URL.updateArticles}/${id}`, updatedData);
      console.log('Article modifié avec succès');
    } catch (error) {
      console.log('Error lors de la modification de mon article:', error);
    }
  };

  const handleDeletePress = async () => {
    try {
      await axios.delete(`${URL.deleteArticles}/${id}`);
      console.log('Article supprimé avec succès');
    } catch (error) {
      console.log('Error lors de la suppression de mon article:', error);
    }
  };

  if (!article) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Image source={{ uri: article.picture }} />
      <Text>{article.name}</Text>
      <Text>{article.price}</Text>
      <Text>Title: {article.title}</Text>
      <Text>Content: {article.content}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      <Button title="Update" onPress={handleUpdatePress} />
      <Button title="Delete" onPress={handleDeletePress} />
    </View>
  );
};

export default DetailArticle;
