# Awesome typography [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
Curated list about typography.

## Contents
* [Specifications](#specifications)
* [OpenType](#opentype)
    - [JavaScript](#javascript)
    - [Python](#python)
    - [C](#c)
    - [C++](#c-1)
    - [C#](#c-2)
    - [Java](#java)
    - [Ruby](#ruby)
    - [Go](#go)
    - [Rust](#rust)
    - [PHP](#php)
    - [Perl](#perl)
    - [Processing](#processing)
* [UFO unifiedfontobject.org](#ufo-unifiedfontobjectorg)
* [Tools with GUI](#tools-with-gui)
    - [Free](#free)
    - [Non-Free](#non-free)
* [Font Validator](#font-validator)
* [Others](#others)
* [Fonts](#fonts)
* [TrueType](#truetype)
* [Books](#books)

## Specifications
* [Microsoft's Documentation](https://www.microsoft.com/en-us/Typography/OpenTypeSpecification.aspx)
* [Apple's Documentation](https://developer.apple.com/fonts/TrueType-Reference-Manual/)
* [The Compact Font Format
Specification](https://typekit.files.wordpress.com/2013/05/5176.cff.pdf) Technical Note #5176
* [the-cff-table](https://github.com/Pomax/the-cff-table) A markdown conversion of the Adobe Tech notes 5176 and 5177 about CFF.
* [Adobe's Documentation](http://www.adobe.com/devnet/font.html)

## OpenType
* [OpenType: let's learn how modern fonts actually work](https://pomax.github.io/#gh-weblog-1449777175633)
* [The OpenType Cookbook](http://opentypecookbook.com) An introduction to OpenType features for type designers. [(Source)](https://github.com/typesupply/opentype-feature-intro)
* [A bit of font generation](https://pomax.github.io/CFF-glyphlet-fonts/) A brief excursion into OpenType

### JavaScript
* [OpenType.js](https://github.com/nodebox/opentype.js) Read and write OpenType fonts.
* [opentype-layout](https://github.com/Jam3/opentype-layout) Experimental word-wrapping and layout for OpenType.js https://jam3.github.io/opentype-layout/
* [canvas-text-opentypejs-shim](https://github.com/shyiko/canvas-text-opentypejs-shim) Consistent text rendering for <canvas> (backed by OpenType.js)
* [CharacterMap](https://github.com/bluejamesbond/CharacterMap/) Online Character Map / Glyph / Icon / Font Viewer https://bluejamesbond.github.io/CharacterMap/
* [font](https://github.com/Benvie/font) Parse otf/ttf file format directory from buffers for metadata.
* [fontkit](https://github.com/devongovett/fontkit) An advanced font engine for Node and the browser
* [Minimal-font-generator](https://github.com/Pomax/Minimal-font-generator) Font's Hello world
* [simple-cff-builder](https://github.com/Pomax/simple-cff-builder) A simple CFF builder for testing fonts with different Type2 charstrings.
* [ttf2woff](https://github.com/fontello/ttf2woff) Font convertor, TTF to WOFF, for node.js
* [ttf2eot](https://github.com/fontello/ttf2eot) Font convertor, TTF to EOT, for node.js
* [cubic2quad](https://github.com/fontello/cubic2quad) Aproximates cubic bezier curves with quadratic ones.
* [SVG font creator](https://github.com/fontello/svg-font-create) Create SVG font from separate images.
* [node-sfnt](https://github.com/be5invis/node-sfnt) SFNT parser and generator for Nodejs.
* [node-unicode-data](https://github.com/mathiasbynens/node-unicode-data) JavaScript-compatible Unicode data generator.
* [fontwr](https://github.com/raphaklaus/fontwr) A font manager for web projects.
* [Open Type playground](https://github.com/magalhini/open-type-playground) A playground for Open Type experiments with CSS.
* [ChromaCheck](https://github.com/RoelN/ChromaCheck) Feature test for color font support in browsers
* [Font Face Observer](https://github.com/bramstein/fontfaceobserver) Font load events, simple, small and efficient [fontfaceobserver.com](https://fontfaceobserver.com)
* [Web Font Loader](https://github.com/typekit/webfontloader) Web Font Loader gives you added control when using linked fonts via @font-face.
* [localFont](https://github.com/jaicab/localFont) Implement localStorage web font caching in seconds https://jaicab.com/localFont/
* [Fontello](https://github.com/fontello/fontello) This tool lets you combine icon webfonts for your own project. http://fontello.com
* [GitHub Font Preview](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-font-preview) Adds a preview for fonts & glyphs on GitHub with OpenType.js.
* [unidata](https://github.com/chbrown/unidata) Unicode Character Database for JavaScript.
* [UCD](https://github.com/ynakajima/ucd) Unicode Character Database for JavaScript.
* [Character Set Inspector](https://github.com/graphicore/charset-inspector) Unicode Character Database for JavaScript.
* [OpenType](https://github.com/bramstein/opentype) An OpenType font parser in JavaScript.
* [opentype-geometry](https://github.com/nascherman/opentype-geometry) Convert Text from OpenType font to three.js 3D.
* [Plumin.js](https://github.com/byte-foundry/plumin.js) Create and manipulate fonts in the browser. http://www.pluminjs.com
* [Typr.js](https://github.com/photopea/Typr.js) Process fonts in JavaScript.
* [fonteditor-core](https://github.com/kekee000/fonteditor-core) Read, write, transform fonts in JavaScript.
* [fontmin](https://github.com/ecomfe/fontmin) Minify font seamlessly https://ecomfe.github.io/fontmin/
* [fontfacegen](https://github.com/agentk/fontfacegen) Browser font-face generator for creating browser usable fonts from ttf's or otf's.
* [NType](https://github.com/kevinzweerink/ntype) 4D Type Extruder http://ntype.blue
* [node-emoji](https://github.com/omnidan/node-emoji) 😏 simple emoji support for node.js projects.
* [custom-fonts-in-emails](https://github.com/crocodilejs/custom-fonts-in-emails) An extremely easy way to use custom fonts in emails without having to use art software.
* [Google Fonts Infos](https://github.com/thisarmy/fontsinfo) Extract info out of the Google Fonts archive. http://code.thisarmy.com/fontsinfo/
* [Hyphenopoly.js](https://github.com/mnater/Hyphenopoly) JavaScript polyfill for client-side hyphenation.
* [Hyphenator.js](https://github.com/mnater/Hyphenator) JavaScript that implements client-side hyphenation of HTML-Documents http://mnater.github.io/Hyphenator/
* [Hypher](https://github.com/bramstein/hypher) A fast and small JavaScript hyphenation engine.
* [Typeset.js](https://github.com/davidmerfield/Typeset) An html pre-proces­sor for web ty­pog­ra­phy (hang­ing punc­tu­a­tion, soft hy­phen in­ser­tion, op­ti­cal mar­gin out­dents, small-caps con­ver­sion and punctuation substitution).
* [Typeset](https://github.com/bramstein/typeset) TeX line breaking algorithm in JavaScript.
* [otfcc-cubic2quad](https://github.com/caryll/otfcc-cubic2quad) Losslessly turn CFF OTF to TTF using otfcc.
* [caryll / shapeops](https://github.com/caryll/shapeops) Boolean operations and overlap removal for curves.
* [OpenType-SVG Workshop](https://github.com/rocallahan/svg-opentype-workshop) OpenType-SVG Workshop Web application https://rocallahan.github.io/svg-opentype-workshop/
* [A-binary-parser-generator](https://github.com/Pomax/A-binary-parser-generator) This project aims to create a tool that can turn a spec file into a parser skeleton for binary data files such as OpenType fonts, PNG images, etc.
* [font-spider](https://github.com/aui/font-spider) Smart webfont compression and format conversion tool http://font-spider.org
* [Brotli.js](https://github.com/devongovett/brotli.js) A JavaScript port of the Brotli compression algorithm, as used in WOFF2
* [ideohint](https://github.com/caryll/ideohint) Optimized hinter for Ideographs 

### Python
* [fontTools](https://github.com/fonttools/fonttools) A library for manipulating fonts, written in Python.
* [fontmake](https://github.com/googlei18n/fontmake) Compile fonts from sources (UFO, Glyphs) to binary (OpenType, TrueType).
* [FontReport](https://github.com/googlei18n/fontreport) Tool to create PDF files containing glyph images and information about a font.
* [fontdiff](https://github.com/googlei18n/fontdiff) A tool for finding visual differences between two font versions
* [Fontuley](https://github.com/googlei18n/fontuley) Font tools (inspect / modify fonts)
* [kern-dump](https://github.com/adobe-type-tools/kern-dump) Scripts for working with and analyzing kerning information (ATypI 2013)
* [cu2qu](https://github.com/googlei18n/cu2qu) Cubic-to-quadratic bezier curve conversion
* [Font Bakery](https://github.com/googlefonts/fontbakery) Tools to prepare font families for inclusion in github.com/google/fonts https://fontbakery.appspot.com
* [glyphNameFormatter](https://github.com/LettError/glyphNameFormatter) Generate list of glyphnames from unicode names.
* [woffTools](https://github.com/typesupply/woffTools) A library for working with WOFF files.
* [pyftfeatfreeze](https://github.com/twardoch/fonttools-utils/tree/master/pyftfeatfreeze) With pyftfeatfreeze, you can “freeze” some OpenType features into a font.
* [RoboFab](https://github.com/robofab-developers/robofab) RoboFab http://robofab.org
* [unicode-properties](https://github.com/devongovett/unicode-properties) Provides fast access to unicode character properties
* [pyfontaine](https://github.com/davelab6/pyfontaine) Python tool to check font files for language/character set support
* [Glyph Nanny](https://github.com/typesupply/glyph-nanny) A live report about potential drawing issues in your glyph.
* [Kernagic](https://github.com/hodefoting/kernagic) Semi-automatic font spacing tool
* [Huerta Tipográfica Letterspacer](https://github.com/huertatipografica/HTLetterspacer) HT Letterspacer is a tool for spacing fonts https://huertatipografica.github.io/HTLetterspacer/
* [OpenType-SVG Tools](https://github.com/adobe-type-tools/opentype-svg) Tools and sample files for making OpenType-SVG fonts
* [boxDrawing.py](https://github.com/adobe-type-tools/box-drawing) Python script to draw all the box drawing characters and block elements based on parameters. http://adobe-type-tools.github.io/box-drawing/
* [scfbuild](https://github.com/eosrei/scfbuild/) Create OpenType-SVG color fonts from a set of SVG source files.
* [color-emoji](https://github.com/googlei18n/color-emoji) Tool to build color fonts using Google color-font format (CBDT/CBLC).
* [monospacifier.py](https://github.com/cpitclaudel/monospacifier) Convert variable-pitch fonts to monospace (useful for unicode and indentation-friendly programming).
* [edf825/SVG-OpenType-Utils](https://github.com/edf825/SVG-OpenType-Utils) SVG in OpenType Utils (!Old: 2013).
* [Icon Font to PNG](https://github.com/Pythonity/icon-font-to-png) Python script (and library) for exporting icons from icon fonts (e.g. Font Awesome, Octicons) as PNG images.
* [Compositor](https://github.com/typesupply/compositor) A basic OpenType GSUB and GPOS layout engine.
* [UFO Extractor](https://github.com/typesupply/extractor) Tools for extracting data from font binaries into UFO objects.
* [Noto Tools](https://github.com/googlei18n/nototools) Noto fonts support tools and scripts.
* [compreffor](https://github.com/googlei18n/compreffor) A CFF table subroutinizer for FontTools 

### C
* [otfcc](https://github.com/caryll/otfcc) Parses & writes SFNT structures.
* [AFDKO](https://github.com/adobe-type-tools/afdko) Adobe Font Development Kit for OpenType. See [AFDKO Overview](https://www.adobe.com/devnet/opentype/afdko/topic_overview.html)
* [stb_truetype](https://github.com/nothings/stb/) Parse, decode, and rasterize characters for TrueType fonts. Single header file.
* [FreeType](https://www.freetype.org/) Freely available software library to render fonts.
* [Raqm](https://github.com/HOST-Oman/libraqm) A library for complex text layout.

### C++
* [font to svg](https://github.com/donbright/font_to_svg) Render characters from font files into an SVG path
* [LCDF Typetools](https://github.com/kohler/lcdf-typetools) Utilities for manipulating OpenType, PostScript Type 1, and Multiple Master fonts.
* [HarfBuzz](https://github.com/googlei18n/harfbuzz) HarfBuzz OpenType text shaping engine
* [FontView](https://github.com/googlei18n/fontview) Demo app that displays fonts with a free/libre/open-source text rendering stack: FreeType, HarfBuzz and Raqm
* [Text rendering tests](https://github.com/unicode-org/text-rendering-tests) Test suite for text rendering
* [FTGLES](https://github.com/cdave1/ftgles) A truetype font rendering library for OpenGL ES on iOS devices (iPad and iPhone) http://cdave1.github.io/ftgles/
* [TTFPatch](https://github.com/rmuch/ttfpatch) Mirror of TTFPATCH by Wolfram Esser, modified to support fonts conforming to newer OTF specifications, built for modern versions of Windows.
* [stb-truetype-opengl-examples](https://github.com/0xc0dec/stb-truetype-opengl-examples) Examples of TrueType font rendering in C++11 using stb_truetype library and OpenGL 3+

### C#
* [NRasterizer](https://github.com/vidstige/NRasterizer) Simple and clean TrueType font renderer written purely in c#
* [Typography](https://github.com/LayoutFarm/Typography) C# Font Reader (TrueType / OpenType / OpenFont), Glyphs Layout and Rendering
* [SixLabors.Fonts](https://github.com/SixLabors/Fonts) Font loading and drawing library. http://fonts.sixlabors.com
* [SharpFont](https://github.com/MikePopoloski/SharpFont) Pure managed TTF / OTF reader and renderer.

### Java
* [sfntly](https://github.com/googlei18n/sfntly) A Library for Using, Editing, and Creating SFNT-based Fonts
* [Emoji-Tools](https://github.com/MitchTalmadge/Emoji-Tools) Multiple useful tools to help Android and iOS/OSX developers with creating and modifying Emoji Font files.

### Ruby
* [emoji-extractor](https://github.com/tmm1/emoji-extractor) Extracts high-resolution emoji pngs from Apple Color Emoji.ttf
* [font](https://github.com/alyssais/font) A command-line font manager

### Go
* [font](https://github.com/ConradIrwin/font) Parsing OpenType fonts in Golang.

### Rust
* [font-rs](https://github.com/google/font-rs) The fastest font renderer in the world.
* [RustType](https://github.com/dylanede/rusttype) A pure Rust alternative to libraries like FreeType.
* [Pathfinder](https://github.com/pcwalton/pathfinder) A fast, practical GPU rasterizer for OpenType fonts.
* [Font toolbox](https://github.com/bodoni/font)
* [Parser for OpenType fonts](https://github.com/bodoni/opentype)
* [Parser for PostScript fonts](https://github.com/bodoni/postscript)
* [Parser for TrueType fonts](https://github.com/bodoni/truetype)

### PHP
* [PHP Font Lib](https://github.com/PhenX/php-font-lib) A library to read, parse, export and make subsets of different types of font files.
* [JoliTypo](https://github.com/jolicode/JoliTypo) Microtypography fixer for the web http://jolitypo-demo.herokuapp.com/
* [PHP SmartyPants](https://github.com/michelf/php-smartypants) SmartyPants is a free web typography prettifyier tool for web writers. It easily translates plain ASCII punctuation characters into "smart" typographic punctuation HTML entities.

### Perl
* [Font::TTFMetrics](https://metacpan.org/release/Font-TTFMetrics) Fast & easy-to-use parser for true-type font (TTF) file.

### Processing
* [Fontastic](https://github.com/andreaskoller/Fontastic) A Processing library to create TrueType font files

## UFO [unifiedfontobject.org](http://unifiedfontobject.org)
* [ufo-spec](https://github.com/unified-font-object/ufo-spec) The official Unified Font Object specification source files.
* [ufoLib](https://github.com/unified-font-object/ufoLib) A low-level UFO reader and writer.
* [ufoNormalizer](https://github.com/unified-font-object/ufoNormalizer) A tool that will normalize the XML and other data inside of a UFO.
* [ufo2ft](https://github.com/googlei18n/ufo2ft) UFO to FontTools
* [ufoJS](https://github.com/graphicore/ufoJS) JavaScript API for the Unified Font Object http://lib.ufojs.org


## Tools with GUI

### Free
* [FontForge](https://github.com/fontforge/fontforge) Free (libre) font editor for Windows, Mac OS X and GNU+Linux
* [TruFont](https://github.com/trufont/trufont) A ufo3 font editor. À l’ancienne.
* [Metapolator](https://github.com/metapolator) Web-based GUI for creating UFO and Metafont fonts.
* [Birdfont](https://github.com/johanmattssonm/birdfont) A font editor which can generate fonts in TTF, EOT, SVG and BF format.
* [Glyphr Studio](https://twitter.com/glyphrstudio) A free, web-based font editor, focusing on font design hobbyists.
* [DTL OTMaster Light](http://www.fontmaster.nl/#) In the Light editions of dtl OTMaster only the saving of files is disabled. Checking fonts and exporting OpenType Layout features ﬁles, be and ik formats, and Character Layout (.cha) ﬁles is possible though.
* [fonteditor](https://github.com/ecomfe/fonteditor) A web-based TTF font editor, live at [fontstore.baidu.com](http://fontstore.baidu.com/static/editor/index-en.html).
* [FontArk](http://fontark.net/farkwp/) FontArk is an innovative browser-based font editor, font creator (BETA), featuring the most versatile real-time multiple glyph editing system.
* [TTFEdit](https://sourceforge.net/projects/ttfedit/) TrueType fonts editor. Allows for editing vector-based glyphs.

### Non-Free
* [Robofont](http://doc.robofont.com) UFO based, mac only, font editor.
* [Glyphs](https://glyphsapp.com) Font editor (Mac)
* [Prototypo](https://www.prototypo.io) Web based font generator with a parametric approach.
* [Fontself](https://www.fontself.com) Adobe Illustrator & Photoshop extensions for creating vector and bitmap fonts with Drag&Drop, born on Kickstarter.
* [FontLab Studio](https://www.fontlab.com/font-editor/fontlab-studio/) Font editor for font professionals. Version 5 for Mac and Windows.
* [DTL OTMaster](http://www.fontmaster.nl) DTL OTMaster (OTM), is a highly sophisticated application for reviewing, editing and altering tables and contours of fonts with a snft ﬁle structure, as there are CFF and TTF flavored OpenType fonts, TrueType fonts and TrueType Collection fonts.
* [010 Editor](http://www.sweetscape.com/010editor/) Professional text and hex editing with Binary Templates technology. OpenType template http://pikensoft.com/programs/OpenTypeTemplate.bt
* [Synalyze It!](https://www.synalysis.net) Reverse Engineering and Binary File Analysis made easy. OpenType template https://www.synalysis.net/Grammars/opentype.grammar


## Font Validator
* [Font Validator](https://github.com/HinTak/Font-Validator) Font Validator is a tool for testing fonts prior to release. See [Install post for Mac](http://typedrawers.com/discussion/comment/16090/#Comment_16090)
* [OpenType Sanitiser](https://github.com/khaledhosny/ots) The OpenType Sanitiser (OTS) parses and serialises OpenType files (OTF, TTF) and WOFF and WOFF2 font files, validating them and sanitising them as it goes.

## Others
* [TypeDrawers](http://typedrawers.com) A discussion forum for professionals and enthusiasts in the fields of typeface design, lettering, and typography.
* [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) Upload OTF or TTF fonts, receive webfonts
* [The State of Web Type](http://stateofwebtype.com/) "Can I Use" for typography
* [UseModify](http://usemodify.com/) Open Source typefaces
* [ofont](https://github.com/raphaelbastide/ofont) Web interface for font collections (used by usemodify.com)
* [Git for Type Designers](https://github.com/frankrolf/git-for-type-designers)
* [designwithfontforge.com](https://github.com/fontforge/designwithfontforge.com) A book about how to design new typefaces with FontForge. See [designwithfontforge.com](http://designwithfontforge.com)
* [FontTesting Page](https://github.com/impallari/Font-Testing-Page) A webpage for testing typefaces, live at [www.impallari.com/testing](http://www.impallari.com/testing/)
* [CSS Utility OpenType](https://github.com/kennethormandy/utility-opentype) Simple, CSS utility classes for advanced typographic features. See it [here](http://utility-opentype.kennethormandy.com/)
* [Alfred Special Characters](https://github.com/typefacts/alfred-special-characters) Typefacts Special Characters Workflow for Alfred 3
* [Typomanie.fr Ressources](http://typomanie.fr/ressources/)
* [Drawing good paths Tutorial](https://glyphsapp.com/tutorials/drawing-good-paths) Badly drawn outlines can cause headache. Your letters may look mangled or not appear at all. You can avoid these difficulties if you keep a few basic rules in mind.
* [Deep Into OpenType Features](http://blog.ricardofilipe.com/post/deep-into-opentype-features) What are OpenType features?
* [The A-Z of typographic terms](http://www.fontsmith.com/blog/2016/06/29/the-a-z-of-typographic-terms) Typography terms in images.
* [Emoj](https://github.com/sindresorhus/emoj) Find relevant emoji from text on the command-line 😮 ✨ 🙌 🐴 💥 🙈
* [Emoji Wrap Monthly Newsletter](http://emojiwrap.com/) A bite-sized summary of what's happening in the world of emoji and Unicode.
* [FDBP](http://silnrsi.github.io/FDBP/) Font Development Best Practice documentation
* [UnicodeChecker](http://earthlingsoft.net/UnicodeChecker/) Explore and convert Unicode
* [unicodes](https://github.com/jessetane/unicodes) Browse all of the unicodes https://unicodes.smpc.io/
* [Method of Action](http://method.ac/) Method of Action is a collection of tools, games and articles to help you learn design.
* [Encodings and character sets for Programmers](http://kunststube.net/encoding/) What every programmer absolutely, positively needs to know about encodings and character sets to work with text
* [Kernall](https://github.com/n8willis/kernall) Kerning and letterspacing research
* [Type Facet](https://github.com/charlesmchen/typefacet) A collection of Python scripts for working with fonts. See [TypeFacet Autokern](http://charlesmchen.github.io/typefacet/topics/autokern/index.html)
* [OpenType feature reference](https://github.com/opensource-opentype/features) Documentation and other info about advanced font features
* [Typography Supply](http://typography.supply/) An inventory of typographic tools.
* [OpenType Feature Bundle](https://github.com/brew/opentype-feature-bundle) Syntax highlighting and snippets for OpenType feature development in TextMate/Sublime Text
* [Type Tools dotfiles](https://github.com/benkiel/dotfiles) Setup for type tools
* [AGL & AGLFN](https://github.com/adobe-type-tools/agl-aglfn) AGL / AGLFN (Adobe Glyph List / For New Fonts) simply provides mappings from glyph names to Unicode scalar values. [See specification](https://github.com/adobe-type-tools/agl-specification)
* [The Terrible Secret of OpenType Glyph Substitution](http://ansuz.sooke.bc.ca/entry/131)
* [I Can Variable Font](https://github.com/scribbletone/i-can-variable-font) Tips for making variable fonts.
* [You, Me And The Emoji: Character Sets, Encoding And Emoji](https://www.smashingmagazine.com/2016/11/character-sets-encoding-emoji/)
* [Emoji Rolodex](http://emoji.codes/rolodex) Resourceful links to emoji-related sites, plug-ins, and apps.
* [OpenType_Table_Source](https://github.com/Monotype/OpenType_Table_Source) Documentation for Monotype's OpenType Layout Source File Format
* [jenskutilek/TypoLabs2016](https://github.com/jenskutilek/TypoLabs2016) Code examples from Jens Kutilek's TypoLabs workshop.
* [W3C - Fonts on the Web](https://www.w3.org/Fonts/) Fonts on the Web
* [W3C - WebFonts Working Group](https://www.w3.org/Fonts/WG/)
* [Axis-Praxis](http://www.axis-praxis.org/) Axis-Praxis is a web tool for playing with Variable Fonts.
* [Twitter Emoji (Twemoji)](https://github.com/twitter/twemoji) The Twemoji library offers support for +2k emojis, including skin tone and gender modifiers.
* [EmojiOne](https://github.com/Ranks/emojione) EmojiOne™ is the open emoji standard. #iwantemojione http://emojione.com/
* [No @font-face Syntax will ever be Bulletproof, Nor Should It Be](https://calendar.perfplanet.com/2016/no-font-face-bulletproof-syntax/)
* [Typography is impossible](https://medium.engineering/typography-is-impossible-5872b0c7f891) The practical guide to why laying out type never quite does what you want.

## Fonts
* [Nanofont](https://github.com/bramstein/nanofont) A nano font for testing font format support (TrueType, WOFF, WOFF2).
* [FiraSystemFontReplacement](https://github.com/jenskutilek/FiraSystemFontReplacement) Modified version of the Fira Sans fonts to replace the default system font on Mac OS X 10.10 and 10.11.
* [SansBullshitSans Font](https://github.com/RoelN/SansBullshitSans) Every buzzword will be replaced by a Comic Sans-styled censorship bar.
* [Blackout](https://github.com/RoelN/Blackout) One font to blackout them all.
* [Compyx](https://github.com/RoelN/Compyx) 8-bit Multicolor OpenType font.
* [LapisLegit](https://github.com/RoelN/LapisLegit) An OpenType-SVG testfont.
* [AIFont](https://github.com/Denly/AIFont) The fist Chinese font that generated artificial intelligent.
* [Noto Fonts](https://github.com/googlei18n/noto-fonts) Noto’s goal is to provide a beautiful reading experience for all languages.
* [Noto Emoji](https://github.com/googlei18n/noto-emoji) Color and Black-and-White Noto emoji fonts, and tools for working with them.
* [EmojiOne COLR/CPAL](https://github.com/mozilla/emojione-colr) Project to create a COLR/CPAL-based color OpenType font from the EmojiOne collection of emoji images.
* [EmojiOne OpenType-SVG](https://github.com/eosrei/emojione-color-font) Color emoji OpenType-SVG font using EmojiOne Unicode 9.0 emoji with diversity and country flags. Linux/MacOS/Windows
* [Twitter Color Emoji Font](https://github.com/eosrei/twemoji-color-font) Color emoji OpenType-SVG font using Twitter Unicode 9.0 emoji with diversity and country flags. Linux/MacOS/Windows
For more, check [awesome-fonts](https://github.com/brabadu/awesome-fonts)!
* [Bixa Color](https://bixacolor.com) Building Bixa Color, a color font for the web [pixelambacht.nl/2016/building-bixa-color/](https://pixelambacht.nl/2016/building-bixa-color/)
* [fontwr-fonts](https://github.com/raphaklaus/fontwr-fonts) Fonts repository for fontwr
* [Bungee](https://github.com/djrrb/Bungee/) A chromatic signage typeface for vertical and horizontal setting. https://djr.com/bungee/
* [Aerial Bold](http://type.aerial-bold.com/tw/) Aerial Bold is the first map and typeface of the earth.
* [wavefont](https://github.com/audio-lab/wavefont) A typeface for rendering data: waveforms, spectrums, diagrams, bars etc.
* [Adobe Variable Font Prototype](https://github.com/adobe-fonts/adobe-variable-font-prototype) Variable font example in OpenType-CFF2 & TrueType formats.
* [Microsoft open source fonts](https://github.com/Microsoft/fonts) Central location to share Microsoft's open source fonts
* [Reinebow](https://github.com/xerographer/reinebow-color-font) Reinebow, an OpenType-SVG color font TTF & WOFF https://xerographer.github.io/reinebow/
* [Freizer](https://github.com/xerographer/freizer-color-font) Freizer, an OpenType-SVG color font TTF & WOFF https://xerographer.github.io/freizer/
* [Multicoloure](https://github.com/xerographer/multicoloure-font) Multicoloure, a OpenType-SVG color font TTF & WOFF based on Multicolore Vector Typeface https://xerographer.github.io/multicoloure/
* [null-ttf](https://github.com/grzegorzrolek/null-ttf) This font is null. It's the smallest possible TrueType binary still valid on OS X and with most of its bytes wiped out.
* [Monotype Variable Font Demo](https://github.com/Monotype/Monotype_prototype_variable_fonts)
* [CFF opcode test fonts](https://github.com/Pomax/cff-opcode-fonts) OTF fonts for testing CFF opcode support.
* [TestFont](https://github.com/OpenType/TestFont) A font family for testing OpenType implementations.
* [BuffaloGals](https://github.com/TrueTyper/BuffaloGals) Buffalo Gals is one of the very first “Variable Fonts”, originally made in 1992 for an Apple TrueType GX developer CD.
* [Adobe Fonts / Source Emoji](https://github.com/adobe-fonts/source-emoji) Source Emoji is an emoji font project that began development in order to provide monochrome representative glyphs to the Unicode Consortium for emoji candidates that have been accepted by the UTC (Unicode Technical Committee) but have not yet been fully ratified to become a part of the official standard.
* [Hasklig](https://github.com/i-tu/Hasklig) Hasklig - a code font with monospaced ligatures
* [Firefox OS Emojis](https://github.com/mozilla/fxemoji)
* [Iosevka](https://github.com/be5invis/Iosevka) Slender typeface for code, from code. https://be5invis.github.io/Iosevka
* [Raleway](https://github.com/theleagueof/raleway) An elegant sans-serif, designed in a single thin weight.
* [Adobe NotDef](https://github.com/adobe-fonts/adobe-notdef) Adobe NotDef maps 1,111,998 Unicode code points to 2,048 .notdef glyphs
* [Adobe Blank](https://github.com/adobe-fonts/adobe-blank) Adobe Blank maps 1,111,998 Unicode code points to 2,048 non-spacing and non-marking glyphs
* [Adobe Blank 2](https://github.com/adobe-fonts/adobe-blank-2) Based on Adobe Blank, and differs mainly in that the number of glyphs has been reduced to only two, thanks to the Format 13 'cmap' subtable.
* [Width Test](https://github.com/adobe-fonts/width-test) For testing width-related GSUB features, specifically 'fwid' (Full Widths), 'hwid' (Half Widths), 'twid' (Third Widths), and 'qwid' (Quarter Widths).
* [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) Set of OpenType/CFF Pan-CJK fonts. 
* [Source Han Serif](https://github.com/adobe-fonts/source-han-serif) Set of OpenType/CFF Pan-CJK fonts.


## TrueType
* [Truetype font software](http://luc.devroye.org/ttsoftware-index.html) List (Big!) with descriptions [here](http://luc.devroye.org/ttsoftware.html)


## Books
* [Fonts & Encodings](http://shop.oreilly.com/product/9780596102425.do) From Advanced Typography to Unicode and Everything in Between [Google Books Preview](https://books.google.fr/books?id=qrElYgVLDwYC&printsec=frontcover#v=onepage&q&f=false)
* [Unicode Explained](http://shop.oreilly.com/product/9780596101213.do) There are hundreds of different encoding systems for mapping characters to numbers, but Unicode promises a single mapping. [Google Books Preview](https://books.google.fr/books?id=lxndiWaFMvMC&printsec=frontcover#v=onepage&q&f=false)


## Contribute?
➡️Pull request! (Or open an issue [here](https://github.com/Jolg42/awesome-typography/issues))


## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
