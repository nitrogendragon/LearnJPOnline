import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'
import Pagination from './Pagination';
import './styles/appstyles.css'
function App() {
  //set to empty array by default so we can map over it 
  const [pokemon, setPokemon] = useState([]);
  // Now our currentPage's Url is stored, can be updated, and starts as the basic page of pokeapi
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  // By default we are going to set our application to be in a state of loading
  const [loading, setLoading] = useState(true)
  //This will ensure that everything only re-renders once in the case of something else in our app 
  // re-rendering itself seperately
  useEffect(() => {
    setLoading(true)// When we make a request we are loading
    let cancel //variable for cancelling actions upon making a new axios request
    axios.get(
      currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)}
    ).then(res => {
      setLoading(false)// when we have our data we set loading to false
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p))
    })

    return () => cancel() // cancels any other requests going on so we dont have a request race issue
  }, [currentPageUrl])/** every time CurrentPageUrl changes we re-render otherwise we never re-render*/





  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  //inline style for loading page
  
  if (loading) return <div class="centered-loading-screen">
     <div>loading...</div>
     <img src={require('./images/walking.gif')} alt="loading..."/>
     </div>
  return ( 
    <>
    {/* Prop Format is <<Function Name> <function variable/parameter>={<variable-from-this-file>} */}
    <PokemonList pokemonZ={pokemon}/>
    <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage: null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
