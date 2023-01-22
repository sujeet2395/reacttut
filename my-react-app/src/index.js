import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import PropExample from './PropExample/PropExample'
import CompnentLifeCycle from './components/ComponentLifeCycle'
import FormAndHandleEvent from './components/FormAndHandleEvent'
import FetchRequestApi from './components/FetchRequestApi'
import UseState from './components/UseState'
import App from './App'
import ReducerUse from './components/ReducerUse';
import RefUse from './components/RefUse';
import CustomHookHandler from './CustomHook/CustomHookHandler'
import FunctionalComponent from './HOC/FunctionalComponent';
import ClassComponent from './ErrorHandling/ClassComponent';
import ErrorBoundaries from './ErrorHandling';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundaries>
            <ClassComponent/>
        </ErrorBoundaries>
    </React.StrictMode>
    );
//ReactDOM.render(<><ReducerUse/></>,document.getElementById('root'));
