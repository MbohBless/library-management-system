import fetch from 'node-fetch';

const getTermEmbeddings = async (query) => {
    const apiKey = process.env.EMBEDDING_KEY;
   
    const url = process.env.EMBEDDING_URL;
    console.log(query)
    console.log(JSON.stringify({ text: query }),)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ text: query }),
      }).then(async (res)=>await res.json())

      console.log(`THE RESPO: ${response}`)
    

    return response["embedding"];
};

export default getTermEmbeddings;
