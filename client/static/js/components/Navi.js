'use strict';
var React = require('react');

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['首页','关于','登录','注册']
        }
    }
    clickHandler(event) {
        console.log('value',event.target.textContent);
        alert('Press--->' + event.target.textContent);
        // alert('hi');
        switch (event.target.textContent) {
            case '注册':
                console.log('click-reg');
                var payload = {
                    usename: 'test',
                    password: 12345,
                };

                var data = new FormData();
                data.append( "json", JSON.stringify( payload ) );

                fetch("/reg",
                    {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'x-www-form-urlencoded'
                        },
                        body: data
                    })
                    .then(function(res){ console.log('res',res) })
                    .catch(function(err){console.log('error',err)})
        }
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
        // borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: 0,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 1px 3px #ccc',
    },
    naviItem: {
        lineHeight: naviHeight,
        fontFamily: 'Microsoft Yahei',
        marginLeft: '20px',
        marginRight: '20px',
        color: '#666'
    },
};

module.exports = Navi;

