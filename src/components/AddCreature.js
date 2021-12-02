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
            whatRow: '',
            nameInput: '',
            hpInput: ''
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

    changer(product, pos) {
        let items = [...this.state.players];
        let item = {...items[pos]}
        item.hp = product;
        items[pos] = item;
        this.setState({
            players: items
        })
    }

    adder(num, pos){
        num++;
        this.changer(num, pos);
    }

    subber(num, pos){
        num--;
        this.changer(num, pos);
    }

    render(){
        console.log(this.state.players);
    // ------------------------------------------------PLAYER CONTENT--------------------------------------------------------
    let mappedPlayers = this.state.players.map((player,index, array)=>
    {
        let num1 = player.hp;

        return (<div key={index}>
            <div className='added-creature'>
                <h4>{player.name}</h4>
                <button onClick={() => this.adder(num1, index)}>+</button>
                <h2>{player.hp} HP</h2>
                <button onClick={() => this.subber(num1, index)}>-</button>
                <Dropdown>
                    <Dropdown.Toggle varient='success' id='options-button'>
                        ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='options-button'>
                        {/* <Dropdown.Item>
                            <PopUp/>
                        </Dropdown.Item> */}
                    <Dropdown.Item onClick={()=>{
                            array.splice(index,1);
                            this.forceUpdate();
                        }}>
                            Delete
                        </Dropdown.Item>                        
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)})

//------------------------------------------------ENEMIES CONTENT--------------------------------------------------------
let mappedEnemies = this.state.enemies.map((enemy,index, array)=>
{
    return (<div key={index}>
            <div className='added-creature'>
                <h4>{enemy.name}</h4>
                <h2>{enemy.hp} HP</h2>
                <Dropdown>
                    <Dropdown.Toggle varient='success' id='options-button'>
                        ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='options-button'>
                        {/* <Dropdown.Item href='#/action-1'>
                            Add Status Effect */}
                        {/* </Dropdown.Item> */}
                        <Dropdown.Item onClick={()=>{
                            array.splice(index,1);
                            this.forceUpdate();
                        }}>
                            Delete
                        </Dropdown.Item>                            
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)})

//--------------------------------------------------------DISPLAY------------------------------------------------------------
let lowercase = this.state.input.toLowerCase().replace(/\s+/g, '-');
let playerDisplay;
let enemyDisplay;

if (this.state.search&&!this.state.custom){
    playerDisplay=
    
//////PLAYER API INPUT//////
        
        <div className='mm-search-state'>
            <input placeholder='Monster Manual' onChange={e => this.setState({
                input: e.target.value
                })}>
            </input>
        <button onClick={()=>{axios.get(`https://www.dnd5eapi.co/api/monsters/${lowercase}`).then(response=> {this.setState({
                customName: response.data.name,
                customHP: response.data.hit_points,
                search: false,
                container: false,
                }, this.playerValues);
            }).catch(function (){
                window.alert("The Monster Manual doesn't recognize that creature.")
            });
            }}>Search</button>
        </div>

//////ENEMIES CUSTOM INPUT//////

    } else if (this.state.custom&&!this.state.search){
        enemyDisplay=
        <div className='custom-search-state'>
            <div className='cus-name'>
                <h4>Name</h4>
                <input onChange={e => this.setState({
                    nameInput: e.target.value
                })}>           
                </input>
            </div>
            <div className='cus-hp'>
                <h4>HP</h4>
                <input onChange={e => this.setState({
                    hpInput: e.target.value
                })}>           
                </input>
            </div>
            <div className='cus-add'>
                <button onClick={()=>{this.setState({
                customName: this.state.nameInput,
                customHP: this.state.hpInput,
                search: false,
                container: false,
                }, this.enemyValues);
            }}>Add</button>

            </div>        
        </div>
    }

//////ENEMY API INPUT//////
    if (this.state.search&&!this.state.custom){
        enemyDisplay=          
            <div className='mm-search-state'>
                <input placeholder='Monster Manual' onChange={e => this.setState({
                    input: e.target.value
                    })}>
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
    
//////PLAYER CUSTOM INPUT//////  
        } else if (this.state.custom&&!this.state.search){
            playerDisplay=
            <div className='custom-search-state'>
             <div className='cus-name'>
                <h4>Name</h4>
                <input onChange={e => this.setState({
                    nameInput: e.target.value
                })}>           
                </input>
            </div>
            <div className='cus-hp'>
                <h4>HP</h4>
                <input onChange={e => this.setState({
                    hpInput: e.target.value
                })}>           
                </input>
            </div>
            <div className='cus-add'>
                <button onClick={()=>{this.setState({
                customName: this.state.nameInput,
                customHP: this.state.hpInput,
                search: false,
                container: false,
                }, this.playerValues);
            }}>Add</button>

            </div> 
        </div>
    }
    
    return (
        <div className='add-creature'>
{/* --------------------------------------PLAYER COLUMN CONDITIONAL RENDERING-------------------------------------------- */}
            <div className='add-players'>
                <h1>Players</h1>
                {this.state.container&&this.state.whatRow === 'players' ? <div className='added-creature'>
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
                                    container: true,
                                    custom: false,
                                    whatRow: 'players'
                                })}>
                                    Search Monster Manual
                                </div>
                                </Dropdown.Item>
                                {/* <Dropdown.Item as='button'>
                                <div>
                                    Search saved creatures
                                </div>
                                </Dropdown.Item>                             */}
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
                            {/* <Dropdown.Item as='button'>
                            <div>
                                Search saved creatures
                            </div>
                            </Dropdown.Item>                             */}
                            <Dropdown.Item as='button'>
                            <div onClick={()=>this.setState({
                                search: false,
                                container: true,
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