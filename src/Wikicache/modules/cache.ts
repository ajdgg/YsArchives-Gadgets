import * as OPTIONS from '../options.json';
import {
	delay,
	getWpSummaryContent,
	getWpTextbox1Content,
	setWpSummaryContent,
	setWpTextbox1Content,
} from 'ext.gadget.Util';
import {AutoSaveObject} from './types';
import {getMessage} from './i18n';

const getCacheKey = () => {
	const {wgPageName} = mw.config.get();
	let cacheKey: string = `${OPTIONS.cacheKeyPrefix}${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	return cacheKey;
};

const newSaveObject = ({$editForm}: {$editForm: JQuery<HTMLElement>}): AutoSaveObject => {
	const saveObject: AutoSaveObject = {
		date: new Date(),
		wpSummary: getWpSummaryContent({$editForm}),
		wpTextbox1: getWpTextbox1Content({$editForm}),
	};

	return saveObject;
};

const setCache = ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	try {
		mw.storage.setObject(getCacheKey(), newSaveObject({$editForm}), 60 * 60 * 24 * 30 * 1000);
		void mw.notify(getMessage('Change saved'), {
			tag: 'wikicache',
		});
	} catch (error) {
		console.error(error);
	}
};

const getCache = async ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const saveObject: Partial<AutoSaveObject> = mw.storage.getObject(getCacheKey());

	if (!saveObject) {
		return;
	}

	if (saveObject['wpSummary']) {
		setWpSummaryContent({$editForm, content: saveObject['wpSummary']});
	}

	if (!saveObject['wpTextbox1']) {
		return;
	}

	if (![saveObject['wpTextbox1'], `${saveObject['wpTextbox1']}\n`].includes(getWpTextbox1Content({$editForm}))) {
		const confirm = await OO.ui.confirm(getMessage('Restore changes?'), {
			actions: [
				{label: getMessage('Restore unsaved changes'), action: 'accept', flags: ['progressive']},
				{label: getMessage('Not to restore'), action: 'cancel', flags: ['destructive']},
			],
		});
		if (confirm) {
			setWpTextbox1Content({$editForm, content: saveObject['wpTextbox1']});
		}
		mw.storage.remove(`${getCacheKey()}##PreviewDiff`);
	}
};

const autoSetCache = async ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	while (true) {
		await delay(60 * 1000);
		setCache({$editForm});
	}
};

const setCacheBeforeSubmit = ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	const editForm = document.querySelector<HTMLFormElement>('#editform');
	editForm?.addEventListener('submit', (event) => {
		if ([document.querySelector('#wpPreview'), document.querySelector('#wpDiff')].includes(event.submitter)) {
			mw.storage.setObject(`${getCacheKey()}##PreviewDiff`, '1', 60 * 60 * 24 * 1);
		}
		setCache({$editForm});
	});
};

export {getCache, autoSetCache, setCacheBeforeSubmit};
