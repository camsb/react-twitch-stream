# react-twitch-stream
A responsive React component used to display a Twitch stream. Simple to use and maintains the expected 16:9 aspect ratio.
### Installation
```sh
$ npm install --save react-twitch-stream
```
### Usage
Since this component always maintains a 16:9 aspect ratio, it's overall screen size is determined by the width of its parent div. To use this component best, set the parent div's width as you wish, and leave the height set to auto. An example can be seen below:

```js
import React from 'react';
import { TwitchStream } from 'react-twitch-stream';

const style: React.CSSProperties = {
  width: '30%'
};

const App: React.FC = () => {
  return (
    <div style={style}>
      <TwitchStream channelName='lirik' allowFullScreen autoPlay muted/>
    </div>
  );
}

export default App;

```
### License
MIT