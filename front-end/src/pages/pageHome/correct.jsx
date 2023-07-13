import { useState, useEffect } from "react"; // Pour utiliser les states & useEffect il faut importer les hooks "useState, useEffect" from react

import axios from "axios"; // Sans Axios on ne peut communiquer avec l'API

// SERVICE
import { URL } from "../../utils/constantes/url";

/**
 * @JSX
 * extension de javascript crée par React, utilise la syntaxe sous
 * forme de tags directement dans le code javascript,
 * ce qui permet de combiner HTML et JS facilement.
 * On peut appliquer des expressions javascript directement dans note JSX avec des accolades.
 */

/**
 * @Home
 * On a bien créer un composant Home pas home.
 * Par convention il faut mettre une majuscule à nos composants JSX !
 * function Home(){} ou const Home = () => {}
 */
const Home = () => {
  // arrow function

  /**
   * @useState
   * useState est un hook qui permet d’ajouter le state local React à des fonctions composants.
   * Le premier élément est la valeur actuelle, et le deuxième élément est une fonction qui permet de la modifier.
   */
  const [articles, setArticles] = useState([]);

  // const [articles,setArticles] = useState([]) TYPE ARRAY
  // const [articles,setArticles] = useState({}) TYPE OBJET
  // const [articles,setArticles] = useState(19290) TYPE NUMBER
  // const [articles,setArticles] = useState("Votre prenom") TYPE STRING

  /**
   * @useEffect
   * Ils nous permettent d'effectuer une action à un moment
   * donné du cycle de vie de nos composants.
   * useEffect nous permet d'effectuer notre effet une fois
   * le rendu du composant
   * terminé. Et comme  useEffect  est directement dans notre composant,
   * nous avons directement accès à notre state, à nos variables, nos props.
   * Pour décider précisément quand on veut déclencher un effet,
   * on peut utiliser
   * le tableau de dépendances. Il correspond au deuxième
   * paramètre passé à useEffect.
   */
  useEffect(() => {
    const fetchArticles = async () => {
      /**
       * @Destructuration Exemple const { data } = axios....
       * Permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet.
       */
      const { data } = await axios.get(`${URL.getAllArticles}`); // On appel l'url de type get de notre API qui nous permet de récupérer nos articles.
      setArticles(data["hydra:member"]); // On met à jour notre state article avec les données reçut de notre API.
    };
    fetchArticles();
  }, []); // =>>>>> Dépendances vide []

  /*
      Si vous voulez executer un effet uniquement après le premier render du composant, 
      il faut tout simplement renseigner un tableau de dépendances vide. []
    */

  return (
    <div>
      <h1>Page Article</h1>
      {articles.map((articles) => {
        return (
          <div key={articles.id}>
            <p>{articles.name}</p>
            <img src={articles.picture} alt="" width="100" />
            <p>{articles.price} €</p>
            <p>{articles.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Home;