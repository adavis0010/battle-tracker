import React, { Component } from "react";
import '../App.css';
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios';
import PopUp from "./PopUp";

class AddCreature extends Component {
    constructor(props){
        super(props)
        this.state = {
            container: false,
            search: false,
            custom: false,
            input: '',
            customName: '',
            customHP: '',
            players: [],
            enemies: [],
            whatRow: ''
        }
    }

    playerValues () {
        let values = {
            'name': this.state.customName,
            'hp': this.state.customHP,
        };
        let transferArray = this.state.players;
        transferArray.push(values)
        this.setState({
            players: transferArray
        });
    }

    enemyValues () {
        let values = {
            'name': this.state.customName,
            'hp': this.state.customHP,
        };
        let transferArray = this.state.enemies;
        transferArray.push(values)
        this.setState({
            enemies: transferArray
        });
    }

    render(){

    // ------------------------------------------------PLAYER CONTENT--------------------------------------------------------
    let mappedPlayers =  this.state.players.map((player,index)=>
    <div key={index}>
            <div className='added-creature'>
                <h4>{player.name}</h4>
                <button id='plus-button'>+</button>
                <h2>{player.hp} HP</h2>
                <button id='minus-button'>-</button>
                <Dropdown>
                    <Dropdown.Toggle varient='success' id='options-button'>
                        ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='options-button'>
                        <Dropdown.Item>
                            <PopUp/>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Delete
                        </Dropdown.Item>                            
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)

//------------------------------------------------ENEMIES CONTENT--------------------------------------------------------
let mappedEnemies = this.state.enemies.map((enemies,index)=>
<div key={index}>
            <div className='added-creature'>
                <h4>{enemies.name}</h4>
                <button id='plus-button'>+</button>
                <h2>{enemies.hp} HP</h2>
                <button id='minus-button'>-</button>
                <Dropdown>
                    <Dropdown.Toggle varient='success' id='options-button'>
                        ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='options-button'>
                        <Dropdown.Item href='#/action-1'>
                            Add Status Effect
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>
                            Delete
                        </Dropdown.Item>                            
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)

//--------------------------------------------------------DISPLAY------------------------------------------------------------
let lowercase = this.state.input.toLowerCase()
let playerDisplay;

if (this.state.search&&!this.state.custom){
    playerDisplay=
    
//////PLAYER API INPUT//////
        
        <div className='mm-search-state'>
            <input placeholder='Monster Manual' onChange={e => this.setState({
                input: e.target.value
                })
                }>
            </input>
        <button onClick={()=>{axios.get(`https://www.dnd5eapi.co/api/monsters/${lowercase}`).then(response=> {this.setState({
                customName: response.data.name,
                customHP: response.data.hit_points,
                search: false,
                container: false,
                }, this.playerValues);
            });
            }}>Search</button>
        </div>

//////PLAYER CUSTOM INPUT(wip)//////

    } else if (this.state.custom&&!this.state.search){
        playerDisplay=<div className='custom-search-state'>
        <input onChange={e => this.setState({
                input: e.target.value
                })}>           
            </input>
        <button onClick={()=>(response=>{this.setState({
                foundCreature: response.data,
                custom: false,
                })
            })}>Add</button>
        </div>
    }

//////ENEMY API INPUT//////
    let enemyDisplay;
    if (this.state.search&&!this.state.custom){
        enemyDisplay=          
            <div className='mm-search-state'>
                <input placeholder='Monster Manual' onChange={e => this.setState({
                    input: e.target.value
                    })
                    }>
                </input>
            <button onClick={()=>{axios.get(`https://www.dnd5eapi.co/api/monsters/${lowercase}`).then(response=> {this.setState({
                    customName: response.data.name,
                    customHP: response.data.hit_points,
                    search: false,
                    container: false,
                    }, this.enemyValues);
                });
                }}>Search</button>
            </div>
    
//////ENEMY CUSTOM INPUT(wip)//////  
        } else if (this.state.custom&&!this.state.search){
            playerDisplay=<div className='custom-search-state'>
            <input onChange={e => this.setState({
                    input: e.target.value
                    })}>           
                </input>
            <button onClick={()=>(response=>{this.setState({
                    foundCreature: response.data,
                    custom: false,
                    })
                })}>Add</button>
            </div>
        }
    
    return (
        <div className='add-creature'>
{/* --------------------------------------PLAYER COLUMN CONDITIONAL RENDERING-------------------------------------------- */}
            <div className='add-players'>
                <h1>Players</h1>
                {this.state.container&&this.state.whatRow ==='players' ? <div className='added-creature'>
                    {playerDisplay}                  
                </div>:''}
                    {this.state.players.length>0&&<div>
                        {mappedPlayers}
                    </div>}
                    <div className='add-button-holder'>
                    <Dropdown>
                            <Dropdown.Toggle varient='success' id='add-button'>
                                +
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='add-button'>
                                <Dropdown.Item as='button'>
                                <div onClick={()=>this.setState({
                                    search: !this.state.search,
                                    container:true,
                                    custom: false,
                                    whatRow: 'players'
                                })}>
                                    Search Monster Manual
                                </div>
                                </Dropdown.Item>
                                <Dropdown.Item as='button'>
                                <div>
                                    Search saved creatures
                                </div>
                                </Dropdown.Item>                            
                                <Dropdown.Item as='button'>
                                <div onClick={()=>this.setState({
                                    search: false,
                                    container:true,
                                    custom: !this.state.custom,
                                    whatRow: 'players'
                                })}>
                                    New custom creature
                                </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
                    </div>
            </div>

{/*--------------------------------------ENEMIES COLUMN CONDITIONAL RENDERING---------------------------------------------*/}
            <div className='add-enemies'>
                <h1>Enemies</h1>
                {this.state.container&&this.state.whatRow ==='enemies' ? <div className='added-creature'>
                    {enemyDisplay}     
                </div>:''}
                {this.state.enemies.length>0&&<div>
                    {mappedEnemies}
                </div>}
                <div className='add-button-holder'>
                <Dropdown>
                        <Dropdown.Toggle varient='success' id='add-button'>
                            +
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='add-button'>
                            <Dropdown.Item as='button'>
                            <div onClick={()=>this.setState({
                                search: !this.state.search,
                                container:true,
                                custom: false,
                                whatRow: 'enemies',
                            })}>
                                Search Monster Manual
                            </div>
                            </Dropdown.Item>
                            <Dropdown.Item as='button'>
                            <div>
                                Search saved creatures
                            </div>
                            </Dropdown.Item>                            
                            <Dropdown.Item as='button'>
                            <div onClick={()=>this.setState({
                                search: false,
                                container:true,
                                custom: !this.state.custom,
                                whatRow: 'enemies',
                            })}>
                                New custom creature
                            </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>
        </div>
    )}
};


export default AddCreature;