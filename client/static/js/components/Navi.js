'use strict';
var React = require('react');

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['首页','关于']
        }
    }
    clickHandler() {
        alert('hi');
        console.log('click');
    }
    render() {
        console.log('render navi');
        var navView = [];
        this.state.data.map((item,i)=>{
            console.log(item);
            navView.push(<a key={i} style={styles.naviItem} onClick={this.clickHandler}>{item}</a>)
        });
        return (
            <nav style={styles.navi}>
                {navView}
            </nav>
        )
    }
}

var naviHeight = '50px';

var styles = {
    navi: {
        // background: '#666',
        height: naviHeight,
        borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: 0,
        width: '100%',
    },
    naviItem: {
        lineHeight: naviHeight,
        fontFamily: 'Microsoft Yahei',
        marginLeft: '5px',
        marginRight: '5px',
        color: '#666'
    },
};

module.exports = Navi;

