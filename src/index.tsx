import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlManager} from '@discord/intl';

import messages from './File.messages';

const intl = new IntlManager({initialLocale: 'en-US'});

function App() {
    return <div>
        Hello
        {intl.string(messages.SOME_MESSAGE)}
    </div>
}


ReactDOM.createRoot(document.querySelector('body')).render(<App />);
