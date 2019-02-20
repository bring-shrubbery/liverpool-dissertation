import React, {Component} from 'react';
import '../../index.scss';
import './editor.scss';

// Component imports
import ComposerView from '../ComposerView/ComposerView.jsx';
import LibraryView from '../LibraryView/LibraryView.jsx';
import SettingsView from '../SettingsView/SettingsView.jsx';
import CollapseView from '../CollapseView/CollapseView.jsx';
import Toolbar from './Toolbar.jsx';

// Redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default class Editor extends Component {
    render () {
        return (
            <Provider store={store}>
                <div id={'editor-view'}>
                    <Toolbar/>
                    <CollapseView right>
                        <LibraryView/>
                    </CollapseView>
                    <ComposerView/>
                    <CollapseView left>
                        <SettingsView/>
                    </CollapseView>
                </div>
            </Provider>
        )
    }
}