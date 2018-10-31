import React, {Component} from 'react';
import './editor.scss';

import ComposerView from './ComposerView/ComposerView.jsx';
import LibraryView from './LibraryView/LibraryView.jsx';
import SettingsView from './SettingsView/SettingsView.jsx';

export default class Editor extends Component {
    render () {
        return (
            <div id={'editor-view'}>
                <LibraryView/>
                <ComposerView/>
                <SettingsView/>
            </div>
        )
    }
}