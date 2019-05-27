import * as React from 'react';

interface PublicProps {
  allowFullScreen: boolean;
  autoPlay: boolean;
  muted: boolean;
  channelName: string;
}

type Props = PublicProps;

const twitchStreamStyle: React.CSSProperties = {
  paddingTop: '56.25%',
  position: 'relative',
  overflow: 'hidden'
};

const iFrameStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: '0'
}

export class TwitchStream extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div style={twitchStreamStyle}>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.props.channelName}&muted=${this.props.muted}&autoplay=${this.props.autoPlay}`}
          allowFullScreen={this.props.allowFullScreen}
          frameBorder="0"
          scrolling="no"
          style={iFrameStyle}
        />
      </div>
    );
  }
}
