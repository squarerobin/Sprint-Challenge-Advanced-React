import React from 'react';
import "./Players.css"
import axios from 'axios';
import NavBar from "./Navbar"
import { useDarkMode } from "../hooks/useDarkMode"



class Players extends React.Component {

    constructor() {

        super()
        this.state = {

            players: []

        }

    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                this.setState({
                    players: res.data
                })

                console.log(res.data)
            })
            //.then(players => this.setState({ women: playes.message }))
            .catch(err => console.log("noooo"));

    }






    render() {


        return (


            <div className="players">

                <NavBar />


                {
                    this.state.players.map(player => {
                        return (

                           // I researched the best way (best practice) for using key prop: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
                           // We are supposed to use a unique id already present in the API if possible so:

                            <div key={player.id} className="players-container">
                                <p>Name: {player.name}</p>
                                <p>Country: {player.country}</p>
                                <p>Searches: {player.searches}</p>

                            </div>

                        )

                    })

                }
            </div>
        )








    }

}




export default Players