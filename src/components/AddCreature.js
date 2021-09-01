import React, { useEffect, useState } from "react";
import '../App.css';
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios';

function AddCreature() {
    const [state, setState] = useState({
        creatures: [],
        container: false,
        search: false,
        custom: false,
        input: '',
        foundCreature: [],
        customName: '',
        customHP: '',
        players: [],
        enemies: [],
    });

    useEffect(() =>{
        axios.get('https://www.dnd5eapi.co/api/monsters/').then(response => {
            setState(state => ({
                ...state,
                creatures: response.data.results
            }))
        })
    }, []);

    function creatureValues(array){
        let values = {
            'name': state.foundCreature.name,
            'hp': state.foundCreature.hit_points
        };
        let transferArray = array;
        transferArray.push(values)
        // setState(state => ({
        //     ...state,
        //     array: transferArray
        // }));
        // console.log(transferArray);
        console.log(state.foundCreature)
    }

    //---------------------------------------------------debugging-----------------------------------------------------------
    let mappedCreatures = state.creatures.map((creature, index)=> { return creature.name });
    // console.log(state.input)
    // console.log(state.foundCreature)
    //-----------------------------------------------------------------------------------------------------------------------


    // ------------------------------------------------PLAYER CONTENT--------------------------------------------------------
    let mappedPlayers =  state.players.map((player,index)=>
        <div key={index}>
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

    //------------------------------------------------ENEMIES CONTENT--------------------------------------------------------
    let mappedEnemies = state.enemies.map((enemies,index)=>
        <div key={index}>
            <div className='added-creature'>
                <h4>{enemies.name}</h4>
                <button id='plus-button'>+</button>
                <h2>{enemies.hit_points} HP</h2>
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

    //---------------------------------------------------DISPLAY------------------------------------------------------------
    let display;
    if (state.search&&!state.custom){
        display=<div>
            <input placeholder='Monster Manual' onChange={e => setState(state => ({
                ...state,
                input: e.target.value
                }))}>           
            </input>
        <button onClick={()=>{axios.get(`https://www.dnd5eapi.co/api/monsters/${state.input}`).then(response=>{setState(state => ({
                ...state,
                foundCreature: [response.data],
                search: false,
                container: false,
                }))
                // console.log(response.data)
            });
            creatureValues(state.players)
            }}>Search</button>
        </div>
    } else if (state.custom&&!state.search){
        display=<div>
        <input onChange={e => setState(state => ({
                ...state,
                input: e.target.value
                }))}>           
            </input>
        <button onClick={()=>(response=>{setState(state => ({
                ...state,
                foundCreature: response.data,
                custom: false,
                }))
            })}>Add Creature</button>
        </div>
    }

    return (
        <div className='add-creature'>
{/* --------------------------------------PLAYER COLUMN CONDITIONAL RENDERING-------------------------------------------- */}
            <div className='add-players'>
                <h1>Players</h1>
                {state.container&&<div className='added-creature'>
                    {display}                  
                </div>}
                    {state.players.length>0&&<div>
                        {mappedPlayers}
                    </div>}
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
                                    container:true,
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
                                    container:true,
                                    custom: !state.custom,
                                }))}>
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