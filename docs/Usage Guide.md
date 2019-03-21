# Usage Guide

This page will familiarize you with the usage of the tool without going into the source code of the project.

## Upon Landing

When you visit the temporary hosting page [here](https://signals-app.herokuapp.com/), you'll be presented with a list of projects. This is only a test projects page, if project is to be continued, this would look slightly different and show only the projects of specific user under his profile.

## When you open the editor

The editor splits into 3 main sections:

* **Library Browser** *(left)* - This is a space that stores all nodes that you can drag and drop into the composer. There are several sections that you can select from on the bottom of the view. You can also search for specific nodes in the provided list if you can't find the one you need.
* **Project Composer** *(middle)* - This is a space where magic happens. You can drag and drop nodes from the library into this area to include them in your project. You can connect any output (on the right of the node) to any unconnected input (on the right). Inputs and outputs look like a white outlined circle when they are not connected and same but with a black dot in the middle when connected. Inputs are the circles (and labels) on the left side and outputs are the circles on the right side. Connections are the black lines between inputs and outputs. Connection can not start and end on the same node. Multiple connection can start from a certain output, but only one can connect to the input.
* **Selected Node Settings** *(right)* - When you select any one node by clicking on it, the settings will appear for that node in this section. You can modify the settings by changing the values. The new values are saved at the moment you change the setting. You can also change the title of the node by clicking on the title in the settings and typing the new title.

Library Browser and Settings views can be collapsed to allow better approach to the Project Composer view. This is done by clicking the gray bar with an arrow next to the view.