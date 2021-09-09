import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button> Add Conditions</button>} position="right center" modal>
    <div className='status-checkbox'>
        <button type='checkbox'>
            Blinded
        </button>
        <button type='checkbox'>
            Charmed
        </button>
        <button type='checkbox'>
            Deafened
        </button>
        <button type='checkbox'>
            Frightened
        </button>
        <button type='checkbox'>
            Grappled
        </button>
        <button type='checkbox'>
            Incapacitated
        </button>
        <button type='checkbox'>
            Invisable
        </button>
        <button type='checkbox'>
            Paralyzed
        </button>    
        <button type='checkbox'>
            Petrified
        </button>
        <button type='checkbox'>
            Poisoned
        </button>
        <button type='checkbox'>
            Prone
        </button>
        <button type='checkbox'>
            Restained
        </button>    
        <button type='checkbox'>
            Stunned
        </button>        
        <button type='checkbox'>
            Unconscious
        </button>
        <button type='checkbox'>
            Exhausted
        </button>
        <button type='checkbox'>
            Dying
        </button>
    </div>
  </Popup>
);