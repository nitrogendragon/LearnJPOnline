import React from 'react'

export default function ForsmPracticeComponent(props) {
    return (
        <main>
            <form>
                <input placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange}/><br/>
                <input placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.handleChange}/><br/>
                <input placeholder="Age" name="age" onChange={props.handleChange} value = {props.age} /><br/>
                <label>
                <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={props.gender==="male"}></input> Male
                </label>
                <br/>
                <label>
                <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={props.gender==="female"}></input> Female
                </label>
                <br/>

                <select value={props.destination} onChange ={props.handleChange} name="destination">
                    <option value="">--Choose a destination--</option>
                    <option value="iowa">Iowa</option>
                    <option value="texas">Texas</option>
                    <option value="mississippi">Mississippi</option>
                    <option value="louisiana">Louisiana</option>
                </select>
                <br></br>
                <label>
                    <input type="checkbox" onChange={props.handleChange} checked = {props.isVegan} name="isVegan"></input> Vegan?
                </label>
                <label>
                    <input type="checkbox" onChange={props.handleChange} checked = {props.isKosher} name="isKosher"></input> Kosher?
                </label>
                <label>
                    <input type="checkbox" onChange={props.handleChange} checked = {props.isLactoseIntolerant} name="isLactoseIntolerant"></input> LactoseIntolerant?
                </label>

                <hr></hr>
                <h1></h1>
                <h1>Your destination: {props.destination}</h1>
                <h1>Your dietary restrictions: </h1>
                <h2>Vegan? {props.isVegan ? "Yes" : "No"}</h2>
                <h2>Kosher? {props.isKosher ? "Yes" : "No"}</h2>
                <h2>LactoseIntolerant? {props.isLactoseIntolerant ? "Yes" : "No"}</h2>
                <h1>Your age: {props.age}</h1>
                <h1>Your name: {props.firstName} {props.lastName}</h1>
                <h1>Your gender: {props.gender}</h1>
                <button >Submit</button>
            </form>
        </main>
    )
}

