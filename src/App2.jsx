import React from 'react';
import './App.css';
import confirm from './components/confirm';

class App extends React.Component {
    render() {
        return(
            <h1>
                App
            </h1>
        )
    }

    async componentDidMount() {
        let res = await confirm('干啥呢?')
        if(res) {
            console.log('确定');
        }else {
            console.log('取消');
        }
    }
}

export default App;
