
import { Component } from 'react';
import style from "../styles/data_structures.scss";
import NavBar from "components/NavBar";
import Head from 'next/head';
import ProjectGallery from '../components/ProjectGallery';

class ScreensDataStructures extends Component {

    constructor(...args) {
        super(...args);

        this.mockData = [
            {
                title: 'Graphs',
                path: '/data_structures/graphs',
                image: '/images/graph.svg',
                subtitles: [
                    {
                        text: 'Basic Graph',
                        path: '/simple'
                    },
                    {
                        text: 'Digraph',
                        path: '/digraph'
                    },
                    {
                        text: 'Weighted Graph',
                        path: '/weighted'
                    },
                    {
                        text: 'Weighted Digraph',
                        path: '/weighted_digraph'
                    }
                ]
            },
            {
                title: 'Trees',
                path: '/data_structures/trees',
                image: '/images/tree.svg',
                subtitles: [
                    {
                        text: 'Binary Search Tree',
                        path: '/bst'
                    },
                    {
                        text: 'Splay Tree',
                        path: '/splay_tree'
                    },
                    {
                        text: 'AVL Tree',
                        path: '/avl_tree'
                    },
                    {
                        text: '2-3-4 Tree',
                        path: '/234_tree'
                    }
                ]
            },
            {
                title: 'Linked Lists',
                path: '/data_structures/lists',
                image: '/images/list.svg',
                subtitles: [
                    {
                        text: 'Basic Linked List',
                        path: '/basic'
                    },
                    {
                        text: 'Doubly Linked List',
                        path: '/doubly_linked'
                    },
                    {
                        text: 'Ordered Linked List',
                        path: '/ordered'
                    }
                ]
            },
            {
                title: 'Stacks',
                path: '/data_structures/stacks',
                image: '/images/stack.svg',
                subtitles: [
                    {
                        text: 'Using Arrays',
                        path: '/using_arrays'
                    },
                    {
                        text: 'Using Lists',
                        path: '/using_lists'
                    }
                ]
            },
            {
                title: 'Queues',
                path: '/data_structures/queues',
                image: '/images/queue.svg',
                subtitles: [
                    {
                        text: 'Basic Queue',
                        path: '/basic'
                    },
                    {
                        text: 'Using Arrays',
                        path: '/using_arrays'
                    },
                    {
                        text: 'Priority Queue',
                        path: '/priority'
                    }
                ]
            },
            {
                title: 'Tries',
                path: '/data_structures/tries',
                image: '/images/trie.svg',
                subtitles: [
                    {
                        text: 'Basic Trie',
                        path: '/simple'
                    },
                    {
                        text: 'Compressed Trie',
                        path: '/digraph'
                    }
                ]
            },
            {
                title: 'Hash Tables',
                path: '/data_structures/hash_tables',
                image: '/images/hash_table.svg',
                subtitles: [
                    {
                        text: 'Basic Hash Table',
                        path: '/basic'
                    },
                    {
                        text: 'With Linear Probing',
                        path: '/linear_probing'
                    },
                    {
                        text: 'With Double Hashing',
                        path: '/double_hashing'
                    }
                ]
            },
            {
                title: 'Heaps',
                path: '/data_structures/heaps',
                image: '/images/heap.svg',
                subtitles: [
                    {
                        text: 'Using Lists',
                        path:'/using_lists'
                    },
                    {
                        text: 'Using Arrays',
                        path:'/using_arrays'
                    }
                ]
            },
            {
                title: 'Arrays',
                path: '/data_structures/arrays',
                image: '/images/array.svg',
                subtitles: null
            },
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
                    <title>Data Structures | Andy Taylor</title>
                </Head>
                <div className="page_outer">
                    <NavBar />
                    <div className="page_body">
                        <h1 style={{marginLeft: '50px'}}>
                            Choose a Data Structure
                        </h1>
                        <ProjectGallery data={this.mockData}/>
                    </div>
                </div>
            </>
        )
    }
}

export default ScreensDataStructures;