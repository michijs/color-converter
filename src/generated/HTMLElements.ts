// file generated from @vscode/web-custom-data NPM package
// Data Version 1.1)
import { AllAttributes } from "./AllAttributes";
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
export interface HTMLElementA
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["a"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "href"
      | "target"
      | "download"
      | "ping"
      | "rel"
      | "hreflang"
      | "type"
      | "referrerpolicy"
    > {}
export interface HTMLElementAbbr
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["abbr"]>,
    GlobalAttributes {}
export interface HTMLElementAddress
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["address"]>,
    GlobalAttributes {}
export interface HTMLElementArea
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["area"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementArticle
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["article"]>,
    GlobalAttributes {}
export interface HTMLElementAside
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["aside"]>,
    GlobalAttributes {}
export interface HTMLElementAudio
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["audio"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "src"
      | "crossorigin"
      | "preload"
      | "autoplay"
      | "mediagroup"
      | "loop"
      | "muted"
      | "controls"
    > {}
export interface HTMLElementB
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["b"]>,
    GlobalAttributes {}
export interface HTMLElementBase
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["base"]>,
    GlobalAttributes,
    Pick<AllAttributes, "href" | "target"> {}
export interface HTMLElementBdi
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["bdi"]>,
    GlobalAttributes {}
export interface HTMLElementBdo
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["bdo"]>,
    GlobalAttributes,
    Pick<AllAttributes, "dir"> {}
export interface HTMLElementBlockquote
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["blockquote"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cite"> {}
export interface HTMLElementBody
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["body"]>,
    WindowEvents<HTMLElementTagNameMap["body"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementBr
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["br"]>,
    GlobalAttributes,
    Pick<AllAttributes, "clear"> {}
export interface HTMLElementButton
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["button"]>,
    GlobalAttributes,
    Pick<
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
      | "type"
      | "value"
      | "autocomplete"
    > {}
export interface HTMLElementCanvas
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["canvas"]>,
    GlobalAttributes,
    Pick<AllAttributes, "width" | "height" | "moz-opaque"> {}
export interface HTMLElementCaption
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["caption"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align"> {}
export interface HTMLElementCite
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["cite"]>,
    GlobalAttributes {}
export interface HTMLElementCode
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["code"]>,
    GlobalAttributes {}
export interface HTMLElementCol
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["col"]>,
    GlobalAttributes,
    Pick<AllAttributes, "span" | "align"> {}
export interface HTMLElementColgroup
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["colgroup"]>,
    GlobalAttributes,
    Pick<AllAttributes, "span" | "align"> {}
export interface HTMLElementData
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["data"]>,
    GlobalAttributes,
    Pick<AllAttributes, "value"> {}
export interface HTMLElementDatalist
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["datalist"]>,
    GlobalAttributes {}
export interface HTMLElementDd
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dd"]>,
    GlobalAttributes,
    Pick<AllAttributes, "nowrap"> {}
export interface HTMLElementDel
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["del"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cite" | "datetime"> {}
export interface HTMLElementDetails
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["details"]>,
    GlobalAttributes,
    Pick<AllAttributes, "open"> {}
export interface HTMLElementDfn
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dfn"]>,
    GlobalAttributes {}
export interface HTMLElementDialog
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dialog"]>,
    GlobalAttributes,
    Pick<AllAttributes, "open"> {}
export interface HTMLElementDiv
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["div"]>,
    GlobalAttributes {}
export interface HTMLElementDl
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dl"]>,
    GlobalAttributes {}
export interface HTMLElementDt
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["dt"]>,
    GlobalAttributes {}
export interface HTMLElementEm
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["em"]>,
    GlobalAttributes {}
export interface HTMLElementEmbed
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["embed"]>,
    GlobalAttributes,
    Pick<AllAttributes, "src" | "type" | "width" | "height"> {}
export interface HTMLElementFieldset
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["fieldset"]>,
    GlobalAttributes,
    Pick<AllAttributes, "disabled" | "form" | "name"> {}
export interface HTMLElementFigcaption
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["figcaption"]>,
    GlobalAttributes {}
export interface HTMLElementFigure
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["figure"]>,
    GlobalAttributes {}
export interface HTMLElementFooter
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["footer"]>,
    GlobalAttributes {}
export interface HTMLElementForm
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["form"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementH1
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h1"]>,
    GlobalAttributes {}
export interface HTMLElementH2
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h2"]>,
    GlobalAttributes {}
export interface HTMLElementH3
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h3"]>,
    GlobalAttributes {}
export interface HTMLElementH4
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h4"]>,
    GlobalAttributes {}
export interface HTMLElementH5
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h5"]>,
    GlobalAttributes {}
export interface HTMLElementH6
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["h6"]>,
    GlobalAttributes {}
export interface HTMLElementHead
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["head"]>,
    GlobalAttributes,
    Pick<AllAttributes, "profile"> {}
export interface HTMLElementHeader
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["header"]>,
    GlobalAttributes {}
export interface HTMLElementHgroup
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["hgroup"]>,
    GlobalAttributes {}
export interface HTMLElementHr
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["hr"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align" | "color" | "noshade" | "size" | "width"> {}
export interface HTMLElementHtml
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["html"]>,
    GlobalAttributes,
    Pick<AllAttributes, "manifest" | "version" | "xmlns"> {}
export interface HTMLElementI
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["i"]>,
    GlobalAttributes {}
export interface HTMLElementIframe
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["iframe"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementImg
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["img"]>,
    GlobalAttributes,
    Pick<
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
      | "referrerpolicy"
      | "sizes"
      | "importance"
      | "importance"
      | "intrinsicsize"
    > {}
export interface HTMLElementInput
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["input"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "accept"
      | "alt"
      | "autocomplete"
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
      | "inputmode"
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
      | "type"
      | "value"
      | "width"
    > {}
export interface HTMLElementIns
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ins"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cite" | "datetime"> {}
export interface HTMLElementKbd
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["kbd"]>,
    GlobalAttributes {}
export interface HTMLElementLabel
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["label"]>,
    GlobalAttributes,
    Pick<AllAttributes, "form" | "for"> {}
export interface HTMLElementLegend
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["legend"]>,
    GlobalAttributes {}
export interface HTMLElementLi
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["li"]>,
    GlobalAttributes,
    Pick<AllAttributes, "value" | "type"> {}
export interface HTMLElementLink
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["link"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementMain
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["main"]>,
    GlobalAttributes {}
export interface HTMLElementMap
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["map"]>,
    GlobalAttributes,
    Pick<AllAttributes, "name"> {}
export interface HTMLElementMark
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["mark"]>,
    GlobalAttributes {}
export interface HTMLElementMenu
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["menu"]>,
    GlobalAttributes {}
export interface HTMLElementMeta
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["meta"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "name" | "http-equiv" | "content" | "charset" | "scheme"
    > {}
export interface HTMLElementMeter
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["meter"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "value" | "min" | "max" | "low" | "high" | "optimum" | "form"
    > {}
export interface HTMLElementNav
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["nav"]>,
    GlobalAttributes {}
export interface HTMLElementNoscript
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["noscript"]>,
    GlobalAttributes {}
export interface HTMLElementObject
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["object"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementOl
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ol"]>,
    GlobalAttributes,
    Pick<AllAttributes, "reversed" | "start" | "type" | "compact"> {}
export interface HTMLElementOptgroup
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["optgroup"]>,
    GlobalAttributes,
    Pick<AllAttributes, "disabled" | "label"> {}
export interface HTMLElementOption
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["option"]>,
    GlobalAttributes,
    Pick<AllAttributes, "disabled" | "label" | "selected" | "value"> {}
export interface HTMLElementOutput
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["output"]>,
    GlobalAttributes,
    Pick<AllAttributes, "for" | "form" | "name"> {}
export interface HTMLElementP
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["p"]>,
    GlobalAttributes {}
export interface HTMLElementParam
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElement>,
    GlobalAttributes,
    Pick<AllAttributes, "name" | "value" | "type" | "valuetype"> {}
export interface HTMLElementPicture
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["picture"]>,
    GlobalAttributes {}
export interface HTMLElementPre
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["pre"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cols" | "width" | "wrap"> {}
export interface HTMLElementProgress
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["progress"]>,
    GlobalAttributes,
    Pick<AllAttributes, "value" | "max"> {}
export interface HTMLElementQ
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["q"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cite"> {}
export interface HTMLElementRb
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElement>,
    GlobalAttributes {}
export interface HTMLElementRp
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["rp"]>,
    GlobalAttributes {}
export interface HTMLElementRt
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["rt"]>,
    GlobalAttributes {}
export interface HTMLElementRuby
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ruby"]>,
    GlobalAttributes {}
export interface HTMLElementS
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["s"]>,
    GlobalAttributes {}
export interface HTMLElementSamp
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["samp"]>,
    GlobalAttributes {}
export interface HTMLElementScript
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["script"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementSection
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["section"]>,
    GlobalAttributes {}
export interface HTMLElementSelect
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["select"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "autocomplete"
      | "autofocus"
      | "disabled"
      | "form"
      | "multiple"
      | "name"
      | "required"
      | "size"
    > {}
export interface HTMLElementSlot
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["slot"]>,
    GlobalAttributes,
    Pick<AllAttributes, "name"> {}
export interface HTMLElementSmall
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["small"]>,
    GlobalAttributes {}
export interface HTMLElementSource
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["source"]>,
    GlobalAttributes,
    Pick<AllAttributes, "src" | "type" | "sizes" | "srcset" | "media"> {}
export interface HTMLElementSpan
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["span"]>,
    GlobalAttributes {}
export interface HTMLElementStrong
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["strong"]>,
    GlobalAttributes {}
export interface HTMLElementStyle
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["style"]>,
    GlobalAttributes,
    Pick<AllAttributes, "media" | "nonce" | "type" | "scoped" | "title"> {}
export interface HTMLElementSub
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["sub"]>,
    GlobalAttributes {}
export interface HTMLElementSummary
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["summary"]>,
    GlobalAttributes {}
export interface HTMLElementSup
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["sup"]>,
    GlobalAttributes {}
export interface HTMLElementTable
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["table"]>,
    GlobalAttributes,
    Pick<AllAttributes, "border" | "align"> {}
export interface HTMLElementTbody
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tbody"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align"> {}
export interface HTMLElementTd
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["td"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "colspan" | "rowspan" | "headers" | "abbr" | "align" | "axis" | "bgcolor"
    > {}
export interface HTMLElementTemplate
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["template"]>,
    GlobalAttributes {}
export interface HTMLElementTextarea
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["textarea"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "autocomplete"
      | "autofocus"
      | "cols"
      | "dirname"
      | "disabled"
      | "form"
      | "inputmode"
      | "maxlength"
      | "minlength"
      | "name"
      | "placeholder"
      | "readonly"
      | "required"
      | "rows"
      | "wrap"
      | "autocapitalize"
      | "spellcheck"
    > {}
export interface HTMLElementTfoot
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tfoot"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align"> {}
export interface HTMLElementTh
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["th"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementThead
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["thead"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align"> {}
export interface HTMLElementTime
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["time"]>,
    GlobalAttributes,
    Pick<AllAttributes, "datetime"> {}
export interface HTMLElementTitle
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["title"]>,
    GlobalAttributes {}
export interface HTMLElementTr
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["tr"]>,
    GlobalAttributes,
    Pick<AllAttributes, "align"> {}
export interface HTMLElementTrack
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["track"]>,
    GlobalAttributes,
    Pick<AllAttributes, "default" | "kind" | "label" | "src" | "srclang"> {}
export interface HTMLElementU
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["u"]>,
    GlobalAttributes {}
export interface HTMLElementUl
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["ul"]>,
    GlobalAttributes,
    Pick<AllAttributes, "compact"> {}
export interface HTMLElementVar
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["var"]>,
    GlobalAttributes {}
export interface HTMLElementVideo
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["video"]>,
    GlobalAttributes,
    Pick<
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
    > {}
export interface HTMLElementWbr
  extends DataGlobalAttributes,
    GlobalEvents<HTMLElementTagNameMap["wbr"]>,
    GlobalAttributes {}
export interface HTMLElements {
  /**
   * If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/a} */
  a: HTMLElementA;
  /**
   * The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/abbr} */
  abbr: HTMLElementAbbr;
  /**
   * The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/address} */
  address: HTMLElementAddress;
  /**
   * The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/area} */
  area: HTMLElementArea;
  /**
   * The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/article} */
  article: HTMLElementArticle;
  /**
   * The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/aside} */
  aside: HTMLElementAside;
  /**
   * An audio element represents a sound or audio stream.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/audio} */
  audio: HTMLElementAudio;
  /**
   * The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/b} */
  b: HTMLElementB;
  /**
   * The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/base} */
  base: HTMLElementBase;
  /**
   * The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdi} */
  bdi: HTMLElementBdi;
  /**
   * The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdo} */
  bdo: HTMLElementBdo;
  /**
   * The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/blockquote} */
  blockquote: HTMLElementBlockquote;
  /**
   * The body element represents the content of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/body} */
  body: HTMLElementBody;
  /**
   * The br element represents a line break.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/br} */
  br: HTMLElementBr;
  /**
   * The button element represents a button labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/button} */
  button: HTMLElementButton;
  /**
   * The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/canvas} */
  canvas: HTMLElementCanvas;
  /**
   * The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/caption} */
  caption: HTMLElementCaption;
  /**
   * The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/cite} */
  cite: HTMLElementCite;
  /**
   * The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/code} */
  code: HTMLElementCode;
  /**
   * If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/col} */
  col: HTMLElementCol;
  /**
   * The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/colgroup} */
  colgroup: HTMLElementColgroup;
  /**
   * The data element links a given piece of content with a machine-readable translation. */
  data: HTMLElementData;
  /**
   * The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/datalist} */
  datalist: HTMLElementDatalist;
  /**
   * The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dd} */
  dd: HTMLElementDd;
  /**
   * The del element represents a removal from the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/del} */
  del: HTMLElementDel;
  /**
   * The details element represents a disclosure widget from which the user can obtain additional information or controls.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/details} */
  details: HTMLElementDetails;
  /**
   * The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dfn} */
  dfn: HTMLElementDfn;
  /**
   * The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dialog} */
  dialog: HTMLElementDialog;
  /**
   * The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/div} */
  div: HTMLElementDiv;
  /**
   * The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dl} */
  dl: HTMLElementDl;
  /**
   * The dt element represents the term, or name, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dt} */
  dt: HTMLElementDt;
  /**
   * The em element represents stress emphasis of its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/em} */
  em: HTMLElementEm;
  /**
   * The embed element provides an integration point for an external (typically non-HTML) application or interactive content.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/embed} */
  embed: HTMLElementEmbed;
  /**
   * The fieldset element represents a set of form controls optionally grouped under a common name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/fieldset} */
  fieldset: HTMLElementFieldset;
  /**
   * The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figcaption} */
  figcaption: HTMLElementFigcaption;
  /**
   * The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figure} */
  figure: HTMLElementFigure;
  /**
   * The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/footer} */
  footer: HTMLElementFooter;
  /**
   * The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/form} */
  form: HTMLElementForm;
  /**
   * The h1 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h1: HTMLElementH1;
  /**
   * The h2 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h2: HTMLElementH2;
  /**
   * The h3 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h3: HTMLElementH3;
  /**
   * The h4 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h4: HTMLElementH4;
  /**
   * The h5 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h5: HTMLElementH5;
  /**
   * The h6 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements} */
  h6: HTMLElementH6;
  /**
   * The head element represents a collection of metadata for the Document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/head} */
  head: HTMLElementHead;
  /**
   * The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/header} */
  header: HTMLElementHeader;
  /**
   * The hgroup element represents a heading and related content. It groups a single h1–h6 element with one or more p. */
  hgroup: HTMLElementHgroup;
  /**
   * The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/hr} */
  hr: HTMLElementHr;
  /**
   * The html element represents the root of an HTML document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/html} */
  html: HTMLElementHtml;
  /**
   * The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/i} */
  i: HTMLElementI;
  /**
   * The iframe element represents a nested browsing context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/iframe} */
  iframe: HTMLElementIframe;
  /**
   * An img element represents an image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/img} */
  img: HTMLElementImg;
  /**
   * The input element represents a typed data field, usually with a form control to allow the user to edit the data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/input} */
  input: HTMLElementInput;
  /**
   * The ins element represents an addition to the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ins} */
  ins: HTMLElementIns;
  /**
   * The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/kbd} */
  kbd: HTMLElementKbd;
  /**
   * The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/label} */
  label: HTMLElementLabel;
  /**
   * The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/legend} */
  legend: HTMLElementLegend;
  /**
   * The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/li} */
  li: HTMLElementLi;
  /**
   * The link element allows authors to link their document to other resources.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/link} */
  link: HTMLElementLink;
  /**
   * The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/main} */
  main: HTMLElementMain;
  /**
   * The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/map} */
  map: HTMLElementMap;
  /**
   * The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/mark} */
  mark: HTMLElementMark;
  /**
   * The menu element represents an unordered list of interactive items. */
  menu: HTMLElementMenu;
  /**
   * The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meta} */
  meta: HTMLElementMeta;
  /**
   * The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meter} */
  meter: HTMLElementMeter;
  /**
   * The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/nav} */
  nav: HTMLElementNav;
  /**
   * The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/noscript} */
  noscript: HTMLElementNoscript;
  /**
   * The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/object} */
  object: HTMLElementObject;
  /**
   * The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ol} */
  ol: HTMLElementOl;
  /**
   * The optgroup element represents a group of option elements with a common label.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/optgroup} */
  optgroup: HTMLElementOptgroup;
  /**
   * The option element represents an option in a select element or as part of a list of suggestions in a datalist element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/option} */
  option: HTMLElementOption;
  /**
   * The output element represents the result of a calculation performed by the application, or the result of a user action.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/output} */
  output: HTMLElementOutput;
  /**
   * The p element represents a paragraph.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/p} */
  p: HTMLElementP;
  /**
   * The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/param} */
  param: HTMLElementParam;
  /**
   * The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/picture} */
  picture: HTMLElementPicture;
  /**
   * The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/pre} */
  pre: HTMLElementPre;
  /**
   * The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/progress} */
  progress: HTMLElementProgress;
  /**
   * The q element represents some phrasing content quoted from another source.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/q} */
  q: HTMLElementQ;
  /**
   * The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rb} */
  rb: HTMLElementRb;
  /**
   * The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rp} */
  rp: HTMLElementRp;
  /**
   * The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rt} */
  rt: HTMLElementRt;
  /**
   * The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ruby} */
  ruby: HTMLElementRuby;
  /**
   * The s element represents contents that are no longer accurate or no longer relevant.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/s} */
  s: HTMLElementS;
  /**
   * The samp element represents sample or quoted output from another program or computing system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/samp} */
  samp: HTMLElementSamp;
  /**
   * The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/script} */
  script: HTMLElementScript;
  /**
   * The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/section} */
  section: HTMLElementSection;
  /**
   * The select element represents a control for selecting amongst a set of options.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/select} */
  select: HTMLElementSelect;
  /**
   * The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. */
  slot: HTMLElementSlot;
  /**
   * The small element represents side comments such as small print.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/small} */
  small: HTMLElementSmall;
  /**
   * The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/source} */
  source: HTMLElementSource;
  /**
   * The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/span} */
  span: HTMLElementSpan;
  /**
   * The strong element represents strong importance, seriousness, or urgency for its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/strong} */
  strong: HTMLElementStrong;
  /**
   * The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/style} */
  style: HTMLElementStyle;
  /**
   * The sub element represents a subscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sub} */
  sub: HTMLElementSub;
  /**
   * The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/summary} */
  summary: HTMLElementSummary;
  /**
   * The sup element represents a superscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sup} */
  sup: HTMLElementSup;
  /**
   * The table element represents data with more than one dimension, in the form of a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/table} */
  table: HTMLElementTable;
  /**
   * The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tbody} */
  tbody: HTMLElementTbody;
  /**
   * The td element represents a data cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/td} */
  td: HTMLElementTd;
  /**
   * The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/template} */
  template: HTMLElementTemplate;
  /**
   * The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/textarea} */
  textarea: HTMLElementTextarea;
  /**
   * The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tfoot} */
  tfoot: HTMLElementTfoot;
  /**
   * The th element represents a header cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/th} */
  th: HTMLElementTh;
  /**
   * The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/thead} */
  thead: HTMLElementThead;
  /**
   * The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/time} */
  time: HTMLElementTime;
  /**
   * The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/title} */
  title: HTMLElementTitle;
  /**
   * The tr element represents a row of cells in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tr} */
  tr: HTMLElementTr;
  /**
   * The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/track} */
  track: HTMLElementTrack;
  /**
   * The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/u} */
  u: HTMLElementU;
  /**
   * The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ul} */
  ul: HTMLElementUl;
  /**
   * The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/var} */
  var: HTMLElementVar;
  /**
   * A video element is used for playing videos or movies, and audio files with captions.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/video} */
  video: HTMLElementVideo;
  /**
   * The wbr element represents a line break opportunity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/wbr} */
  wbr: HTMLElementWbr;
}
