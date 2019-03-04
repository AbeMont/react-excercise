import React from 'react';
import './Details.css';
import Map from './../Map/Map';

export default class Details extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            initial: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
        this.removeInitialState()
        }, 1500)
    }

    removeInitialState(){
        this.setState({initial: false})
    }

    render(){

        return (
            <div className={
                this.state.initial ? "Details" :
                this.props.show ? "Details active" : "Details hide"}>
                <div className="Details__map">
                    <Map
                        name = {this.props.name} 
                        lat={this.props.lat}
                        lng={this.props.lng} />
                </div>
                <div className="Details__header">
                    <p>{this.props.name}</p>
                    <p>{this.props.category}</p>
                </div>
                <div className="Details__info">
                    <p>{this.props.address}</p>
                    <p>{this.props.city}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.twitter}</p>
                </div>
            </div>
        )
    }
}