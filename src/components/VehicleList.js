import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"


const GET_ALL_VEHICLES = gql`
    {
        getVehicle {
            id
            make
            model
            year
            photoUrl
            createdAt
        }
    }
`


const VehicleList = () => (
	<Query query={GET_ALL_VEHICLES}>
		{({ loading, error, data }) => {
			if (loading) return <h1>Loading...</h1>
			if (error) return <h2>404. Looks like API is down!</h2>
			return data.getVehicle.map(({ id, year, make, model, photoUrl, createdAt }) => (
                <div class="card-container">
                    <div class="card" key={id}>
                        <img src={photoUrl} width="300" height="200"></img>
                        <div class="container">
                        <h3>{year + " " + make + " " + model}</h3>
                        <p><b>Vehicle ID:</b> {id}</p>
                        <p><b>Created Date:</b> {createdAt}</p>
                        </div>
				    </div>
                </div>
			))
		}}
	</Query>
)

export default VehicleList