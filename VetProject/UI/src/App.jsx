import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import UI from './UI';
import Home from './Home';
import Profile from './Profile';
import { browserHistory } from 'react-router';
import Logo from './loginLogo.png';
import Horse from './horse.jpg';

var cookie = "";



export default class App extends Component {
    constructor(props) {


        super(props)
        this.state = {
            date: '2017-06-13',
            loggedIn: false,
            loginFail: '',
            
           
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.registerUser = this.registerUser.bind(this);
        
    }

    registerUser(e){
        e.preventDefault();
        var newUser = this.inputnewName.value;
        var password = this.inputPassword.value;
        var email = this.inputEmail.value;
        var number = this.inputNumber.value;

        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            userName: newUser,
            password:password,
            Email:email,
            phoneNumber: number
        }).then((response)=>{
            console.log(response.data);
        });
    }//registrering
      

    login(e) {
        
        e.preventDefault();
        const auth = new Buffer(this.inputEmail+''+this.inputPassword).toString('base64');
        

        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                authorization: auth,
            }
        ).then((response) => {
            //console.log(response.data);
            cookie = response.data.headers;
            //Lagra TOKEN i user cookie
            if (auth === null) {
                this.setState({ loginFail: 'Ouch! Fel email eller Lösen' });
                return;
            } else {
                
               browserHistory.push('UI');
                this.setState({   
                    loggedIn: !this.state.loggedIn
                });   
            }
        });
    }


    logout(e) {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
        }).then((response) => {
                this.setState({
                loggedIn: !this.state.loggedIn,
                });
            });
        }
    render() {
        var errorTxt = this.state.loginFail;
        var error = this.state.loginFail ? 'error' : '';
        if (this.state.loggedIn) {
            return <UI 
                loggedIn={this.state.loggedIn}
                logout={this.logout}
                date={this.state.date} 
                />; 
            };//Om inloggade redirecta till UI component                     
    

    return (
        <div className="container">
            <div className="headbar">
            <img src={Logo} className="vetly_logo" alt= "vetly.se" />
                <div className="nav">
                    <input className="name" ref={node => this.inputEmail = node} placeholder="Email"/>
                    <input className="pw" ref={node => this.inputPassword = node} placeholder="Lösenord" type="password"/>
                    <button className="btn-log" onClick={this.login.bind(this)}>Logga in</button>
                </div>
                    <span className={error}>{errorTxt}</span>
            </div>
            <img src={Horse} className="horse" alt= "" />
            <div className="reg">
                <form className="regform">
                    <h2>Registrera användare</h2>
                    <input className="reg_namn" ref={node =>this.inputnewName = node}placeholder="Namn"/><input className="reg_mail" ref={node=>this.inputEmail = node}placeholder="Email"/> <br />
                    <input className="reg_nr" ref={node=>this.inputNumber = node}placeholder="Tel Nummer"/><br />
                    <input className="reg_pw" ref={node=>this.inputPassword = node}placeholder="Lösenord" type="password"/><br/>
                    <button className="btn_reg" onClick={this.registerUser.bind(this)}>Gå med!</button>
                </form>    
            </div>
            </div>//Slut
        );
    };
}


