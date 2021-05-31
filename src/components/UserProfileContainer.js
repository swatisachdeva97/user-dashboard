import {React, Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import Service from '../services/Service';


export default class UserProfileContainer extends Component {
    //Initial state
    state = {
        isLoading: false,
        isShowData: false,
        clickedIndex: 0,
        userData: [],
        originalIndex: ""
    };


    onClickHandler = (data, index)=> {

        console.log(data);
        this.setState({
            isShowData: false,
            isLoading: true,
            clickedIndex: index,
            userData: [],
            originalIndex: index

        });

        setTimeout(()=> {
            this.setState({
                isLoading: false,
                isShowData: true,
                clickedIndex: index,
                userData: data,
                originalIndex: index
            })
        }, 2000)
    };

    render() {
        let {userData} = this.props;
        return (
            <div className="container-fluid">
                <div class="row">
                    <div class="right-panel col-8 ">
                        <div class="content-section">
                            <h2>User Profile</h2>
                            {
                                userData.map((data, index)=>(
                                    <div key={index}>

                                        <div className="inner-container">
                                            <div className="column">
                                                <img className="avatar" src={data.avatar}/>
                                            </div>
                                            <div>
                                                <a className="user-data"
                                                   onClick={(e)=> this.onClickHandler(data, index)}>

                                                    <div className="first-name">
                                                        Name: {data.first_name} {data.last_name}</div>
                                                    <div className="state">State: {data.address.state}</div>
                                                    <div className="country">Country: {data.address.country}</div>
                                                    <div className="phone">Phone: { data.phone_number}</div>
                                                    <div className="email">Email: { data.email}</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <div className="left-panel col-4 item fixed-layout">
                        <h4>Additional User Details</h4>
                        <div className="cd-folding-panel">
                            <div className="additional-details ">


                                {this.state.isLoading && this.state.clickedIndex == this.state.originalIndex ?
                                    <Spinner animation="border"/> : null}
                                {this.state.isShowData && this.state.clickedIndex == this.state.originalIndex ?
                                    <div className="show-data-fold-out">
                                        <div>UserName: {this.state.userData.username}</div>
                                        <div>Gender: {this.state.userData.gender}</div>
                                        <div>Key Skill: {this.state.userData.employment.key_skill}</div>
                                        <div>Title: {this.state.userData.employment.title}</div>
                                        <div>Subscription Plan: {this.state.userData.subscription.plan}</div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

UserProfileContainer.propTypes = {
    userData: PropTypes.array
};