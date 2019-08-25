

import { Component } from 'react';

import style from '../styles/projectgallery.scss';
import ProjectBox from './ProjectBox';


class ProjectGallery extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        const subtitles = [
            {
                name: 'Basic Graph',
                pathname: '/algorithms/graphs/simple'
            },
            {
                name: 'Digraph',
                pathname: '/algorithms/graphs/digraph'
            },
            {
                name: 'Weighted Graph',
                pathname: '/algorithms/graphs/weighted'
            },
            {
                name: 'Weighted Digraph',
                pathname: '/algorithms/graphs/weighted_digraph'
            }
        ];

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <div className="container">
                    <div className="grid-row">
                        <ProjectBox name="Graphs" pathname="/algorithms/graphs" image="/images/graph.svg" subtitles={subtitles} />
                        <ProjectBox name="Trees" pathname="/algorithms/trees" image="/images/tree.svg" subtitles={subtitles} />
                        <ProjectBox name="Linked Lists" pathname="/algorithms/lists" image="/images/list.svg" subtitles={subtitles} />
                        <ProjectBox name="Stacks" pathname="/algorithms/stacks" image="/images/stack.svg" subtitles={subtitles} />
                        <ProjectBox name="Queues" pathname="/algorithms/queues" image="/images/queue.svg" subtitles={subtitles} />
                        <ProjectBox name="Tries" pathname="/algorithms/other" image="/images/trie.svg" subtitles={subtitles} />
                        <ProjectBox name="Hash Tables" pathname="/algorithms/other" image="/images/hash_table.svg" subtitles={subtitles} />
                        <ProjectBox name="Heaps" pathname="/algorithms/other" image="/images/heap.svg" subtitles={subtitles} />
                        <ProjectBox name="Arrays" pathname="/algorithms/other" image="/images/array.svg" subtitles={subtitles} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectGallery;