import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <Navbar color="dark" dark expand="md" className="sticky-top">
                <NavbarBrand href="/">signals.js framework</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem className={this.props.pageName === 'documentation' ? ' active ' : ''}>
                        <NavLink href="">Documentation</NavLink>
                    </NavItem>
                    <NavItem className={this.props.pageName === 'guides' ? ' active ' : ''}>
                        <NavLink href="">Guides</NavLink>
                    </NavItem>
                    <NavItem className={this.props.pageName === 'blog' ? ' active ' : ''}>
                        <NavLink href="blog.html">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/vincentrodriguez/signals">GitHub</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}