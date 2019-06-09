import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="egg & next.js demo" />
        <meta name="keywords" content="Egg,Next,React,demo" />
        <title>Egg-Next-demo</title>
        <link rel="shortcut icon" href="/static/cdn/img/favicon.ico" type="image/x-icon" />
        {/* language=CSS */}
        <style jsx global>{`
          blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
              margin: 0;
              padding: 0;
          }

          body, button, input, select, textarea {
              margin: 0;
              overflow: hidden;
              font: 14px Helvetica Neue, Helvetica, PingFang SC, 'Microsoft yahei', Tahoma, Arial, sans-serif;
              color: #333;
          }

          h1, h2, h3, h4, h5, h6 {
              font-size: 100%;
              -webkit-font-smoothing: antialiased;
          }

          address, cite, dfn, em, var, i {
              font-style: normal
          }

          code, kbd, pre, samp {
              font-family: courier new, courier, monospace
          }

          a:link, a:visited, a:hover, a:active {
              text-decoration: none;
          }
        `}</style>
      </Head>
      <body style={{ margin: 0, overflow: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}
