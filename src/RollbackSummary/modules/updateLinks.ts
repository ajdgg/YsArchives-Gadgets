import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';
import {getMessage} from './i18n';

const updateLinks = ($content: JQuery): void => {
	const $body: JQuery<HTMLBodyElement> = $content.parents('body');
	if (!$body.length) {
		return;
	}

	if (!$body.data('gadgetRollbackSummaryBound')) {
		$body.on(
			'click.gadgetRollbackSummary',
			'.mw-rollback-link a',
			filterAlteredClicks((event: JQuery.ClickEvent): void => {
				event.preventDefault();

				let {href} = event.currentTarget as HTMLAnchorElement;

				let summary: string | null = prompt(getMessage('Prompt'));
				if (summary === null) {
					/* empty */
				} else if (summary === '') {
					location.assign(href);
				} else {
					const username: string | null = mw.util.getParamValue('from', href);
					if (username) {
						summary = getMessage('Rollback edits by').replaceAll('$1', username) + summary;
					} else {
						summary = getMessage('Rollback edits by a hidden user') + summary;
					}
					href += `&summary=${encodeURIComponent(summary)}`;

					location.assign(href);
				}
			})
		);

		$body.data('gadgetRollbackSummaryBound', true);
	}

	$content.find<HTMLAnchorElement>('.mw-rollback-link a').css('color', '#099');
};

export {updateLinks};
