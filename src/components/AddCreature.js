import React, { useEffect, useState } from "react";
import '../App.css';
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios';
import { placeholder } from "@babel/types";

function AddCreature() {
    const [state, setState] = useState({
        creatures: [],
        placeholder: false,
        search: false,
        custom: false,
        input: '',
        foundCreature: [],
    });
    useEffect(() =>{
        axios.get('https://www.dnd5eapi.co/api/monsters/').then(response => {
            setState(state => ({
                ...state,
                creatures: response.data.results
            }))
        })
    }, []);
    
    let mappedCreatures = state.creatures.map((creature, index)=> { return creature.name });
    console.log(state.input)
    console.log(state.foundCreature)
    let players = [];
    let enemies = [];
    let mappedPlayers =  players.map((player,index)=><div key={index}>
        <div className='added-creature'>
                        <h4>{player.name}</h4>
                        <button id='plus-button'>+</button>
                        <h2>{player.hit_points} HP</h2>
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
    let mappedEnemies = enemies.map((enemies,index)=><div key={index}>
        
    </div>)
    let display;
    if (state.search&&!state.custom){
        display=<div>
            <input placeholder='api' onChange={e => setState(state => ({
                ...state,
                input: e.target.value
                }))}>           
            </input>
        <button onClick={()=>{axios.get(`https://www.dnd5eapi.co/api/monsters/${state.input}`).then(response=>{setState(state => ({
                ...state,
                foundCreature: response.data,
                search: false,
                }))
            })}}>Search</button></div>
    } else if (state.custom&&!state.search){
        display=<div>custom</div>
    }
    return (
        <div className='add-creature'>
            <div className='add-players'>
                <h1>Players</h1>
                {state.placeholder&&<div className='added-creature'>
                    {display}
                </div>}
                <div>
                    {/* {mappedCreatures} */}
                </div>
                    <div className='add-button-holder'>
                    <Dropdown>
                            <Dropdown.Toggle varient='success' id='add-button'>
                                +
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='add-button'>
                                <Dropdown.Item as='button'>
                                <div onClick={()=>setState(state => ({
                                    ...state,
                                    search: !state.search,
                                    placeholder:true,
                                    custom: false,
                                }))}>
                                    Search Monster Manual
                                </div>
                                </Dropdown.Item>
                                <Dropdown.Item as='button'>
                                <div>
                                    Search saved creatures
                                </div>
                                </Dropdown.Item>                            
                                <Dropdown.Item as='button'>
                                <div onClick={()=>setState(state => ({
                                    ...state,
                                    search: false,
                                    placeholder:true,
                                    custom: !state.custom,
                                }))}>
                                    New custom creature
                                </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
                    </div>
            </div>
            <div className='add-enemies'>
                <h1>Enemies</h1>
                <div className='added-creature'>
                        <h4>Placeholder</h4>
                        <button id='plus-button'>+</button>
                        <h2>0 HP</h2>
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
                    <Dropdown>
                            <Dropdown.Toggle varient='success' id='add-button'>
                                +
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='add-button'>
                                <Dropdown.Item href='#/action-1'>
                                    Add from Monster Manual
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Add from saved custom creatures
                                </Dropdown.Item>                            
                                <Dropdown.Item href='#/action-3'>
                                    Add new custom creature
                                </Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
            </div>
        </div>
    )
};

export default AddCreature;