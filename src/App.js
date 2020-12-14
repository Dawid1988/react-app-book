import React, { useEffect, useState} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  const getData = () =>
    fetch("https://testbooksapi.azurewebsites.net/api/books")
      .then((res) => res.json())
      
  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div className="Row">
      <header className="App-header">
<div className="Col-4">
      <table className="table" >  
                <thead className="thead-dark">  
                    <tr>  
                        <th scope="col">Author</th>  
                        <th scope="col">Title</th>
                        <th scope="col">Price</th> 
                        <th scope="col">Genre</th> 
                        <th scope="col">Description</th> 
                    </tr>  
                </thead>  
                
                <tbody className="thead-dark">  

                {data?.map(item => {  
                        return <tr key={item.id}>  
                            <td className="text-muted">{item.author}</td>  
                            <td className="text-muted">{item.title}</td>  
                            <td className="text-muted">{item.price}$</td> 
                            <td className="text-muted">{item.genre}</td> 
                            <td className="text-muted">{item.description}</td> 
                        </tr>  
                    })}  
                    
                </tbody>  
            </table>  
            </div>
            </header>
      
    </div>
  );
}

export default App;
