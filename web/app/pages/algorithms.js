
import { Component } from 'react';
import style from "../styles/data_structures.scss";
import NavBar from "components/NavBar";
import Head from 'next/head';
import ProjectGallery from '../components/ProjectGallery';

class ScreensAlgorithms extends Component {

    constructor(...args) {
        super(...args);

        this.mockData = [
            {
                title: 'Linear Search',
                path: '/algorithms/linear_search',
                image: '/images/graph.svg',
                tags: ['arrays', 'search'],
                subtitles: null
            },
            {
                title: 'Binary Search',
                path: '/algorithms/binary_search',
                image: '/images/graph.svg',
                tags: ['arrays', 'search'],
                subtitles: null
            },
            {
                title: 'Selection Sort',
                path: '/algorithms/selection_sort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'Insertion Sort',
                path: '/algorithms/insertion_sort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'Bubble Sort',
                path: '/algorithms/bubble_sort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'Quicksort',
                path: '/algorithms/quicksort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'Mergesort',
                path: '/algorithms/mergesort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'Radix Sort',
                path: '/algorithms/radix_sort',
                image: '/images/graph.svg',
                tags: ['arrays', 'sort'],
                subtitles: null
            },
            {
                title: 'The Hungarian Algorithm',
                path: '/algorithms/hungarian',
                image: '/images/graph.svg',
                tags: ['graphs'],
                subtitles: null
            },
            {
                title: 'Konig\'s Theorem',
                path: '/algorithms/konigs',
                image: '/images/graph.svg',
                tags: ['graphs'],
                subtitles: null
            },
            {
                title: 'Depth First Search',
                path: '/algorithms/dfs',
                image: '/images/graph.svg',
                tags: ['graphs', 'search'],
                subtitles: null
            },
            {
                title: 'Breadth First Search',
                path: '/algorithms/bfs',
                image: '/images/graph.svg',
                tags: ['graphs', 'search'],
                subtitles: null
            }
        ];

        this.mockData = this.mockData.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }
        });

        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />
                <Head>
                    <title>Algorithms | Andy Taylor</title>
                </Head>
                <div className="page_outer">
                    <NavBar />
                    <div className="page_body">
                        <h1 style={{marginLeft: '50px'}}>
                            Choose an Algorithm
                        </h1>
                        <ProjectGallery data={this.mockData}/>
                    </div>
                </div>
            </>
        )
    }
}

export default ScreensAlgorithms;