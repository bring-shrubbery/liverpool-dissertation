import React from 'react';
import { hydrate } from 'react-dom';

import './index.scss';

import ProjectManagerView from './components/ProjectManagerView/ProjectManagerView.jsx';

hydrate(<ProjectManagerView/>, document.getElementById('root'));