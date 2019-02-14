import React, { Component } from 'react';

const secaoCss = {
    backgroundColor: 'white',
    width: '80%',
    float: 'left',
    color: 'black',
    fontWeight:'800',
    border: '2px solid lightgray',
    margin: '5%',
    borderRadius: '10px',
    
    whiteSpace: 'pre-wrap',
    textAlign: 'left'

};

const spanCss = {
    fontWeight: 'bolder',
    fontSize: 'large'

};

const bordaCss = {
    border:'1px solid lightgray',
    padding: '5px'
}


class secao extends Component {
    render() {
        return (

            <section style={secaoCss}>
                <div style={bordaCss}>
                    <span style={spanCss}>{this.props.tittle}</span>
                </div>
                <div style={bordaCss}>
                <span style={spanCss}>{this.props.children}</span>
                </div>
            </section>

        );
    }
}

export default secao;