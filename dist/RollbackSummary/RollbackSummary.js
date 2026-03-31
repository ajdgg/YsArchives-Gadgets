/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RollbackSummary}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/RollbackSummary/RollbackSummary.js
//! src/RollbackSummary/modules/updateLinks.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/RollbackSummary/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Prompt: (0, import_ext_gadget.localize)({
      en: "Please enter a custom rollback summary (leave blank to use the system default summary)",
      "zh-hans": "请输入自定义回退摘要（留空则使用系统默认摘要）",
      "zh-hant": "請輸入自定義回退摘要（留空則使用系統預設摘要）"
    }),
    "Rollback edits by": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by [[Special:Contribs/$1|$1]] ([[User talk:$1|talk]]): ",
      "zh-hans": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：",
      "zh-hant": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯："
    }),
    "Rollback edits by a hidden user": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by a hidden user: ",
      "zh-hans": "回退已隐藏用户的编辑：",
      "zh-hant": "回退已隱藏用戶的編輯：",
      "zh-tw": "回退已隱藏使用者的編輯："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RollbackSummary/modules/updateLinks.ts
var updateLinks = ($content) => {
  const $body = $content.parents("body");
  if (!$body.length) {
    return;
  }
  if (!$body.data("gadgetRollbackSummaryBound")) {
    $body.on("click.gadgetRollbackSummary", ".mw-rollback-link a", (0, import_ext_gadget2.filterAlteredClicks)((event) => {
      event.preventDefault();
      let {
        href
      } = event.currentTarget;
      let summary = prompt(getMessage("Prompt"));
      if (summary === null) {
      } else if (summary === "") {
        location.assign(href);
      } else {
        const username = mw.util.getParamValue("from", href);
        if (username) {
          summary = getMessage("Rollback edits by").replaceAll("$1", username) + summary;
        } else {
          summary = getMessage("Rollback edits by a hidden user") + summary;
        }
        href += "&summary=".concat(encodeURIComponent(summary));
        location.assign(href);
      }
    }));
    $body.data("gadgetRollbackSummaryBound", true);
  }
  $content.find(".mw-rollback-link a").css("color", "#099");
};
//! src/RollbackSummary/RollbackSummary.ts
mw.hook("wikipage.content").add(function rollbackSummary($content) {
  updateLinks($content);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL3VwZGF0ZUxpbmtzLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvUm9sbGJhY2tTdW1tYXJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHVwZGF0ZUxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXHRpZiAoISRib2R5Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghJGJvZHkuZGF0YSgnZ2FkZ2V0Um9sbGJhY2tTdW1tYXJ5Qm91bmQnKSkge1xuXHRcdCRib2R5Lm9uKFxuXHRcdFx0J2NsaWNrLmdhZGdldFJvbGxiYWNrU3VtbWFyeScsXG5cdFx0XHQnLm13LXJvbGxiYWNrLWxpbmsgYScsXG5cdFx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRsZXQge2hyZWZ9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRcdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nIHwgbnVsbCA9IHByb21wdChnZXRNZXNzYWdlKCdQcm9tcHQnKSk7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fSBlbHNlIGlmIChzdW1tYXJ5ID09PSAnJykge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihocmVmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZnJvbScsIGhyZWYpO1xuXHRcdFx0XHRcdGlmICh1c2VybmFtZSkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IGdldE1lc3NhZ2UoJ1JvbGxiYWNrIGVkaXRzIGJ5JykucmVwbGFjZUFsbCgnJDEnLCB1c2VybmFtZSkgKyBzdW1tYXJ5O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5ID0gZ2V0TWVzc2FnZSgnUm9sbGJhY2sgZWRpdHMgYnkgYSBoaWRkZW4gdXNlcicpICsgc3VtbWFyeTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aHJlZiArPSBgJnN1bW1hcnk9JHtlbmNvZGVVUklDb21wb25lbnQoc3VtbWFyeSl9YDtcblxuXHRcdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihocmVmKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXG5cdFx0JGJvZHkuZGF0YSgnZ2FkZ2V0Um9sbGJhY2tTdW1tYXJ5Qm91bmQnLCB0cnVlKTtcblx0fVxuXG5cdCRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCcubXctcm9sbGJhY2stbGluayBhJykuY3NzKCdjb2xvcicsICcjMDk5Jyk7XG59O1xuXG5leHBvcnQge3VwZGF0ZUxpbmtzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJvbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBlbnRlciBhIGN1c3RvbSByb2xsYmFjayBzdW1tYXJ5IChsZWF2ZSBibGFuayB0byB1c2UgdGhlIHN5c3RlbSBkZWZhdWx0IHN1bW1hcnkpJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpeiHquWumuS5ieWbnumAgOaRmOimge+8iOeVmeepuuWImeS9v+eUqOezu+e7n+m7mOiupOaRmOimge+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaXoh6rlrprnvqnlm57pgIDmkZjopoHvvIjnlZnnqbrliYfkvb/nlKjns7vntbHpoJDoqK3mkZjopoHvvIknLFxuXHRcdH0pLFxuXHRcdCdSb2xsYmFjayBlZGl0cyBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2ZXJ0IGVkaXQocykgYnkgW1tTcGVjaWFsOkNvbnRyaWJzLyQxfCQxXV0gKFtbVXNlciB0YWxrOiQxfHRhbGtdXSk6ICcsXG5cdFx0XHQnemgtaGFucyc6ICflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWvueivnV1d77yJ55qE57yW6L6R77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbnumAgFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1d77yIW1tVc2VyIHRhbGs6JDF85bCN6KmxXV3vvInnmoTnt6jovK/vvJonLFxuXHRcdH0pLFxuXHRcdCdSb2xsYmFjayBlZGl0cyBieSBhIGhpZGRlbiB1c2VyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXZlcnQgZWRpdChzKSBieSBhIGhpZGRlbiB1c2VyOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zue6YCA5bey6ZqQ6JeP55So5oi355qE57yW6L6R77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbnumAgOW3sumaseiXj+eUqOaItueahOe3qOi8r++8micsXG5cdFx0XHQnemgtdHcnOiAn5Zue6YCA5bey6Zqx6JeP5L2/55So6ICF55qE57eo6Lyv77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHt1cGRhdGVMaW5rc30gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUxpbmtzJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiByb2xsYmFja1N1bW1hcnkoJGNvbnRlbnQpOiB2b2lkIHtcblx0dXBkYXRlTGlua3MoJGNvbnRlbnQpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0NDLFFBQUEsZ0NBQUE7O0FDQWxDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLGtCQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsb0NBQUEsR0FBbUNKLGtCQUFBRyxVQUFTO01BQzNDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7TUFDWCxTQUFTO0lBQ1YsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR4QkEsSUFBTUMsY0FBZUMsY0FBMkI7QUFDL0MsUUFBTUMsUUFBaUNELFNBQVNFLFFBQVEsTUFBTTtBQUM5RCxNQUFJLENBQUNELE1BQU1FLFFBQVE7QUFDbEI7RUFDRDtBQUVBLE1BQUksQ0FBQ0YsTUFBTUcsS0FBSyw0QkFBNEIsR0FBRztBQUM5Q0gsVUFBTUksR0FDTCwrQkFDQSx3QkFBQSxHQUNBaEIsbUJBQUFpQixxQkFBcUJDLFdBQW1DO0FBQ3ZEQSxZQUFNQyxlQUFlO0FBRXJCLFVBQUk7UUFBQ0M7TUFBSSxJQUFJRixNQUFNRztBQUVuQixVQUFJQyxVQUF5QkMsT0FBT2YsV0FBVyxRQUFRLENBQUM7QUFDeEQsVUFBSWMsWUFBWSxNQUFNO01BRXRCLFdBQVdBLFlBQVksSUFBSTtBQUMxQkUsaUJBQVNDLE9BQU9MLElBQUk7TUFDckIsT0FBTztBQUNOLGNBQU1NLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLFFBQVFULElBQUk7QUFDbEUsWUFBSU0sVUFBVTtBQUNiSixvQkFBVWQsV0FBVyxtQkFBbUIsRUFBRXNCLFdBQVcsTUFBTUosUUFBUSxJQUFJSjtRQUN4RSxPQUFPO0FBQ05BLG9CQUFVZCxXQUFXLGlDQUFpQyxJQUFJYztRQUMzRDtBQUNBRixnQkFBQSxZQUFBVyxPQUFvQkMsbUJBQW1CVixPQUFPLENBQUM7QUFFL0NFLGlCQUFTQyxPQUFPTCxJQUFJO01BQ3JCO0lBQ0QsQ0FBQyxDQUNGO0FBRUFSLFVBQU1HLEtBQUssOEJBQThCLElBQUk7RUFDOUM7QUFFQUosV0FBU3NCLEtBQXdCLHFCQUFxQixFQUFFQyxJQUFJLFNBQVMsTUFBTTtBQUM1RTs7QUV2Q0FQLEdBQUdRLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsZ0JBQWdCMUIsVUFBZ0I7QUFDeEVELGNBQVlDLFFBQVE7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByb21wdCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidXBkYXRlTGlua3MiLCAiJGNvbnRlbnQiLCAiJGJvZHkiLCAicGFyZW50cyIsICJsZW5ndGgiLCAiZGF0YSIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImhyZWYiLCAiY3VycmVudFRhcmdldCIsICJzdW1tYXJ5IiwgInByb21wdCIsICJsb2NhdGlvbiIsICJhc3NpZ24iLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInJlcGxhY2VBbGwiLCAiY29uY2F0IiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJmaW5kIiwgImNzcyIsICJob29rIiwgImFkZCIsICJyb2xsYmFja1N1bW1hcnkiXQp9Cg==
