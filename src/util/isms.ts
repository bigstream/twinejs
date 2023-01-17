import uuid from 'tiny-uuid';
import {sortBy} from 'lodash';
import {Passage, passageDefaults, Story, storyDefaults} from '../store/stories';


/**
 * Converts a story from Isms source.
 */
export function storyFromIsms(source: string) {
	const storyImported = JSON.parse(source);
	const id = storyImported.id;

	const story: Story = {
		...storyDefaults(),
		id,
		ifid: uuid(),
		lastUpdate: new Date(),
		passages: storyImported.passages,
		script: storyImported.script,
	};

	return story;
}

/**
 * Converts a story to Isms.
 */
export function storyToIsms(story: Story) {
	let result = JSON.stringify(story);
	return result;
}
