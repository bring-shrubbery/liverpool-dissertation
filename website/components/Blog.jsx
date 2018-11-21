import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import marked from 'marked';
import { Nav, NavItem, NavLink } from 'reactstrap';

import NavigationBar from './NavigationBar.jsx';
import './blog.scss';

import blogData from  '../data/blogposts.json';


export default function Blog () {
    let blogYears = [];
    let blogMonths = [];

    let monthNameLookup = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    for(let post in blogData) {
        let date = new Date(Date.parse(blogData[post].date));

        let year = date.getFullYear();

        if(!blogYears.find(el => el == year)) {
            blogYears.push(year);
            blogYears.sort((a, b) => a - b);
        }
    }

    const YearList = blogYears.map(el => {
        for(let post in blogData) {
            let date = new Date(Date.parse(blogData[post].date));
            let year = date.getFullYear();

            if(year != el) continue;

            let month = monthNameLookup[date.getMonth()];
            if(!blogMonths.find(el => el == month)) {
                blogMonths.push(month);
                blogMonths.sort((a, b) => {
                    let idA = monthNameLookup.findIndex(el => el == a);
                    let idB = monthNameLookup.findIndex(el => el == b);
    
                    return idA - idB;
                });
            }
        }

        return (
            <NavItem key={el} style={{marginBottom: 15}}>
                <h6>{el}</h6>
                {blogMonths.map(month => {
                    return (<a key={month} href={`#${month}`} style={{marginLeft: 10, marginBottom: 2}}>
                        {month}
                    </a>)
                })}
            </NavItem>
        )
    });

    let blogPosts = [];

    for(let post in blogData) {
        let blogPost = blogData[post];
        let postDate = new Date(Date.parse(blogPost.date));

        blogPosts.push(
            <React.Fragment>
                <div className="blog-post" key={post} id={monthNameLookup[postDate.getMonth()]}>
                    <h2>{blogPost.title}</h2>
                    <small><i>Posted on {postDate.toLocaleDateString()}</i></small>
                    <div className="blog-post-body" dangerouslySetInnerHTML={{__html:marked.parse(blogPost.body)}}></div>
                </div>
                <hr/>
            </React.Fragment>
        )
    }
    
    return (
        <React.Fragment>
            <NavigationBar pageName={'blog'}/>
            <Container fluid>
                <div className="row bd-wrapper">
                    <div className="col-3 col-md-2 bd-sidebar">
                        <h6 style={{marginTop: 15, color: '#AAA'}}>Quick Links</h6>
                        <Nav vertical>
                            {YearList}
                        </Nav>
                    </div>
                    <main className="col-12 col-md-10 bd-content" role="main">
                        {blogPosts}
                    </main>
                </div>
            </Container>
        </React.Fragment>
    )
}