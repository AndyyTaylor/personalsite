
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import appStyle from '../styles/app.scss';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Andy Taylor</title>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/static/favicon.jpg" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link href='http://fonts.googleapis.com/css?family=Roboto:500,400,100,normal' rel='stylesheet' type='text/css' />
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: appStyle }} />
                <div className="app elev_0">
                    <Component {...pageProps} />
                </div>
            </Container>
        );
    }
}

export default MyApp;