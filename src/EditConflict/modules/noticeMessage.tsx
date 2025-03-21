import React from 'ext.gadget.JSX';
import {getMessage} from './i18n';

const locationReload = () => {
	location.reload();
	return false;
};

const NoticeMessage = () => (
	<span>
		{getMessage('Notice')}
		<a onClick={locationReload}>{getMessage('Refresh')}</a>
	</span>
);

export {NoticeMessage};
