import { WebView } from 'react-native-webview';
import { View, Dimensions } from 'react-native';

const CirclesAnimationsAreSpinning = () => {
  const dimensions = Dimensions.get('window');

  const circlesAnimationHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        html, body {
          height: 100%;
          margin: 0;
          background: transparent;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
        .loadingspinner {
          --square: 26px;
          --offset: 30px;
          --duration: 2.4s;
          --delay: 0.2s;
          --timing-function: ease-in-out;
          --in-duration: 0.4s;
          --in-delay: 0.1s;
          --in-timing-function: ease-out;
          width: calc( 3 * var(--offset) + var(--square));
          height: calc( 2 * var(--offset) + var(--square));
          padding: 0px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
          margin-bottom: 30px;
          position: relative;
        }
        .loadingspinner div {
          display: inline-block;
          background: #ecececff;
          border: none;
          border-radius: 2px;
          width: var(--square);
          height: var(--square);
          position: absolute;
          padding: 0px;
          margin: 0px;
          font-size: 6pt;
          color: black;
        }
        .loadingspinner #square1 {
          left: calc( 0 * var(--offset) );
          top: calc( 0 * var(--offset) );
          animation: square1 var(--duration) var(--delay) var(--timing-function) infinite,
                     squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
        }
        .loadingspinner #square2 {
          left: calc( 0 * var(--offset) );
          top: calc( 1 * var(--offset) );
          animation: square2 var(--duration) var(--delay) var(--timing-function) infinite,
                     squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
        }
        .loadingspinner #square3 {
          left: calc( 1 * var(--offset) );
          top: calc( 1 * var(--offset) );
          animation: square3 var(--duration) var(--delay) var(--timing-function) infinite,
                     squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
        }
        .loadingspinner #square4 {
          left: calc( 2 * var(--offset) );
          top: calc( 1 * var(--offset) );
          animation: square4 var(--duration) var(--delay) var(--timing-function) infinite,
                     squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
        }
        .loadingspinner #square5 {
          left: calc( 3 * var(--offset) );
          top: calc( 1 * var(--offset) );
          animation: square5 var(--duration) var(--delay) var(--timing-function) infinite,
                     squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
        }
        @keyframes square1 {
          0% { left: calc( 0 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          8.333% { left: calc( 0 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          100% { left: calc( 0 * var(--offset) ); top: calc( 1 * var(--offset) ); }
        }
        @keyframes square2 {
          0% { left: calc( 0 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          8.333% { left: calc( 0 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          16.67% { left: calc( 1 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          25.00% { left: calc( 1 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          83.33% { left: calc( 1 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          91.67% { left: calc( 1 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          100% { left: calc( 0 * var(--offset) ); top: calc( 0 * var(--offset) ); }
        }
        @keyframes square3 {
          0%,100% { left: calc( 1 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          16.67% { left: calc( 1 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          25.00% { left: calc( 1 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          33.33% { left: calc( 2 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          41.67% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          66.67% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          75.00% { left: calc( 2 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          83.33% { left: calc( 1 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          91.67% { left: calc( 1 * var(--offset) ); top: calc( 1 * var(--offset) ); }
        }
        @keyframes square4 {
          0% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          33.33% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          41.67% { left: calc( 2 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          50.00% { left: calc( 3 * var(--offset) ); top: calc( 2 * var(--offset) ); }
          58.33% { left: calc( 3 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          100% { left: calc( 3 * var(--offset) ); top: calc( 1 * var(--offset) ); }
        }
        @keyframes square5 {
          0% { left: calc( 3 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          50.00% { left: calc( 3 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          58.33% { left: calc( 3 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          66.67% { left: calc( 2 * var(--offset) ); top: calc( 0 * var(--offset) ); }
          75.00% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
          100% { left: calc( 2 * var(--offset) ); top: calc( 1 * var(--offset) ); }
        }
        @keyframes squarefadein {
          0% { transform: scale(0.75); opacity: 0.0; }
          100% { transform: scale(1.0); opacity: 1.0; }
        }
      </style>
    </head>
    <body>
      <div class="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </body>
    </html>
  `;

  return (
    <View style={{
      width: dimensions.width * 0.9,
      flex: 0,
      alignSelf: 'center',
      height: dimensions.height * 0.55,
    }}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        bounces={false}
        allowsInlineMediaPlayback={true}
        scrollEnabled={false}
        javaScriptEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        source={{ html: circlesAnimationHTML }}
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
        mixedContentMode="compatibility"
      />
    </View>
  );
};

export default CirclesAnimationsAreSpinning;