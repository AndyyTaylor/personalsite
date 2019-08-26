
import { Component } from 'react';
import style from "../../styles/data_structures.scss";
import NavBar from "components/NavBar";
import Head from 'next/head';


class ScreensAlgorithms extends Component {

    constructor(...args) {
        super(...args);



        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />
                <Head>
                    <title>Arrays | Andy Taylor</title>
                </Head>
                <div className="page_outer">
                    <NavBar />
                    <div className="page_body">
                        <h1 style={{marginLeft: '50px'}}>
                            Arrays
                        </h1>
                        <div className="text_content">
                            Arrays are one of the most basic data structures used in computer science, yet
                            they're extremely widely used because they allow us to perform operations on
                            groups of elements easily.
                            <br /> <br />
                            Typically, when you create an array, you have to state how many items it will
                            hold, and what type each of those elements will be. For example, these arrays will
                            each hold 100 integers.
                            <br />
                            int num[100];
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ScreensAlgorithms;