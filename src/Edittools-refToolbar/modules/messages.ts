const refToolbarMesages = (): void => {
	const {wgUserLanguage} = mw.config.get();

	if (wgUserLanguage === 'en') {
		return;
	}
	// All user-facing messages
	// TODO: Document usage
	if (['zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'].includes(wgUserLanguage)) {
		mw.messages.set({
			'cite-section-label': '引用',
			'cite-template-list': '模板',
			'cite-named-refs-label': '同名文獻',
			'cite-named-refs-title': '插入同名文獻',
			'cite-named-refs-button': '已命名參考文獻',
			'cite-named-refs-dropdown': '同名文獻',
			// Used on the top of the named refs list dropsown
			'cite-dialog-base': '引用',
			'cite-form-submit': '插入',
			'cite-form-showhide': '顯示/隱藏額外區域',
			'cite-no-namedrefs': '在本頁找不到任何同名文獻',
			'cite-namedrefs-intro': '從列出的參考文獻目錄中選擇一個名字。點擊「插入」插入一個參考文獻到文本中。',
			'cite-raw-preview': '原始碼：',
			'cite-parsed-label': '解析後的原始碼：',
			'cite-form-parse': '顯示解析後的預覽',
			'cite-refpreview': '預覽',
			'cite-name-label': 'ref名',
			'cite-group-label': 'ref組',
			'cite-form-reset': '重設表單',
			'cite-loading': '載入數據',
			// Shown while pagetext is being downloaded from the API
			'cite-insert-date': '插入當前日期',
			// Alt/title text for "insert date" icon
			'cite-err-report-heading': '引用錯誤報告',
			// Heading for error report table
			'cite-err-report-close': '關閉',
			// Alt/title text for "close" icon on error report
			'cite-err-report-empty': '未找到錯誤',
			// Message displayed in the error report list if there are no errors
			'cite-autofill-alt': '自動填充',
			'cite-increment-alt': '添加作者',
			// Alt text for autofill button image
			'cite-ref-tooltip': '錨點的標識符（使該引用可以成為內部連結的目標）',
			'cite-postscript-tooltip': '如果設定這一參數，則覆蓋使用句點終止引文的默認行爲',
			'cite-dialog-web': '網頁引用',
			'cite-dialog-news': '新聞引用',
			'cite-dialog-book': '書籍引用',
			'cite-dialog-journal': '期刊引用',
			'cite-dialog-conference': '會議引用',
			'cite-dialog-encyclopedia': '百科全書引用',
			'cite-author-label': '作者',
			'cite-title-label': '標題',
			'cite-url-label': '網址',
			'cite-website-label': '網站名稱',
			'cite-work-label': '報紙或雜誌',
			'cite-agency-label': '通訊社',
			'cite-publisher-label': '出版者',
			'cite-accessdate-label': '存取日期',
			'cite-last-label': '姓',
			'cite-first-label': '名',
			'cite-authorlink-label': '作者條目',
			'cite-coauthors-label': '其他作者',
			'cite-location-label': '出版地',
			'cite-page-label': '所在頁',
			'cite-pages-label': '頁範圍',
			'cite-at-label': '書內部分',
			'cite-language-label': '語言',
			'cite-format-label': '文件格式',
			'cite-doi-label': 'DOI',
			'cite-date-label': '日期',
			'cite-month-label': '月份',
			'cite-year-label': '年份',
			'cite-quote-label': '摘錄',
			'cite-newspaper-label': '新聞媒體',
			'cite-author2-label': '第2作者',
			'cite-author3-label': '第3作者',
			'cite-author4-label': '第4作者',
			'cite-author5-label': '第5作者',
			'cite-agency': '通訊社',
			'cite-issn-label': 'ISSN',
			'cite-oclc-label': 'OCLC',
			'cite-bibcode-label': 'Bibcode',
			'cite-isbn-label': 'ISBN',
			'cite-others-label': '譯者',
			'cite-edition-label': '版本',
			'cite-trans-title-label': '翻譯後標題',
			'cite-ref-label': '錨點標識符',
			'cite-postscript-label': '结尾符',
			'cite-series-label': '系列',
			'cite-volume-label': '卷',
			'cite-unified-label': '統一書號',
			'cite-chapter-label': '章節',
			'cite-journal-label': '雜誌/期刊',
			'cite-issue-label': '期',
			'cite-pmid-label': 'PMID',
			'cite-editor-label': '編輯',
			'cite-editor1-first-label': '編輯名',
			'cite-editor1-last-label': '編輯姓',
			'cite-editor1-link-label': '編輯條目',
			'cite-editor-first-label': '編輯名',
			'cite-editor-last-label': '編輯姓',
			'cite-editor-link-label': '編輯條目',
			'cite-pmc-label': 'PMC',
			'cite-id-label': 'ID',
			'cite-laysummary-label': '簡明摘要',
			'cite-laysource-label': '簡明摘要來源',
			'cite-laydate-label': '簡明摘要日期',
			'cite-conference-label': '會議名稱',
			'cite-conferenceurl-label': '會議網址',
			'cite-booktitle-label': '論文集',
			'cite-encyclopedia-label': '百科全書名',
			'cite-authorlink-tooltip': '若該作者有條目，填寫條目名稱',
			'cite-at-tooltip': '內容在來源中的位置（當按頁碼引用不適當時）',
			'cite-accessdate-tooltip': '訪問這個引用來源時的日期',
			'cite-id-tooltip': '其他的文章編號',
			'cite-samecontent-desc': '檢查含有相同內容的多個參考文獻',
			'cite-samecontent-error': '多個參考文獻包含有相同內容',
			'cite-repeated-desc': '使用相同名字的多個參考文獻',
			'cite-repeated-error': '多個參考文獻使用了相同名字',
			'cite-undefined-desc': '未定義的參考文獻',
			'cite-undefined-error': '一個已命名的參考文獻已經使用但是沒有定義',
			'cite-work-tooltip': '刊登該作品的出版物的名稱。請不要使用斜體',
			'cite-newspaper-tooltip': '刊登該新聞的出版物名稱',
			'cite-series-tooltip': '當書籍是一系列出版品中的其中一部份時使用',
			'cite-unified-tooltip': '1980年代之前中國所使用的書籍編號',
			'cite-laysummary-tooltip': '該文獻相關的新聞報道的URL',
			'cite-laysource-tooltip': '該文獻相關的新聞報道的出處',
		});
	} else {
		mw.messages.set({
			'cite-section-label': '引用',
			'cite-template-list': '模板',
			'cite-named-refs-label': '同名文献',
			'cite-named-refs-title': '插入同名文献',
			'cite-named-refs-button': '已命名参考文献',
			'cite-named-refs-dropdown': '同名文献',
			// Used on the top of the named refs list dropsown
			'cite-dialog-base': '引用',
			'cite-form-submit': '插入',
			'cite-form-showhide': '显示/隐藏额外区域',
			'cite-no-namedrefs': '在本页找不到任何同名文献',
			'cite-namedrefs-intro': '从列出的参考文献目录中选择一个名字。点击“插入”插入一个参考文献到文本中。',
			'cite-raw-preview': '源代码：',
			'cite-parsed-label': '解析后的源代码：',
			'cite-form-parse': '显示解析后的预览',
			'cite-refpreview': '预览',
			'cite-name-label': 'ref名',
			'cite-group-label': 'ref组',
			'cite-form-reset': '重设表单',
			'cite-loading': '载入数据',
			// Shown while pagetext is being downloaded from the API
			'cite-insert-date': '插入当前日期',
			// Alt/title text for "insert date" icon
			'cite-err-report-heading': '引用错误报告',
			// Heading for error report table
			'cite-err-report-close': '关闭',
			// Alt/title text for "close" icon on error report
			'cite-err-report-empty': '未找到错误',
			// Message displayed in the error report list if there are no errors
			'cite-autofill-alt': '自动填充',
			'cite-increment-alt': '添加作者',
			// Alt text for autofill button image
			'cite-ref-tooltip': '锚点的标识符（使该引用可以成为内部链接的目标）',
			'cite-postscript-tooltip': '如果设定这一参数，则覆盖使用句点终止引文的默认行为',
			'cite-dialog-web': '网页引用',
			'cite-dialog-news': '新闻引用',
			'cite-dialog-book': '书籍引用',
			'cite-dialog-journal': '期刊引用',
			'cite-dialog-conference': '会议引用',
			'cite-dialog-encyclopedia': '百科全书引用',
			'cite-author-label': '作者',
			'cite-title-label': '标题',
			'cite-url-label': '网址',
			'cite-website-label': '网站名称',
			'cite-work-label': '报纸或杂志',
			'cite-agency-label': '通讯社',
			'cite-publisher-label': '出版者',
			'cite-accessdate-label': '访问日期',
			'cite-last-label': '姓',
			'cite-first-label': '名',
			'cite-authorlink-label': '作者条目',
			'cite-coauthors-label': '其他作者',
			'cite-location-label': '出版地',
			'cite-page-label': '所在页',
			'cite-pages-label': '页范围',
			'cite-at-label': '书内部分',
			'cite-language-label': '语言',
			'cite-format-label': '文档格式',
			'cite-doi-label': 'DOI',
			'cite-date-label': '日期',
			'cite-month-label': '月份',
			'cite-year-label': '年份',
			'cite-quote-label': '摘录',
			'cite-newspaper-label': '新闻媒体',
			'cite-author2-label': '第2作者',
			'cite-author3-label': '第3作者',
			'cite-author4-label': '第4作者',
			'cite-author5-label': '第5作者',
			'cite-agency': '通讯社',
			'cite-issn-label': 'ISSN',
			'cite-oclc-label': 'OCLC',
			'cite-bibcode-label': 'Bibcode',
			'cite-isbn-label': 'ISBN',
			'cite-others-label': '译者',
			'cite-edition-label': '版本',
			'cite-trans-title-label': '翻译后标题',
			'cite-ref-label': '锚点标识符',
			'cite-postscript-label': '结尾符',
			'cite-series-label': '系列',
			'cite-volume-label': '卷',
			'cite-unified-label': '统一书号',
			'cite-chapter-label': '章节',
			'cite-journal-label': '杂志/期刊',
			'cite-issue-label': '期',
			'cite-pmid-label': 'PMID',
			'cite-editor-label': '编辑',
			'cite-editor1-first-label': '编辑名',
			'cite-editor1-last-label': '编辑姓',
			'cite-editor1-link-label': '编辑条目',
			'cite-editor-first-label': '编辑名',
			'cite-editor-last-label': '编辑姓',
			'cite-editor-link-label': '编辑条目',
			'cite-pmc-label': 'PMC',
			'cite-id-label': 'ID',
			'cite-laysummary-label': '简明摘要',
			'cite-laysource-label': '简明摘要来源',
			'cite-laydate-label': '简明摘要日期',
			'cite-conference-label': '会议名称',
			'cite-conferenceurl-label': '会议网址',
			'cite-booktitle-label': '论文集',
			'cite-encyclopedia-label': '百科全书名',
			'cite-authorlink-tooltip': '若该作者有条目，填写条目名称',
			'cite-at-tooltip': '内容在来源中的位置（当按页码引用不适当时）',
			'cite-accessdate-tooltip': '访问这个引用来源时的日期',
			'cite-id-tooltip': '其他的文章编号',
			'cite-samecontent-desc': '检查含有相同内容的多个参考文献',
			'cite-samecontent-error': '多个参考文献包含有相同内容',
			'cite-repeated-desc': '使用相同名字的多个参考文献',
			'cite-repeated-error': '多个参考文献使用了相同名字',
			'cite-undefined-desc': '未定义的参考文献',
			'cite-undefined-error': '一个已命名的参考文献已经使用但是没有定义',
			'cite-work-tooltip': '刊登该作品的出版物的名称。请不要使用斜体',
			'cite-newspaper-tooltip': '刊登該新聞的出版物名称',
			'cite-series-tooltip': '当书籍是一系列出版品中的其中一部份时使用',
			'cite-unified-tooltip': '1980年代之前中国所使用的书籍编号',
			'cite-laysummary-tooltip': '该文献相关的新闻报道的URL',
			'cite-laysource-tooltip': '该文献相关的新闻报道的出处',
		});
	}
};

export {refToolbarMesages};
