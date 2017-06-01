import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


const Nav = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">home</FontIcon>}
      label="Start">
      <div>
        <div className="buttons1">
          <button className="button">
          <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
          <br/> <br/>Profil
          </button>
          <button className="button">
          <i className="fa fa-paw fa-2x" aria-hidden="true"></i>

          <br/><br/>Mina hästar </button>
        </div>
        <div className="buttons2">
          <button className="button">
          <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
          <br/><br/>Boka tid
          </button>
          <button className="button">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <br/><br/>Inkorg
          </button>
        </div>
        <div className="sched">
          <div className="bookhead">
            <h2>Bokningar</h2>
          </div>
          <li>Bokning1</li>
          <li>Bokning2</li>
          <li>Bokning3</li>
          <li>Bokning4</li>
        </div>
          
      </div>
      </Tab>
    <Tab
      icon={<FontIcon className="material-icons">settings</FontIcon>}
      label="Inställningar">
      <div>
        
      </div>
    </Tab>
    <Tab
      icon={<FontIcon className="material-icons">close</FontIcon>}
      label="Logga ut">
    </Tab>
  </Tabs>
);

export default Nav;