import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import { HMSRoomProvider } from '@100mslive/hms-video-react';


ReactDOM.render(
    <GoogleOAuthProvider clientId="187705934306-shu5tck0dmnf0fp52bp7ggstbhv895uj.apps.googleusercontent.com">
        <HMSRoomProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </HMSRoomProvider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);
