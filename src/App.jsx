import React, { useState } from 'react'

function App() {
  const [product,setProduct]=useState([])

  const data = fetch('https://fakestoreapi.com/products')
  .then(response => {
    return response.json()
  })
  .then(jsonData => {
    console.log(jsonData)
    setProduct(jsonData)
  })
  .catch(err => {
    console.log(err);
  });

  return (
    <div>
      
      <div className="container mt-5">
    <h2 className="mb-4">Basic Bootstrap Table</h2>
    <table className="table">
      <thead class="table-dark">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
          {
            product.length>0?
product.map(item=>(

        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.category}</td>
          <td>
            <img src={item.image} height={200} alt="" />
          </td>
        </tr>
))

        :
        <h1> no data</h1>
          }
       
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default App
