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


                            <div key={Date.now() + Math.random()} className="players-container">
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