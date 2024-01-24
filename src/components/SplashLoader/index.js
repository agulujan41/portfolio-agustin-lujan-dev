import React, { Component } from 'react';
import logo from '../../images/avatar.png';


function SplashMessage() {
    return (
        <div style={
            {
                width:'100%',
                height:'100vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }
        }>

            <img src={logo} className="App-logo" alt="logo"  loading="lazy"
                style={
                    {
                        width:'30vh',
                        height:'30vh',
                
                    }
                }
            />
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}