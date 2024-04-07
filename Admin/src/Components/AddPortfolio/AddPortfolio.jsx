import React from 'react'
import './AddPortfolio.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const AddPortfolio = () => {

    const[image, setImage] = useState(false)
    const [portfolioDetails, setPortfolioDetails] = useState({
        name: "",
        image: "",
        category: "wedding",
        location: "",
        date: ""
    })

    const imageHandler = (e) =>{
        setImage(e.target.files[0])
    }

    const changeHandler =(e) =>{
        setPortfolioDetails({...portfolioDetails, [e.target.name]:e.target.value})
    }

    const addPortfolio = async () =>{
        console.log(portfolioDetails)
        let responseData
        let portfolio = portfolioDetails

        let formData = new FormData()
        formData.append('portfolio', image)

        await fetch('http://localhost:4000/upload', {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) =>{responseData=data})
        if(responseData.success){
            portfolio.image = responseData.image_url
            console.log(portfolio)
            await fetch('http://localhost:4000/addportfolio', {
                method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json"
            },
            body:JSON.stringify(portfolio),
            }).then((resp) =>resp.json()).then((data)=>{
                data.success?alert("New Portfolio Added"):alert("Failed to Upload")
            })
        }
    }

  return (
    <div className='add-portfolio'>
        <div className="addportfolio-itemfield">
            <p>Portfolio Title</p>
            <input value={portfolioDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="addportfolio-itemfield">
            <p>Location</p>
            <input value={portfolioDetails.location} onChange={changeHandler} type="text" name='location' placeholder='Type here'/>
        </div>
        <div className="addportfolio-itemfield">
            <p>Category</p>
            <select value={portfolioDetails.category} onChange={changeHandler} name="category" className="addportfolio-selector">
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="conference">Conference</option>
                <option value="concert">Concert</option>
            </select>
        </div>
        <div className="addportfolio-itemfield">
            <p>Date</p>
            <input value={portfolioDetails.date} onChange={changeHandler} type='date' name='date' placeholder='Type here'/>
        </div>
        <div className="addportfolio-itemfield">
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="addportfolio-thumnail-img" />
            </label>
            <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
        </div>
        <button onClick={() =>{addPortfolio()}} className='addportfolio-btn'>ADD</button>
    </div>
  )
}

export default AddPortfolio