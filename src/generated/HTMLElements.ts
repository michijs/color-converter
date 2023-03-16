// file generated from @vscode/web-custom-data 0.4.5
// HTML Data Version 1.1
import { AllAttributes } from "./AllAttributes";
import { ValueSets } from "./ValueSets";
import { GlobalEvents, WindowEvents } from "../Events";
import { DataGlobalAttributes } from "../types";
interface GlobalAttributes
  extends Pick<
    AllAttributes,
    | "accesskey"
    | "autocapitalize"
    | "class"
    | "contenteditable"
    | "contextmenu"
    | "dir"
    | "draggable"
    | "dropzone"
    | "exportparts"
    | "hidden"
    | "id"
    | "inputmode"
    | "is"
    | "itemid"
    | "itemprop"
    | "itemref"
    | "itemscope"
    | "itemtype"
    | "lang"
    | "part"
    | "role"
    | "slot"
    | "spellcheck"
    | "style"
    | "tabindex"
    | "title"
    | "translate"
    | "aria-activedescendant"
    | "aria-atomic"
    | "aria-autocomplete"
    | "aria-busy"
    | "aria-checked"
    | "aria-colcount"
    | "aria-colindex"
    | "aria-colspan"
    | "aria-controls"
    | "aria-current"
    | "aria-describedby"
    | "aria-disabled"
    | "aria-dropeffect"
    | "aria-errormessage"
    | "aria-expanded"
    | "aria-flowto"
    | "aria-grabbed"
    | "aria-haspopup"
    | "aria-hidden"
    | "aria-invalid"
    | "aria-label"
    | "aria-labelledby"
    | "aria-level"
    | "aria-live"
    | "aria-modal"
    | "aria-multiline"
    | "aria-multiselectable"
    | "aria-orientation"
    | "aria-owns"
    | "aria-placeholder"
    | "aria-posinset"
    | "aria-pressed"
    | "aria-readonly"
    | "aria-relevant"
    | "aria-required"
    | "aria-roledescription"
    | "aria-rowcount"
    | "aria-rowindex"
    | "aria-rowspan"
    | "aria-selected"
    | "aria-setsize"
    | "aria-sort"
    | "aria-valuemax"
    | "aria-valuemin"
    | "aria-valuenow"
    | "aria-valuetext"
    | "aria-details"
    | "aria-keyshortcuts"
  > {}

export interface HTMLAAttributes
  extends Pick<
      AllAttributes,
      | "href"
      | "target"
      | "download"
      | "ping"
      | "rel"
      | "hreflang"
      | "type"
      | "referrerpolicy"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["a"]>,
    GlobalAttributes {}
export interface HTMLAbbrAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["abbr"]>,
    GlobalAttributes {}
export interface HTMLAddressAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["address"]>,
    GlobalAttributes {}
export interface HTMLAreaAttributes
  extends Pick<
      AllAttributes,
      | "alt"
      | "coords"
      | "shape"
      | "href"
      | "target"
      | "download"
      | "ping"
      | "rel"
      | "hreflang"
      | "type"
      | "accesskey"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["area"]>,
    GlobalAttributes {}
export interface HTMLArticleAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["article"]>,
    GlobalAttributes {}
export interface HTMLAsideAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["aside"]>,
    GlobalAttributes {}
export interface HTMLAudioAttributes
  extends Pick<
      AllAttributes,
      | "src"
      | "crossorigin"
      | "preload"
      | "autoplay"
      | "mediagroup"
      | "loop"
      | "muted"
      | "controls"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["audio"]>,
    GlobalAttributes {}
export interface HTMLBaseAttributes
  extends Pick<AllAttributes, "href" | "target">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["base"]>,
    GlobalAttributes {}
export interface HTMLBAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["b"]>,
    GlobalAttributes {}
export interface HTMLBdiAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["bdi"]>,
    GlobalAttributes {}
export interface HTMLBdoAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["bdo"]>,
    GlobalAttributes {}
export interface HTMLBlockquoteAttributes
  extends Pick<AllAttributes, "cite">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["blockquote"]>,
    GlobalAttributes {}
export interface HTMLBodyAttributes
  extends Pick<
      AllAttributes,
      | "alink"
      | "background"
      | "bgcolor"
      | "bottommargin"
      | "leftmargin"
      | "link"
      | "rightmargin"
      | "text"
      | "topmargin"
      | "vlink"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["body"]>,
    WindowEvents<HTMLElementTagNameMap["body"]>,
    GlobalAttributes {}
export interface HTMLBrAttributes
  extends Pick<AllAttributes, "clear">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["br"]>,
    GlobalAttributes {}
export interface HTMLButtonAttributes
  extends Pick<
      AllAttributes,
      | "autofocus"
      | "disabled"
      | "form"
      | "formaction"
      | "formenctype"
      | "formmethod"
      | "formnovalidate"
      | "formtarget"
      | "name"
      | "value"
      | "autocomplete"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["button"]>,
    GlobalAttributes {
  /**
   * The type of the button. Possible values are:
   *
   * *   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
   * *   `reset`: The button resets all the controls to their initial values.
   * *   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur. */
  type?: ValueSets["bt"];
}
export interface HTMLCanvasAttributes
  extends Pick<AllAttributes, "width" | "height" | "moz-opaque">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["canvas"]>,
    GlobalAttributes {}
export interface HTMLCaptionAttributes
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["caption"]>,
    GlobalAttributes {}
export interface HTMLCiteAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["cite"]>,
    GlobalAttributes {}
export interface HTMLCodeAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["code"]>,
    GlobalAttributes {}
export interface HTMLColAttributes
  extends Pick<AllAttributes, "span" | "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["col"]>,
    GlobalAttributes {}
export interface HTMLColgroupAttributes
  extends Pick<AllAttributes, "span" | "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["colgroup"]>,
    GlobalAttributes {}
export interface HTMLDataAttributes
  extends Pick<AllAttributes, "value">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["data"]>,
    GlobalAttributes {}
export interface HTMLDatalistAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["datalist"]>,
    GlobalAttributes {}
export interface HTMLDdAttributes
  extends Pick<AllAttributes, "nowrap">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dd"]>,
    GlobalAttributes {}
export interface HTMLDelAttributes
  extends Pick<AllAttributes, "cite" | "datetime">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["del"]>,
    GlobalAttributes {}
export interface HTMLDetailsAttributes
  extends Pick<AllAttributes, "open">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["details"]>,
    GlobalAttributes {}
export interface HTMLDfnAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dfn"]>,
    GlobalAttributes {}
export interface HTMLDialogAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dialog"]>,
    GlobalAttributes {
  /**
   * Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user. */
  open?: ValueSets["default"];
}
export interface HTMLDivAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["div"]>,
    GlobalAttributes {}
export interface HTMLDlAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dl"]>,
    GlobalAttributes {}
export interface HTMLDtAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dt"]>,
    GlobalAttributes {}
export interface HTMLEmAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["em"]>,
    GlobalAttributes {}
export interface HTMLEmbedAttributes
  extends Pick<AllAttributes, "src" | "type" | "width" | "height">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["embed"]>,
    GlobalAttributes {}
export interface HTMLFieldsetAttributes
  extends Pick<AllAttributes, "disabled" | "form" | "name">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["fieldset"]>,
    GlobalAttributes {}
export interface HTMLFigcaptionAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["figcaption"]>,
    GlobalAttributes {}
export interface HTMLFigureAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["figure"]>,
    GlobalAttributes {}
export interface HTMLFooterAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["footer"]>,
    GlobalAttributes {}
export interface HTMLFormAttributes
  extends Pick<
      AllAttributes,
      | "accept-charset"
      | "action"
      | "autocomplete"
      | "enctype"
      | "method"
      | "name"
      | "novalidate"
      | "target"
      | "accept"
      | "autocapitalize"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["form"]>,
    GlobalAttributes {}
export interface HTMLH1Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h1"]>,
    GlobalAttributes {}
export interface HTMLH2Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h2"]>,
    GlobalAttributes {}
export interface HTMLH3Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h3"]>,
    GlobalAttributes {}
export interface HTMLH4Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h4"]>,
    GlobalAttributes {}
export interface HTMLH5Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h5"]>,
    GlobalAttributes {}
export interface HTMLH6Attributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h6"]>,
    GlobalAttributes {}
export interface HTMLHeadAttributes
  extends Pick<AllAttributes, "profile">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["head"]>,
    GlobalAttributes {}
export interface HTMLHeaderAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["header"]>,
    GlobalAttributes {}
export interface HTMLHgroupAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["hgroup"]>,
    GlobalAttributes {}
export interface HTMLHrAttributes
  extends Pick<AllAttributes, "align" | "color" | "noshade" | "size" | "width">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["hr"]>,
    GlobalAttributes {}
export interface HTMLHtmlAttributes
  extends Pick<AllAttributes, "manifest" | "version" | "xmlns">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["html"]>,
    GlobalAttributes {}
export interface HTMLIAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["i"]>,
    GlobalAttributes {}
export interface HTMLIframeAttributes
  extends Pick<
      AllAttributes,
      | "src"
      | "srcdoc"
      | "name"
      | "sandbox"
      | "seamless"
      | "allowfullscreen"
      | "width"
      | "height"
      | "allow"
      | "allowpaymentrequest"
      | "allowpaymentrequest"
      | "csp"
      | "importance"
      | "referrerpolicy"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["iframe"]>,
    GlobalAttributes {}
export interface HTMLImgAttributes
  extends Pick<
      AllAttributes,
      | "alt"
      | "src"
      | "srcset"
      | "crossorigin"
      | "usemap"
      | "ismap"
      | "width"
      | "height"
      | "decoding"
      | "loading"
      | "sizes"
      | "importance"
      | "importance"
      | "intrinsicsize"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["img"]>,
    GlobalAttributes {
  /**
   * A string indicating which referrer to use when fetching the resource:
   *
   * *   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
   * *   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.
   * *   `origin:` The `Referer` header will include the page of origin's scheme, the host, and the port.
   * *   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.
   * *   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins. */
  referrerpolicy?: ValueSets["referrerpolicy"];
}
export interface HTMLInputAttributes
  extends Pick<
      AllAttributes,
      | "accept"
      | "alt"
      | "autofocus"
      | "checked"
      | "dirname"
      | "disabled"
      | "form"
      | "formaction"
      | "formenctype"
      | "formmethod"
      | "formnovalidate"
      | "formtarget"
      | "height"
      | "list"
      | "max"
      | "maxlength"
      | "min"
      | "minlength"
      | "multiple"
      | "name"
      | "pattern"
      | "placeholder"
      | "readonly"
      | "required"
      | "size"
      | "src"
      | "step"
      | "value"
      | "width"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["input"]>,
    GlobalAttributes {
  autocomplete?: ValueSets["inputautocomplete"];
  inputmode?: ValueSets["im"];
  type?: ValueSets["t"];
}
export interface HTMLInsAttributes
  extends Pick<AllAttributes, "cite" | "datetime">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ins"]>,
    GlobalAttributes {}
export interface HTMLKbdAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["kbd"]>,
    GlobalAttributes {}
export interface HTMLLabelAttributes
  extends Pick<AllAttributes, "form" | "for">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["label"]>,
    GlobalAttributes {}
export interface HTMLLegendAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["legend"]>,
    GlobalAttributes {}
export interface HTMLLiAttributes
  extends Pick<AllAttributes, "value" | "type">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["li"]>,
    GlobalAttributes {}
export interface HTMLLinkAttributes
  extends Pick<
      AllAttributes,
      | "href"
      | "crossorigin"
      | "rel"
      | "media"
      | "hreflang"
      | "type"
      | "sizes"
      | "as"
      | "importance"
      | "importance"
      | "integrity"
      | "referrerpolicy"
      | "title"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["link"]>,
    GlobalAttributes {}
export interface HTMLMainAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["main"]>,
    GlobalAttributes {}
export interface HTMLMapAttributes
  extends Pick<AllAttributes, "name">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["map"]>,
    GlobalAttributes {}
export interface HTMLMarkAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["mark"]>,
    GlobalAttributes {}
export interface HTMLMenuAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["menu"]>,
    GlobalAttributes {}
export interface HTMLMetaAttributes
  extends Pick<
      AllAttributes,
      "name" | "http-equiv" | "content" | "charset" | "scheme"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["meta"]>,
    GlobalAttributes {}
export interface HTMLMeterAttributes
  extends Pick<
      AllAttributes,
      "value" | "min" | "max" | "low" | "high" | "optimum" | "form"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["meter"]>,
    GlobalAttributes {}
export interface HTMLNavAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["nav"]>,
    GlobalAttributes {}
export interface HTMLNoscriptAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["noscript"]>,
    GlobalAttributes {}
export interface HTMLObjectAttributes
  extends Pick<
      AllAttributes,
      | "data"
      | "type"
      | "typemustmatch"
      | "name"
      | "usemap"
      | "form"
      | "width"
      | "height"
      | "archive"
      | "border"
      | "classid"
      | "codebase"
      | "codetype"
      | "declare"
      | "standby"
      | "tabindex"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["object"]>,
    GlobalAttributes {}
export interface HTMLOlAttributes
  extends Pick<AllAttributes, "reversed" | "start" | "compact">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ol"]>,
    GlobalAttributes {
  /**
   * Indicates the numbering type:
   *
   * *   `'a'` indicates lowercase letters,
   * *   `'A'` indicates uppercase letters,
   * *   `'i'` indicates lowercase Roman numerals,
   * *   `'I'` indicates uppercase Roman numerals,
   * *   and `'1'` indicates numbers (default).
   *
   * The type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li "The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.") element.
   *
   * **Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.
   *
   * Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property should be used instead. */
  type?: ValueSets["lt"];
}
export interface HTMLOptgroupAttributes
  extends Pick<AllAttributes, "disabled" | "label">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["optgroup"]>,
    GlobalAttributes {}
export interface HTMLOptionAttributes
  extends Pick<AllAttributes, "disabled" | "label" | "selected" | "value">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["option"]>,
    GlobalAttributes {}
export interface HTMLOutputAttributes
  extends Pick<AllAttributes, "for" | "form" | "name">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["output"]>,
    GlobalAttributes {}
export interface HTMLParamAttributes
  extends Pick<AllAttributes, "name" | "value" | "type" | "valuetype">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElement>,
    GlobalAttributes {}
export interface HTMLPAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["p"]>,
    GlobalAttributes {}
export interface HTMLPictureAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["picture"]>,
    GlobalAttributes {}
export interface HTMLPreAttributes
  extends Pick<AllAttributes, "cols" | "width" | "wrap">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["pre"]>,
    GlobalAttributes {}
export interface HTMLProgressAttributes
  extends Pick<AllAttributes, "value" | "max">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["progress"]>,
    GlobalAttributes {}
export interface HTMLQAttributes
  extends Pick<AllAttributes, "cite">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["q"]>,
    GlobalAttributes {}
export interface HTMLRbAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElement>,
    GlobalAttributes {}
export interface HTMLRpAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["rp"]>,
    GlobalAttributes {}
export interface HTMLRtAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["rt"]>,
    GlobalAttributes {}
export interface HTMLRubyAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ruby"]>,
    GlobalAttributes {}
export interface HTMLSampAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["samp"]>,
    GlobalAttributes {}
export interface HTMLSAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["s"]>,
    GlobalAttributes {}
export interface HTMLScriptAttributes
  extends Pick<
      AllAttributes,
      | "src"
      | "type"
      | "charset"
      | "async"
      | "defer"
      | "crossorigin"
      | "nonce"
      | "integrity"
      | "nomodule"
      | "referrerpolicy"
      | "text"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["script"]>,
    GlobalAttributes {}
export interface HTMLSectionAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["section"]>,
    GlobalAttributes {}
export interface HTMLSelectAttributes
  extends Pick<
      AllAttributes,
      | "autofocus"
      | "disabled"
      | "form"
      | "multiple"
      | "name"
      | "required"
      | "size"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["select"]>,
    GlobalAttributes {
  /**
   * A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent's](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent's: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete. */
  autocomplete?: ValueSets["inputautocomplete"];
}
export interface HTMLSlotAttributes
  extends Pick<AllAttributes, "name">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["slot"]>,
    GlobalAttributes {}
export interface HTMLSmallAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["small"]>,
    GlobalAttributes {}
export interface HTMLSourceAttributes
  extends Pick<AllAttributes, "src" | "type" | "sizes" | "srcset" | "media">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["source"]>,
    GlobalAttributes {}
export interface HTMLSpanAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["span"]>,
    GlobalAttributes {}
export interface HTMLStrongAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["strong"]>,
    GlobalAttributes {}
export interface HTMLStyleAttributes
  extends Pick<AllAttributes, "media" | "nonce" | "type" | "scoped" | "title">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["style"]>,
    GlobalAttributes {}
export interface HTMLSubAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["sub"]>,
    GlobalAttributes {}
export interface HTMLSummaryAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["summary"]>,
    GlobalAttributes {}
export interface HTMLSupAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["sup"]>,
    GlobalAttributes {}
export interface HTMLTableAttributes
  extends Pick<AllAttributes, "border" | "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["table"]>,
    GlobalAttributes {}
export interface HTMLTbodyAttributes
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tbody"]>,
    GlobalAttributes {}
export interface HTMLTdAttributes
  extends Pick<
      AllAttributes,
      "colspan" | "rowspan" | "headers" | "abbr" | "align" | "axis" | "bgcolor"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["td"]>,
    GlobalAttributes {}
export interface HTMLTemplateAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["template"]>,
    GlobalAttributes {}
export interface HTMLTextareaAttributes
  extends Pick<
      AllAttributes,
      | "autofocus"
      | "cols"
      | "dirname"
      | "disabled"
      | "form"
      | "maxlength"
      | "minlength"
      | "name"
      | "placeholder"
      | "readonly"
      | "required"
      | "rows"
      | "autocapitalize"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["textarea"]>,
    GlobalAttributes {
  /**
   * This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:
   *
   * *   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
   * *   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.
   *
   * If the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element's form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."). */
  autocomplete?: ValueSets["inputautocomplete"];
  inputmode?: ValueSets["im"];
  /**
   * Indicates how the control wraps text. Possible values are:
   *
   * *   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.
   * *   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.
   * *   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.
   *
   * If this attribute is not specified, `soft` is its default value. */
  wrap?: ValueSets["w"];
}
export interface HTMLTfootAttributes
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tfoot"]>,
    GlobalAttributes {}
export interface HTMLThAttributes
  extends Pick<
      AllAttributes,
      | "colspan"
      | "rowspan"
      | "headers"
      | "scope"
      | "sorted"
      | "abbr"
      | "align"
      | "axis"
      | "bgcolor"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["th"]>,
    GlobalAttributes {}
export interface HTMLTheadAttributes
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["thead"]>,
    GlobalAttributes {}
export interface HTMLTimeAttributes
  extends Pick<AllAttributes, "datetime">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["time"]>,
    GlobalAttributes {}
export interface HTMLTitleAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["title"]>,
    GlobalAttributes {}
export interface HTMLTrackAttributes
  extends Pick<AllAttributes, "default" | "kind" | "label" | "src" | "srclang">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["track"]>,
    GlobalAttributes {}
export interface HTMLTrAttributes
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tr"]>,
    GlobalAttributes {}
export interface HTMLUAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["u"]>,
    GlobalAttributes {}
export interface HTMLUlAttributes
  extends Pick<AllAttributes, "compact">,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ul"]>,
    GlobalAttributes {}
export interface HTMLVarAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["var"]>,
    GlobalAttributes {}
export interface HTMLVideoAttributes
  extends Pick<
      AllAttributes,
      | "src"
      | "crossorigin"
      | "poster"
      | "preload"
      | "autoplay"
      | "mediagroup"
      | "loop"
      | "muted"
      | "controls"
      | "width"
      | "height"
    >,
    DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["video"]>,
    GlobalAttributes {}
export interface HTMLWbrAttributes
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["wbr"]>,
    GlobalAttributes {}
export interface HTMLElements {
  /**
   * If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/a} */
  a: HTMLAAttributes;
  /**
   * The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/abbr} */
  abbr: HTMLAbbrAttributes;
  /**
   * The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/address} */
  address: HTMLAddressAttributes;
  /**
   * The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/area} */
  area: HTMLAreaAttributes;
  /**
   * The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/article} */
  article: HTMLArticleAttributes;
  /**
   * The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/aside} */
  aside: HTMLAsideAttributes;
  /**
   * An audio element represents a sound or audio stream.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/audio} */
  audio: HTMLAudioAttributes;
  /**
   * The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/b} */
  b: HTMLBAttributes;
  /**
   * The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/base} */
  base: HTMLBaseAttributes;
  /**
   * The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdi} */
  bdi: HTMLBdiAttributes;
  /**
   * The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdo} */
  bdo: HTMLBdoAttributes;
  /**
   * The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/blockquote} */
  blockquote: HTMLBlockquoteAttributes;
  /**
   * The body element represents the content of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/body} */
  body: HTMLBodyAttributes;
  /**
   * The br element represents a line break.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/br} */
  br: HTMLBrAttributes;
  /**
   * The button element represents a button labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/button} */
  button: HTMLButtonAttributes;
  /**
   * The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/canvas} */
  canvas: HTMLCanvasAttributes;
  /**
   * The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/caption} */
  caption: HTMLCaptionAttributes;
  /**
   * The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/cite} */
  cite: HTMLCiteAttributes;
  /**
   * The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/code} */
  code: HTMLCodeAttributes;
  /**
   * If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/col} */
  col: HTMLColAttributes;
  /**
   * The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/colgroup} */
  colgroup: HTMLColgroupAttributes;
  /**
   * The data element links a given piece of content with a machine-readable translation. */
  data: HTMLDataAttributes;
  /**
   * The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/datalist} */
  datalist: HTMLDatalistAttributes;
  /**
   * The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dd} */
  dd: HTMLDdAttributes;
  /**
   * The del element represents a removal from the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/del} */
  del: HTMLDelAttributes;
  /**
   * The details element represents a disclosure widget from which the user can obtain additional information or controls.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/details} */
  details: HTMLDetailsAttributes;
  /**
   * The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dfn} */
  dfn: HTMLDfnAttributes;
  /**
   * The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dialog} */
  dialog: HTMLDialogAttributes;
  /**
   * The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/div} */
  div: HTMLDivAttributes;
  /**
   * The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dl} */
  dl: HTMLDlAttributes;
  /**
   * The dt element represents the term, or name, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dt} */
  dt: HTMLDtAttributes;
  /**
   * The em element represents stress emphasis of its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/em} */
  em: HTMLEmAttributes;
  /**
   * The embed element provides an integration point for an external (typically non-HTML) application or interactive content.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/embed} */
  embed: HTMLEmbedAttributes;
  /**
   * The fieldset element represents a set of form controls optionally grouped under a common name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/fieldset} */
  fieldset: HTMLFieldsetAttributes;
  /**
   * The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figcaption} */
  figcaption: HTMLFigcaptionAttributes;
  /**
   * The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figure} */
  figure: HTMLFigureAttributes;
  /**
   * The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/footer} */
  footer: HTMLFooterAttributes;
  /**
   * The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/form} */
  form: HTMLFormAttributes;
  /**
   * The h1 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h1: HTMLH1Attributes;
  /**
   * The h2 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h2: HTMLH2Attributes;
  /**
   * The h3 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h3: HTMLH3Attributes;
  /**
   * The h4 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h4: HTMLH4Attributes;
  /**
   * The h5 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h5: HTMLH5Attributes;
  /**
   * The h6 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h6: HTMLH6Attributes;
  /**
   * The head element represents a collection of metadata for the Document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/head} */
  head: HTMLHeadAttributes;
  /**
   * The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/header} */
  header: HTMLHeaderAttributes;
  /**
   * The hgroup element represents a heading and related content. It groups a single h1–h6 element with one or more p. */
  hgroup: HTMLHgroupAttributes;
  /**
   * The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/hr} */
  hr: HTMLHrAttributes;
  /**
   * The html element represents the root of an HTML document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/html} */
  html: HTMLHtmlAttributes;
  /**
   * The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/i} */
  i: HTMLIAttributes;
  /**
   * The iframe element represents a nested browsing context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/iframe} */
  iframe: HTMLIframeAttributes;
  /**
   * An img element represents an image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/img} */
  img: HTMLImgAttributes;
  /**
   * The input element represents a typed data field, usually with a form control to allow the user to edit the data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/input} */
  input: HTMLInputAttributes;
  /**
   * The ins element represents an addition to the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ins} */
  ins: HTMLInsAttributes;
  /**
   * The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/kbd} */
  kbd: HTMLKbdAttributes;
  /**
   * The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/label} */
  label: HTMLLabelAttributes;
  /**
   * The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/legend} */
  legend: HTMLLegendAttributes;
  /**
   * The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/li} */
  li: HTMLLiAttributes;
  /**
   * The link element allows authors to link their document to other resources.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/link} */
  link: HTMLLinkAttributes;
  /**
   * The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/main} */
  main: HTMLMainAttributes;
  /**
   * The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/map} */
  map: HTMLMapAttributes;
  /**
   * The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/mark} */
  mark: HTMLMarkAttributes;
  /**
   * The menu element represents an unordered list of interactive items. */
  menu: HTMLMenuAttributes;
  /**
   * The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meta} */
  meta: HTMLMetaAttributes;
  /**
   * The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meter} */
  meter: HTMLMeterAttributes;
  /**
   * The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/nav} */
  nav: HTMLNavAttributes;
  /**
   * The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/noscript} */
  noscript: HTMLNoscriptAttributes;
  /**
   * The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/object} */
  object: HTMLObjectAttributes;
  /**
   * The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ol} */
  ol: HTMLOlAttributes;
  /**
   * The optgroup element represents a group of option elements with a common label.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/optgroup} */
  optgroup: HTMLOptgroupAttributes;
  /**
   * The option element represents an option in a select element or as part of a list of suggestions in a datalist element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/option} */
  option: HTMLOptionAttributes;
  /**
   * The output element represents the result of a calculation performed by the application, or the result of a user action.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/output} */
  output: HTMLOutputAttributes;
  /**
   * The p element represents a paragraph.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/p} */
  p: HTMLPAttributes;
  /**
   * The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/param} */
  param: HTMLParamAttributes;
  /**
   * The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/picture} */
  picture: HTMLPictureAttributes;
  /**
   * The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/pre} */
  pre: HTMLPreAttributes;
  /**
   * The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/progress} */
  progress: HTMLProgressAttributes;
  /**
   * The q element represents some phrasing content quoted from another source.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/q} */
  q: HTMLQAttributes;
  /**
   * The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rb} */
  rb: HTMLRbAttributes;
  /**
   * The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rp} */
  rp: HTMLRpAttributes;
  /**
   * The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rt} */
  rt: HTMLRtAttributes;
  /**
   * The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ruby} */
  ruby: HTMLRubyAttributes;
  /**
   * The s element represents contents that are no longer accurate or no longer relevant.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/s} */
  s: HTMLSAttributes;
  /**
   * The samp element represents sample or quoted output from another program or computing system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/samp} */
  samp: HTMLSampAttributes;
  /**
   * The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/script} */
  script: HTMLScriptAttributes;
  /**
   * The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/section} */
  section: HTMLSectionAttributes;
  /**
   * The select element represents a control for selecting amongst a set of options.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/select} */
  select: HTMLSelectAttributes;
  /**
   * The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. */
  slot: HTMLSlotAttributes;
  /**
   * The small element represents side comments such as small print.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/small} */
  small: HTMLSmallAttributes;
  /**
   * The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/source} */
  source: HTMLSourceAttributes;
  /**
   * The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/span} */
  span: HTMLSpanAttributes;
  /**
   * The strong element represents strong importance, seriousness, or urgency for its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/strong} */
  strong: HTMLStrongAttributes;
  /**
   * The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/style} */
  style: HTMLStyleAttributes;
  /**
   * The sub element represents a subscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sub} */
  sub: HTMLSubAttributes;
  /**
   * The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/summary} */
  summary: HTMLSummaryAttributes;
  /**
   * The sup element represents a superscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sup} */
  sup: HTMLSupAttributes;
  /**
   * The table element represents data with more than one dimension, in the form of a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/table} */
  table: HTMLTableAttributes;
  /**
   * The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tbody} */
  tbody: HTMLTbodyAttributes;
  /**
   * The td element represents a data cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/td} */
  td: HTMLTdAttributes;
  /**
   * The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/template} */
  template: HTMLTemplateAttributes;
  /**
   * The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/textarea} */
  textarea: HTMLTextareaAttributes;
  /**
   * The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tfoot} */
  tfoot: HTMLTfootAttributes;
  /**
   * The th element represents a header cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/th} */
  th: HTMLThAttributes;
  /**
   * The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/thead} */
  thead: HTMLTheadAttributes;
  /**
   * The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/time} */
  time: HTMLTimeAttributes;
  /**
   * The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/title} */
  title: HTMLTitleAttributes;
  /**
   * The tr element represents a row of cells in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tr} */
  tr: HTMLTrAttributes;
  /**
   * The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/track} */
  track: HTMLTrackAttributes;
  /**
   * The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/u} */
  u: HTMLUAttributes;
  /**
   * The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ul} */
  ul: HTMLUlAttributes;
  /**
   * The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/var} */
  var: HTMLVarAttributes;
  /**
   * A video element is used for playing videos or movies, and audio files with captions.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/video} */
  video: HTMLVideoAttributes;
  /**
   * The wbr element represents a line break opportunity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/wbr} */
  wbr: HTMLWbrAttributes;
}
