import { useState,useEffect } from "react";

const  Random_Quote_URL ="https://inspo-quotes-api.herokuapp.com/quotes/random"

function FetchQuote(){

  const [quote,setQuote] = useState(
    {
      text:'',
      author:''
    }
  )


  // useEffect(function(){
  //   async function getInitialQuote() {
  //     const res = await fetch(Random_Quote_URL);
  //     const jsonResponse = await res.json();
  //     const randomQuote = jsonResponse.quote;
  //     setQuote(randomQuote)
  //   }
  //   getInitialQuote();
  // },[])

  useEffect(
    ()=>{
      fetchQuote();
    },
  []
)

  async function fetchQuote() {

    const res = await fetch(Random_Quote_URL);
    const jsonResponse = await res.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);

  }

  return(

    <div>
      <h1>{quote.text}</h1>
      <h3>By - {quote.author}</h3>
      <button onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>

  )
}

export default FetchQuote;