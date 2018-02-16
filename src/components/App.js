import React from 'react';
import ReactDOM from 'react-dom';
import Headers from '../components/Headers';
import Content from '../components/Content';
import Footer from '../components/Footer';

class App extends React.Component
{
    render(){
        return(
                <div>
                    <Headers/>
                    <Content/>
                    <Footer/>
                </div>
                
            // <div>Your header</div>
        );
    
    }
}
export default App;