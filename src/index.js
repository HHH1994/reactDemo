/**
 * Created by HHH on 2018/3/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Shop} from './component/shopList';
import {Game} from './demo/demoInOffical'



const element = (
    <div>
        <Game></Game>
    </div>
    );
function tick() {
    ReactDOM.render(
        element,
        document.getElementById("root")
    );
}
tick();