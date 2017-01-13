import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <a className="active item">
                        Facebook
                    </a>
                    <a className="item">
                        Twitter
                    </a>
                </div>
                <div className="social-media">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = Main;

