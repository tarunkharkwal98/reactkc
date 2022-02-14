import React from 'react';
import ReactDOM from 'react-dom';
import Keycloak from 'keycloak-js';

function Kcauth(){
    //Get the keycloak configuration
    let keycloak = Keycloak('./resources/keycloak.json');
    //Initialization of the keycloak instance
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
        console.log(keycloak);
        // console.log(getState().keycloakLogin);
        if (!authenticated) {
            window.location.reload();
        } else {
            console.info("This is Id token of keycloak   " + keycloak.idToken);
            console.info(keycloak.tokenParsed.name);
            console.info(keycloak.tokenParsed.preferred_username);
        }
        
        //store authentication tokens in sessionStorage
        sessionStorage.setItem('authentication', keycloak.token);
        sessionStorage.setItem('refreshToken', keycloak.refreshToken);

        //React Render after authentication
        // ReactDOM.render(
        //     <Afterlogin/>, document.getElementById('root')
        // )

        //to regenerate token on expiry
        setTimeout(() => {
            keycloak.updateToken(70).then((refreshed) => {
                if (refreshed) {
                    console.debug('Token refreshed' + refreshed);
                } else {
                    console.warn('Token not refreshed, valid for '
                        + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                }
            }).catch(() => {
                console.error('Failed to refresh token');
            });
        }, 60000)

    }).catch(() => {
        console.error("Authenticated Failed");
    });
}


export default Kcauth;