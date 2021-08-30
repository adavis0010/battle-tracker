import React from "react";
import '../App.css';
import Dropdown from "react-bootstrap/Dropdown";

function AddCreature() {
    return (
        <div className='add-creature'>
            <div className='add-players'>
                <h1>Players</h1>
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
                                </Dropdown.Item>                            <Dropdown.Item href='#/action-3'>
                                    Add new custom creature
                                </Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
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
                                </Dropdown.Item>                            <Dropdown.Item href='#/action-3'>
                                    Add new custom creature
                                </Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
            </div>
        </div>
    )
};

export default AddCreature;