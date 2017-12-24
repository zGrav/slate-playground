import React, { Component } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';

const initialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				kind: 'block',
				type: 'paragraph',
				nodes: [
					{
						kind: 'text',
						leaves: [{ text: 'Paragraph 1' }],
					},
				],
			},
		],
	},
});

class DummyList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: initialValue,
		};
	}

	render() {
		const style = {
			overflow: 'hidden',
			whiteSpace: 'nowrap',
		};

		return (
			<Editor
				onChange={change => this.onChange(change)}
				placeholder='Enter some text'
				style={style}
				value={this.state.value} />
		);
	}

	onChange({ value }) {
		this.setState({ value });
	}

}

export default DummyList;
