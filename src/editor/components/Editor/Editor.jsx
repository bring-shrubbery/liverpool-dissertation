import React, {Component} from 'react';
import '../../index.scss';
import './editor.scss';

import ComposerView from '../ComposerView/ComposerView.jsx';
import LibraryView from '../LibraryView/LibraryView.jsx';
import SettingsView from '../SettingsView/SettingsView.jsx';

// Redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default class Editor extends Component {
    render () {
        return (
            <Provider store={store}>
                <div id={'editor-view'}>
                    <LibraryView/>
                    <ComposerView/>
                    <SettingsView/>
                </div>
            </Provider>
        )
    }
}