import React from 'react';

export default class ButtonMob extends React.Component{
    
    constructor(){
        super();
        this.state={/*define o estado*/
            visNav: 'flex'
        }
    }
    
    /*Fará a função de toggle*/
    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav: 'none'
            });
        }else{
            this.setState({
                visNav: 'flex'
            });
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className='buttonMob' onClick={this.clickMe.bind(this)}>
                <img src="/img/hamburgermenu_120234 (1).png" alt="Botão Mobile"/>
            </div>
        );
    }
}