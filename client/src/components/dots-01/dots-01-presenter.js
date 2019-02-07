import React, {Component} from 'react';
import WelcomeStroke from './welcome-stroke';
import GetStartedStroke from './get-started-stroke'

class Presenter extends Component{
    constructor(props){
        super(props);
        this.state={
            dot_count: this.props.dot_count,
        }
    }

    makeDots = ()=>{
        let {dot_count} = this.state;
        let i;
            let dots= [];
            for(i=0; i<=dot_count; i++){
                dots.push(
                    <div key={i} />
                )
            }
            return dots
    };

    render(){
        return(
            <div className='hero'>
                <WelcomeStroke/>
                <GetStartedStroke/>

                <div className='dots-container'>
                    {this.makeDots()}
                </div>

            </div>
        )

    }

}


export default Presenter