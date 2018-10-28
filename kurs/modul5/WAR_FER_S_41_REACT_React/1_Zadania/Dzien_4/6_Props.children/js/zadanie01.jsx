import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class ShowMore extends React.Component {
        constructor() {
            super();

            this.state = {
                display: "block",
                display2: "none"
            }

        }

        handleClick = (e) => {
            e.preventDefault();
            this.setState({
                display: "none",
                display2: "block"
            })
        };

        render() {
            return (

                <div>
                    <a href="" onClick={this.handleClick} style={{display:this.state.display}}>Pokaża więcej</a>
                    <div style={{display:this.state.display2}}>
                        {this.props.children}
                    </div>
                </div>

            )
        }
    }

    ReactDOM.render(
        <ShowMore>
            Lorem   ipsum
        </ShowMore>,
        document.getElementById('app')
    );
});