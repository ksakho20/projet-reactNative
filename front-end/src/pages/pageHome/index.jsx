import axios from 'axios';  
import React from 'react';
import { useEffect } from 'react';
import { URl } from "../../utils/constantes/urls"
import { useEffect } from 'react';
function Home() {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try{
            const {data} = await axios.get(URl.getAllArticles);
            setArticles(data["hydra:member"]);
            }catch(error){
                console.log(error);
            }
        }
        fetchArticles();
    },[]);

    return (
        <div>
            <h1>Page Home</h1>
            {articles.map(article => {
                return (
                    <div key={article.id}>
                        <p>{article.name}</p>
                        <img src={article.picture} alt= '' width={200}/>
                        <p>{article.description}</p>
                        <p>{article.price}</p> 
                    </div>
                )
            })}
        </div>
    );
}
export default Home