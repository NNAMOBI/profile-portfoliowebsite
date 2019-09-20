import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardText, Button, CardTitle, CardMenu, IconButton} from 'react-mdl'



class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 0}
    }
    
    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url(data:image/png;base64,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) center / cover"}}>
                        React Project #1
                        
                    </CardTitle>
                    <CardText>
•	Created  a small scale Blog, Signup, Login, Publishpost component  with REACT JS which hits an end point at NODE JS 
and EXPRESS JS backend using the CRUD operation</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>codepen</Button>
                        <Button colored>DemoLink</Button>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name='share' />
                        </CardMenu>
                        
</CardActions>
                    
                    
            </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is HTML/CSS</h1></div> 
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Figma </h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Bootstrap</h1></div>
            )
        }
        else if (this.state.activeTab === 4) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Figma</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
                </section>
            </div>
        )
    }
}

export default Project;