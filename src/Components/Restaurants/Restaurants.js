import React from 'react';
import Header from './../Header/Header';
import Details from './../Details/Details';
import './Restaurants.css';

export default class Restaurants extends React.Component {

    state = {
        restaurants: null,
        showDetails: false,
        detailsInfo: null
    }

    //////////////////////
    // AJAX Data Fetching
    /////////////////////

    async componentDidMount() {

        const url = "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";
        const response = await fetch(url);
        const data = await response.json();
        const restaurants = data.restaurants;
        this.setState({restaurants: restaurants});
    }

    //////////////////
    // Event Handlers
    /////////////////

    clickHandler = (restaurantData) =>{
        const RestData = restaurantData;
        // Show the details
        this.setState({
            showDetails: !this.state.showDetails,
            detailsInfo: RestData
        })
    }

    render(){

    const restaurants = this.state.restaurants !== null ? 
    
        this.state.restaurants.map((restaurant,index)=>{
                return (
                    <div 
                        className="Restaurant"
                        value = {restaurant.name} 
                        key={index}
                        onClick={()=>{this.clickHandler(restaurant,index)}}
                        style={ 
                            {
                                backgroundImage: 'url('+restaurant.backgroundImageURL+')',
                                backgroundSize: 'cover'
                            }
                        }
                    > 
                        <div className="Restaurant__card">
                            <div className="Restaurant__desc">
                                <div className="Restaurant__name">
                                    <p>{restaurant.name} </p>
                                </div>
                                <div className="Restaurant__category">
                                    <p>{restaurant.category}</p>
                                </div>
                            </div>
                            <div className="Restaurant__overlay"></div>
                        </div>
                    </div>
                )
            }) : null;

    const overlay = <div className="restaurant-load"></div>;
   
    const details = 
                    
        this.state.detailsInfo ?
            (<Details
                name={this.state.detailsInfo.name}
                category={this.state.detailsInfo.category}
                address={this.state.detailsInfo.location.address}
                city = {this.state.detailsInfo.location.formattedAddress[1]}
                phone = {this.state.detailsInfo.contact ?
                        this.state.detailsInfo.contact.formattedPhone:
                        "Phone number unavailable"}
                lat= {this.state.detailsInfo.location.lat}
                lng={this.state.detailsInfo.location.lng}
                twitter = {this.state.detailsInfo.contact ? 
                        this.state.detailsInfo.contact.twitter ? 
                        "@"+this.state.detailsInfo.contact.twitter :
                            "Twitter account unavailable"
                        : "Twitter account unavailable"
                        }
                show={this.state.showDetails}
            />) : <Details/>;
  
        return (
            <div>
                <Header 
                    click = {() => this.clickHandler(this.state.detailsInfo)}
                    show = {this.state.showDetails}
                    >
                </Header>
                <div className="Restraurant-container">
                    {restaurants} 
                    {overlay}
                </div>
                {details}
            </div>
        )
    }
}