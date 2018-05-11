import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Intro extends Component{
    render(){
        return(
            <Paper style={style} zDepth={3} rounded={false}>
                <section>Intro here</section>
            </Paper>
        )
    }

}

export default Intro;