import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {FileInput} from '../../components/control/file-input';
import {Story} from '../../store/stories';
import {importStories} from '../../util/import';
import {storyFromTwee} from '../../util/twee';
import {storyFromIsms} from '../../util/isms';

export interface FileChooserProps {
	onChange: (file: File, stories: Story[]) => void;
}

export const FileChooser: React.FC<FileChooserProps> = props => {
	const {onChange} = props;
	const {t} = useTranslation();

	function handleChange(file: File, data: string) {
		if (/\.html$/.test(file.name)) {
			onChange(file, importStories(data));
		} else if (/\.isms$/.test(file.name)) {
			onChange(file, [storyFromIsms(data)]);
		} else {
			onChange(file, [storyFromTwee(data)]);
		}
	}

	return (
		<div className="file-chooser">
			<p>
				<FileInput
					accept=".html,.twee,.tw,.isms"
					onChange={handleChange}
					orientation="vertical"
				>
					{t('dialogs.storyImport.filePrompt')}
				</FileInput>
			</p>
		</div>
	);
};
