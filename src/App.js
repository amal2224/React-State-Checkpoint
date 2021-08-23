import React from 'react'
import Profile from './Profile/Profile';
import './App.css';
class App extends React.Component {
  // =============================Constractor=============================
  constructor(props){
    super(props);
    this.state={
      Person :{ 
                fullName:   'Ahmed Kouki',
                bio:        'Full stack web development, I have experience in dealing with programming and modern web technologies, I built a lot of projects that have increased my experience and trained a lot, I am a fast learner and always love to develop myself . ',
                imgSrc:     '/assets/avatarUser.png',
                professio:  'Full stack developer'
              },
      show:false ,
      count: 0
              };
  }
  
  // =============================toggle function=============================
  toggle =() =>{this.setState({show:!this.state.show});}

  // ========================increment Counter function========================
  increment = () => {this.state.show ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: 0 });};

  // ========================componentDidMount lifecyle========================
  componentDidMount = () => {setInterval(this.increment, 1000);}

  render(){
    return (
    <div className="App">
      {/* counter */}
      <h4 style={{ color: '#457b9d' }}>
        {this.state.count} seconds .
      </h4>
      {/* show button */}
      <button className='btnShow' onClick={this.toggle}>Show Profile</button>
      {this.state.show && <Profile Person={this.state.Person}/>}
    </div>
  );
  }
}
export default App;