import React from 'react';

export default class Logo extends React.Component{

    render(){
        return(
            <div className='logo'>
                <picture>
                    <source media='(max-width: 768px)' srcSet='/img/SGN_10_11_2022_1665514098510.png' /> 
                    <source media='(mix-width: 769px)' srcSet='/img/SGN_10_11_2022_1665514098510.png' />
                    <img src='/img/SGN_10_11_2022_1665514098510.png' alt='Logotipo'/>
                </picture>
            </div>
        );
    }
}