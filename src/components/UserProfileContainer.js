import {React, Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import Service from '../services/Service';


export default class UserProfileContainer extends Component {
    //Initial state
    state = {
        isLoading: false,
        isShowData: false,
        clickedIndex: 0
    };



    onClickHandler = (index)=> {
        this.setState({
            isShowData: false,
            isLoading: true,
            clickedIndex: index
        });

        setTimeout(()=> {
            this.setState({
                isLoading: false,
                isShowData: true,
                clickedIndex: index
            })
        }, 2000)
    };

    render() {
        let {userData} = this.props;
        return (
            <div className="container outer-container">
                <div className="row">
                    {
                        userData.map((data, index)=>(
                            <div key={index}>

                                <div className="inner-container">
                                    <div className="column">
                                        <img className="avatar" src={data.avatar}/>
                                    </div>
                                    <div>
                                        <a className="user-data" onClick={(e)=> this.onClickHandler(index)}>

                                            <div className="first-name"> Name: {data.first_name} {data.last_name}</div>
                                            <div className="state">State: {data.address.state}</div>
                                            <div className="country">Country: {data.address.country}</div>
                                            <div className="phone">Phone: { data.phone_number}</div>
                                            <div className="email">Email: { data.email}</div>
                                        </a>
                                    </div>
                                    <div className="cd-folding-panel">
                                        <div className="additional-details">
                                            {this.state.isLoading && this.state.clickedIndex == index ?
                                                <Spinner animation="border"/> : null}
                                            {this.state.isShowData && this.state.clickedIndex == index ?
                                                <div className="show-data-fold-out">
                                                    <div>Title: {data.employment.title}</div>
                                                    <div>Key Skill: {data.employment.key_skill}</div>
                                                    <div>Gender: {data.gender}</div>
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

UserProfileContainer.propTypes = {
    userData: PropTypes.array
};