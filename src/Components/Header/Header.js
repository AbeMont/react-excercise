import React from 'react';
import './Header.css';

export default class Header extends React.Component {

    constructor(props){
        super();
        this.props = props;
    }

    render(){
        return (
            <header className="Header">
              <div className="Header__container">
              <div className="Header__contents">
                        <div className="Header__icon">
                            {this.props.show ? 
                            <button onClick={this.props.click}>
                                <span className="arrow"></span>
                            </button> 
                            :null}
                        </div>
                        <div className="Header__title">
                            <p>Lunch Tyme</p>
                        </div>
                        <div className="Header__icon">
                            <span className="map"></span> 
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}