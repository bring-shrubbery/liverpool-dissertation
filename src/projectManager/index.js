import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import ProjectManagerView from './components/ProjectManagerView/ProjectManagerView.jsx';

const pathname = window.location.pathname;
const username = pathname.substring(10, pathname.length);

render(<ProjectManagerView username={username}/>, document.getElementById('root'));