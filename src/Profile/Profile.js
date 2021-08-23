import React from 'react'
import './Profile.css'

class Profile extends React.Component {

    constructor(props){
                    super(props);
                    this.state={};
                    }
    
render(){   
    const   
            styleinfo={ color:'#0077b6'}                 
    return (
        <div className='containerProfil'>
            <div className='info'>
                <h3 style={styleinfo}>
                    {this.props.Person.fullName}
                </h3>
                <p>
                    {this.props.Person.bio}
                </p>
                <h5 style={styleinfo}>
                    {this.props.Person.professio}
                </h5>
            </div>
        <img id='imagestyle' src={this.props.Person.imgSrc} alt='avatarUser'/>                               
        </div>
    );
}
}
export default Profile