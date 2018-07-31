# Awesome Typography [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
Curated list about digital typography.

## Contents

- [Specifications](#specifications)
- [OpenType](#opentype)
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
- [Clojure](#clojure)
- [UFO](#ufo)
- [Tools with GUI](#tools-with-gui)
- [Font Validator](#font-validator)  
- [Miscellaneous](#miscellaneous)
- [Fonts](#fonts)
- [TrueType](#truetype)
- [Books](#books)
- [Videos](#videos)


## Specifications
- [Microsoft's Documentation](https://docs.microsoft.com/en-us/typography/opentype/spec/)
- [Apple's Documentation](https://developer.apple.com/fonts/TrueType-Reference-Manual/)
- [The Compact Font Format
Specification](https://typekit.files.wordpress.com/2013/05/5176.cff.pdf) - Technical Note #5176.
- [the-cff-table](https://github.com/Pomax/the-cff-table) - Markdown conversion of the Adobe Tech notes 5176 and 5177 about CFF.
- [Adobe's Documentation](https://www.adobe.com/devnet/font.html)

## OpenType
- [OpenType: let's learn how modern fonts actually work](https://pomax.github.io/#gh-weblog-1449777175633)
- [The OpenType Cookbook](http://opentypecookbook.com) - Introduction to OpenType features for type designers. [(Source)](https://github.com/typesupply/opentype-feature-intro).
- [A bit of font generation](https://pomax.github.io/CFF-glyphlet-fonts/) - Brief excursion into OpenType.

## JavaScript
- [OpenType.js](https://github.com/nodebox/opentype.js) - Read and write OpenType fonts.
- [opentype-layout](https://github.com/Jam3/opentype-layout) - Experimental word-wrapping and layout for OpenType.js.
- [canvas-text-opentypejs-shim](https://github.com/shyiko/canvas-text-opentypejs-shim) - Consistent text rendering for <canvas> (backed by OpenType.js).
- [CharacterMap](https://github.com/bluejamesbond/CharacterMap/) - Online Character Map / Glyph / Icon / Font Viewer.
- [font](https://www.npmjs.com/package/font) - Parse OTF/TTF file format directory from buffers for metadata.
- [fontkit](https://github.com/foliojs/fontkit) - Advanced font engine for Node and the browser.
- [Minimal-font-generator](https://github.com/Pomax/Minimal-font-generator) - Font's Hello world.
- [simple-cff-builder](https://github.com/Pomax/simple-cff-builder) - Simple CFF builder for testing fonts with different Type2 charstrings.
- [ttf2woff2](https://github.com/nfroidure/ttf2woff2/) - Convert TTF files to WOFF2.
- [ttf2woff](https://github.com/fontello/ttf2woff) - Convert TTF to WOFF, for Node.js.
- [sfnt2woff](https://github.com/laoshu133/sfnt2woff) - Convert TTF or OTF to WOFF, support Node.js and Browsers.
- [ttf2eot](https://github.com/fontello/ttf2eot) - Convert TTF to EOT for Node.js.
- [cubic2quad](https://github.com/fontello/cubic2quad) - Aproximates cubic bezier curves with quadratic ones.
- [SVG font creator](https://github.com/fontello/svg-font-create) - Create SVG font from separate images.
- [node-sfnt](https://github.com/be5invis/node-sfnt) - SFNT parser and generator for Node.js.
- [node-unicode-data](https://github.com/mathiasbynens/node-unicode-data) - JavaScript-compatible Unicode data generator.
- [fontwr](https://github.com/raphaklaus/fontwr) - Font manager for web projects.
- [Open Type playground](https://github.com/magalhini/open-type-playground) - Playground for Open Type experiments with CSS.
- [ChromaCheck](https://github.com/RoelN/ChromaCheck) - Feature test for color font support in browsers.
- [Font Face Observer](https://github.com/bramstein/fontfaceobserver) - Font load events, simple, small and efficient [fontfaceobserver.com](https://fontfaceobserver.com).
- [Web Font Loader](https://github.com/typekit/webfontloader) - Web Font Loader gives you added control when using linked fonts via @font-face.
- [localFont](https://github.com/jaicab/localFont) - Implement localStorage web font caching in seconds.
- [Fontello](https://github.com/fontello/fontello) - This tool lets you combine icon webfonts for your own project.
- [GitHub Font Preview](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-font-preview) - Adds a preview for fonts & glyphs on GitHub with OpenType.js.
- [unidata](https://github.com/chbrown/unidata) - Unicode Character Database for JavaScript.
- [UCD](https://github.com/ynakajima/ucd) - Unicode Character Database for JavaScript.
- [Character Set Inspector](https://github.com/graphicore/charset-inspector) - Unicode Character Database for JavaScript.
- [OpenType](https://github.com/bramstein/opentype) - OpenType font parser in JavaScript.
- [opentype-geometry](https://github.com/nascherman/opentype-geometry) - Convert Text from OpenType font to three.js 3D.
- [Plumin.js](https://github.com/byte-foundry/plumin.js) - Create and manipulate fonts in the browser.
- [Typr.js](https://github.com/photopea/Typr.js) - Process fonts in JavaScript.
- [fonteditor-core](https://github.com/kekee000/fonteditor-core) - Read, write, transform fonts in JavaScript.
- [fontmin](https://github.com/ecomfe/fontmin) - Minify font seamlessly.
- [fontfacegen](https://github.com/agentk/fontfacegen) - Browser font-face generator for creating browser usable fonts from TTF's or OTF's.
- [NType](https://github.com/kevinzweerink/ntype) - 4D Type Extruder.
- [node-emoji](https://github.com/omnidan/node-emoji) - 😏 simple emoji support for Node.js projects.
- [custom-fonts-in-emails](https://github.com/ladjs/custom-fonts-in-emails) - Extremely easy way to use custom fonts in emails without having to use art software.
- [Google Fonts Infos](https://github.com/thisarmy/fontsinfo) - Extract info out of the Google Fonts archive.
- [Hyphenopoly.js](https://github.com/mnater/Hyphenopoly) - JavaScript polyfill for client-side hyphenation.
- [Hyphenator.js](https://github.com/mnater/Hyphenator) - JavaScript that implements client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) - Fast and small JavaScript hyphenation engine.
- [Typeset.js](https://github.com/davidmerfield/Typeset) - HTML pre-processor for web typography (hanging punctuation, soft hyphen insertion, optical margin outdents, small-caps conversion and punctuation substitution).
- [Typeset](https://github.com/bramstein/typeset) - TeX line breaking algorithm in JavaScript.
- [otfcc-cubic2quad](https://github.com/caryll/otfcc-cubic2quad) - Losslessly turn CFF OTF to TTF using otfcc.
- [caryll / shapeops](https://github.com/caryll/shapeops) - Boolean operations and overlap removal for curves.
- [OpenType-SVG Workshop](https://github.com/rocallahan/svg-opentype-workshop) - OpenType-SVG Workshop Web application.
- [A-binary-parser-generator](https://github.com/Pomax/A-binary-parser-generator) - This project aims to create a tool that can turn a spec file into a parser skeleton for binary data files such as OpenType fonts, PNG images, etc.
- [font-spider](https://github.com/aui/font-spider) - Smart webfont compression and format conversion tool.
- [Brotli.js](https://github.com/foliojs/brotli.js) A JavaScript port of the Brotli compression algorithm, as used in WOFF2.
- [ideohint](https://github.com/caryll/ideohint) - Optimized hinter for Ideographs.
- [subfont](https://github.com/Munter/subfont) - Command line tool to inject Google font subsets used glyphs into your page.
- [webfont](https://github.com/itgalaxy/webfont) - Awesome generator of webfont, WOFF2, WOFF, EOT, TTF and SVG.
- [grapheme-splitter](https://github.com/orling/grapheme-splitter) - JavaScipt library that breaks strings into their individual user-perceived characters.
- [unicode-tr51-emoji](https://github.com/cameronhunter/unicode-tr51-emoji) - Emoji data extracted from Unicode Technical Report #51 v1.0 – v5.0.
- [fontblast](https://github.com/eugene1g/font-blast) - Give me an icon-font, and I'll create individual SVG/PNG files for all icons in it.
- [fontplop](https://github.com/matthewgonzalez/fontplop) - Fast, Simple, & Free Open Source Webfont Converter.
- [svgfont2svgicons](https://github.com/nfroidure/svgfont2svgicons) - Extract SVG icons from an SVG font.
- [glyphhanger](https://github.com/filamentgroup/glyphhanger) - Your web font utility belt. It shows what unicode-ranges are used on a web site (optionally for a font-family or for each font-family). It can also subset web fonts.
- [Punycode.js](https://github.com/bestiejs/punycode.js) - Robust Punycode converter that fully complies to RFC 3492 and RFC 5891.
- [code-point-at](https://github.com/sindresorhus/code-point-at) - ES2015 String#codePointAt() ponyfill.
- [Typefont](https://github.com/vasile-peste/Typefont) - First open-source library that detects the font of a text in a image.
- [node-fonttools](https://github.com/dfrankland/node-fonttools) - Native bindings to fonttools to decompile and compile fonts.
- [font-toolkit](https://github.com/hsiaosiyuan0/fonts) - Font file manipulating in TypeScript.
- [variableFont.js](https://github.com/Monotype/variableFont.js) - Handles variable fonts through OpenType.js

## Python
- [fontTools](https://github.com/fonttools/fonttools) - Library for manipulating fonts, written in Python.
- [fontmake](https://github.com/googlei18n/fontmake) - Compile fonts from sources (UFO, Glyphs) to binary (OpenType, TrueType).
- [FontReport](https://github.com/googlei18n/fontreport) - Tool to create PDF files containing glyph images and information about a font.
- [fontdiff](https://github.com/googlei18n/fontdiff) - Tool for finding visual differences between two font versions.
- [Fontuley](https://github.com/googlei18n/fontuley) - Font tools (inspect / modify fonts).
- [kern-dump](https://github.com/adobe-type-tools/kern-dump) - Scripts for working with and analyzing kerning information (ATypI 2013).
- [cu2qu](https://github.com/googlei18n/cu2qu) - Cubic-to-quadratic bezier curve conversion.
- [Font Bakery](https://github.com/googlefonts/fontbakery) - Tools to prepare font families for inclusion in github.com/google/fonts.
- [glyphNameFormatter](https://github.com/LettError/glyphNameFormatter) - Generate list of glyphnames from unicode names.
- [woffTools](https://github.com/typesupply/woffTools) - Library for working with WOFF files.
- [pyftfeatfreeze](https://github.com/twardoch/fonttools-utils/tree/master/pyftfeatfreeze) - With pyftfeatfreeze, you can “freeze” some OpenType features into a font.
- [RoboFab](https://github.com/robofab-developers/robofab) - Library with objects that deal with data usually associated with fonts and type design.
- [unicode-properties](https://github.com/foliojs/unicode-properties) - Provides fast access to unicode character properties.
- [pyfontaine](https://github.com/davelab6/pyfontaine) - Python tool to check font files for language/character set support.
- [Glyph Nanny](https://github.com/typesupply/glyph-nanny) - Live report about potential drawing issues in your glyph.
- [Kernagic](https://github.com/hodefoting/kernagic) - Semi-automatic font spacing tool.
- [Huerta Tipográfica Letterspacer](https://github.com/huertatipografica/HTLetterspacer) - HT Letterspacer is a tool for spacing fonts.
- [OpenType-SVG Tools](https://github.com/adobe-type-tools/opentype-svg) - Tools and sample files for making OpenType-SVG fonts.
- [boxDrawing.py](https://github.com/adobe-type-tools/box-drawing) - Python script to draw all the box drawing characters and block elements based on parameters.
- [scfbuild](https://github.com/eosrei/scfbuild/) - Create OpenType-SVG color fonts from a set of SVG source files.
- [color-emoji](https://github.com/googlei18n/color-emoji) - Tool to build color fonts using Google color-font format (CBDT/CBLC).
- [monospacifier.py](https://github.com/cpitclaudel/monospacifier) - Convert variable-pitch fonts to monospace (useful for unicode and indentation-friendly programming).
- [edf825/SVG-OpenType-Utils](https://github.com/edf825/SVG-OpenType-Utils) - SVG in OpenType Utils (!Old: 2013).
- [Icon Font to PNG](https://github.com/Pythonity/icon-font-to-png) - Python script (and library) for exporting icons from icon fonts (e.g. Font Awesome, Octicons) as PNG images.
- [Compositor](https://github.com/typesupply/compositor) - Basic OpenType GSUB and GPOS layout engine.
- [UFO Extractor](https://github.com/typesupply/extractor) - Tools for extracting data from font binaries into UFO objects.
- [Noto Tools](https://github.com/googlei18n/nototools) - Noto fonts support tools and scripts.
- [compreffor](https://github.com/googlei18n/compreffor) - CFF table subroutinizer for FontTools.
- [font-line](https://github.com/source-foundry/font-line) - OpenType vertical metrics reporting and font line spacing adjustment tool.
- [Flat](https://xxyxyz.org/flat/) - Library for creating and manipulating digital forms of fine arts.
- [PageBot](https://github.com/typenetwork/pagebot) - Scripted page layout program, as application inside Drawbot generating high quality typographic documents that support high quality fonts.

## C
- [otfcc](https://github.com/caryll/otfcc) - Parses & writes SFNT structures.
- [AFDKO](https://github.com/adobe-type-tools/afdko) - Adobe Font Development Kit for OpenType. See [AFDKO Overview](https://www.adobe.com/devnet/opentype/afdko/topic_overview.html).
- [stb_truetype](https://github.com/nothings/stb/) - Parse, decode, and rasterize characters for TrueType fonts. Single header file.
- [FreeType](https://www.freetype.org) - Freely available software library to render fonts.
- [Raqm](https://github.com/HOST-Oman/libraqm) - Library for complex text layout.
- [SheenFigure](https://github.com/mta452/SheenFigure) - Implementation of advanced typographic tables of OpenType specification.
- [SheenBidi](https://github.com/mta452/SheenBidi) - SheenBidi is the world's most sophisticated implementation of latest unicode bidirectional algorithm.
- [freetype-gl](https://github.com/rougier/freetype-gl) - OpenGL text using one vertex buffer, one texture and FreeType.
- [WOFF](https://github.com/samboy/WOFF) - WOFF conversion reference code.

## C++
- [font to svg](https://github.com/donbright/font_to_svg) - Render characters from font files into an SVG path.
- [LCDF Typetools](https://github.com/kohler/lcdf-typetools) - Utilities for manipulating OpenType, PostScript Type 1, and Multiple Master fonts.
- [HarfBuzz](https://github.com/googlei18n/harfbuzz) - HarfBuzz OpenType text shaping engine.
- [FontView](https://github.com/googlei18n/fontview) - Demo app that displays fonts with a free/libre/open-source text rendering stack: FreeType, HarfBuzz and Raqm.
- [Text rendering tests](https://github.com/unicode-org/text-rendering-tests) - Test suite for text rendering.
- [FTGLES](https://github.com/cdave1/ftgles) - TrueType font rendering library for OpenGL ES on iOS devices (iPad and iPhone).
- [TTFPatch](https://github.com/rmuch/ttfpatch) - Mirror of TTFPATCH by Wolfram Esser, modified to support fonts conforming to newer OTF specifications, built for modern versions of Windows.
- [stb-truetype-opengl-examples](https://github.com/0xc0dec/demos) - Examples of TrueType font rendering in C++11 using stb_truetype library and OpenGL 3+.
- [WOFF2](https://github.com/google/woff2)

## C#
- [NRasterizer](https://github.com/vidstige/NRasterizer) - Simple and clean TrueType font renderer written purely in c#.
- [Typography](https://github.com/LayoutFarm/Typography) - C# Font Reader (TrueType / OpenType / OpenFont), Glyphs Layout and Rendering.
- [SixLabors.Fonts](https://github.com/SixLabors/Fonts) - Font loading and drawing library.
- [SharpFont](https://github.com/MikePopoloski/SharpFont) - Pure managed TTF / OTF reader and renderer.

## Java
- [sfntly](https://github.com/googlei18n/sfntly) - Library for Using, Editing, and Creating SFNT-based Fonts.
- [Emoji-Tools](https://github.com/EmojiTools/Emoji-Tools) - Multiple useful tools to help Android and iOS/OSX developers with creating and modifying Emoji Font files.
- [Tehreer-Android](https://github.com/mta452/Tehreer-Android) - Library that gives full control over text related technologies such as bidirectional algorithm, open type shaping engine, text typesetting and text rendering.

## Ruby
- [emoji-extractor](https://github.com/tmm1/emoji-extractor) - Extracts high-resolution emoji pngs from Apple Color Emoji.ttf.
- [font](https://github.com/alyssais/font) - Command-line font manager.

## Go
- [font](https://github.com/ConradIrwin/font) - Parsing OpenType fonts in Golang.
- [freetype](https://github.com/golang/freetype) - Freetype font rasterizer in Go.

## Rust
- [font-rs](https://github.com/google/font-rs) - The fastest font renderer in the world.
- [RustType](https://github.com/redox-os/rusttype) - Pure Rust alternative to libraries like FreeType. 
- [Pathfinder](https://github.com/pcwalton/pathfinder) - Fast, practical GPU rasterizer for OpenType fonts.
- [Font toolbox](https://github.com/bodoni/font)
- [Parser for OpenType fonts](https://github.com/bodoni/opentype)
- [Parser for PostScript fonts](https://github.com/bodoni/postscript)
- [Parser for TrueType fonts](https://github.com/bodoni/truetype)
- [freetype-rs](https://github.com/PistonDevelopers/freetype-rs) - Rust bindings for FreeType library.
- [freetype-sys](https://github.com/PistonDevelopers/freetype-sys) - Low level bindings for the FreeType font library.
- [truetype](https://github.com/PistonDevelopers/truetype) - Library for reading fonts from the TrueType format.

## PHP
- [PHP Font Lib](https://github.com/PhenX/php-font-lib) - Library to read, parse, export and make subsets of different types of font files.
- [JoliTypo](https://github.com/jolicode/JoliTypo) - Microtypography fixer for the web.
- [PHP SmartyPants](https://github.com/michelf/php-smartypants) - SmartyPants is a free web typography prettifyier tool for web writers. It easily translates plain ASCII punctuation characters into "smart" typographic punctuation HTML entities.

## Perl
- [Font::TTFMetrics](https://metacpan.org/release/Font-TTFMetrics) - Fast & easy-to-use parser for true-type font (TTF) file.

## Processing
- [Fontastic](https://github.com/andreaskoller/Fontastic) - Processing library to create TrueType font files.

## Clojure
- [opentype.clj](https://github.com/ivarref/opentype.clj) - A simple API over OpenType.js for Clojure. Runs on the JVM.

## UFO 
[unifiedfontobject.org](http://unifiedfontobject.org)
- [ufo-spec](https://github.com/unified-font-object/ufo-spec) - The official Unified Font Object specification source files.
- [ufoLib](https://github.com/unified-font-object/ufoLib) - Low-level UFO reader and writer.
- [ufoNormalizer](https://github.com/unified-font-object/ufoNormalizer) - Tool that will normalize the XML and other data inside of a UFO.
- [ufo2ft](https://github.com/googlei18n/ufo2ft) - UFO to FontTools.
- [ufoJS](https://github.com/graphicore/ufoJS) - JavaScript API for the Unified Font Object.


## Tools with GUI

### Non-Free
- [Fontself](https://www.fontself.com) Adobe Illustrator & Photoshop extensions for creating vector and bitmap fonts by Drag&Drop. Make fonts the easy way!
- [Robofont](http://doc.robofont.com) - UFO based (Mac only).
- [Glyphs](https://glyphsapp.com) - Font editor (Mac only).
- [Prototypo](https://www.prototypo.io) - Web based font generator with a parametric approach.
- [FontLab Studio](https://www.fontlab.com/font-editor/fontlab-studio/) - Font editor for font professionals. Version 5 for Mac and Windows.
- [DTL OTMaster](https://www.fontmaster.nl) - Highly sophisticated application for reviewing, editing and altering tables and contours of fonts with a snft ﬁle structure, as there are CFF and TTF flavored OpenType fonts, TrueType fonts and TrueType Collection fonts.
- [010 Editor](http://www.sweetscape.com/010editor/) - Professional text and hex editing with Binary Templates technology. [OpenType template](http://pikensoft.com/programs/OpenTypeTemplate.bt).
- [Synalyze It!](https://www.synalysis.net) - Reverse Engineering and Binary File Analysis made easy. [OpenType template](https://www.synalysis.net/Grammars/opentype.grammar).
- [TransType 4](https://www.fontlab.com/font-converter/transtype/) - Universal font converter.

### Free
- [FontForge](https://github.com/fontforge/fontforge) - Free (libre) font editor for Windows, Mac OS X and GNU+Linux.
- [TruFont](https://github.com/trufont/trufont) - UFO3 font editor. À l’ancienne.
- [Metapolator](https://github.com/metapolator) - Web-based GUI for creating UFO and Metafont fonts.
- [Birdfont](https://github.com/johanmattssonm/birdfont) - Font editor which can generate fonts in TTF, EOT, SVG and BF format.
- [Glyphr Studio](https://twitter.com/glyphrstudio) - Free, web-based font editor, focusing on font design hobbyists.
- [DTL OTMaster Light](https://www.fontmaster.nl/#light) - In the Light editions of dtl OTMaster only the saving of files is disabled. Checking fonts and exporting OpenType Layout features ﬁles, be and ik formats, and Character Layout (.cha) ﬁles is possible though.
- [fonteditor](https://github.com/ecomfe/fonteditor) - Web-based TTF font editor, live at [fontstore.baidu.com](http://fontstore.baidu.com/static/editor/index-en.html).
- [FontArk](https://fontark.net/farkwp/) FontArk is an innovative browser-based font editor, font creator (BETA), featuring the most versatile real-time multiple glyph editing system.
- [TTFEdit](https://sourceforge.net/projects/ttfedit/) - TrueType fonts editor. Allows for editing vector-based glyphs.
- [OpenType-SVG-Font-Editor](https://github.com/Microsoft/OpenType-SVG-Font-Editor).

## Font Validator 
- [Font Validator](https://github.com/HinTak/Font-Validator) - Font Validator is a tool for testing fonts prior to release. See [Install post for Mac](http://typedrawers.com/discussion/comment/16090/#Comment_16090).
- [OpenType Sanitiser](https://github.com/khaledhosny/ots) - The OpenType Sanitiser (OTS) parses and serialises OpenType files (OTF, TTF) and WOFF and WOFF2 font files, validating them and sanitising them as it goes.
- [WOFF Validator](http://validator.fontbureau.com) - Online WOFF Validator.

## Miscellaneous
- [TypeDrawers](http://typedrawers.com) - Discussion forum for professionals and enthusiasts in the fields of typeface design, lettering, and typography.
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) - Upload OTF or TTF fonts, receive webfonts.
- [The State of Web Type](https://github.com/bramstein/stateofwebtype) - "Can I Use" for typography.
- [UseModify](https://usemodify.com) - Open Source typefaces.
- [ofont](https://github.com/raphaelbastide/ofont) - Web interface for font collections (used by usemodify.com)
- [Git for Type Designers](https://github.com/frankrolf/git-for-type-designers)
- [designwithfontforge.com](https://github.com/fontforge/designwithfontforge.com) - Book about how to design new typefaces with FontForge. See [designwithfontforge.com](http://designwithfontforge.com).
- [FontTesting Page](https://github.com/impallari/Font-Testing-Page) - Webpage for testing typefaces.
- [CSS Utility OpenType](https://github.com/kennethormandy/utility-opentype) - Simple, CSS utility classes for advanced typographic features. See it [here](http://utility-opentype.kennethormandy.com).
- [Alfred Special Characters](https://github.com/typefacts/alfred-special-characters) - Typefacts Special Characters Workflow for Alfred 3.
- [Typomanie.fr Ressources](http://typomanie.fr/ressources/)
- [Drawing good paths Tutorial](https://glyphsapp.com/tutorials/drawing-good-paths) - Badly drawn outlines can cause headache. Your letters may look mangled or not appear at all. You can avoid these difficulties if you keep a few basic rules in mind.
- [Deep Into OpenType Features](http://blog.ricardofilipe.com/post/deep-into-opentype-features) - What are OpenType features?
- [The A-Z of typographic terms](https://www.fontsmith.com/blog/2016/06/29/the-a-z-of-typographic-terms) - Typography terms in images.
- [Emoj](https://github.com/sindresorhus/emoj) - Find relevant emoji from text on the command-line 😮 ✨ 🙌 🐴 💥 🙈.
- [Emoji Wrap Monthly Newsletter](http://emojiwrap.com) - Bite-sized summary of what's happening in the world of emoji and Unicode.
- [FDBP](http://silnrsi.github.io/FDBP/) - Font Development Best Practice documentation.
- [UnicodeChecker](http://earthlingsoft.net/UnicodeChecker/) - Explore and convert Unicode.
- [unicodes](https://github.com/jessetane/unicodes) - Browse all of the unicodes.
- [Method of Action](http://method.ac) - Method of Action is a collection of tools, games and articles to help you learn design.
- [Encodings and character sets for Programmers](http://kunststube.net/encoding/) - What every programmer absolutely, positively needs to know about encodings and character sets to work with text.
- [Kernall](https://github.com/n8willis/kernall) - Kerning and letterspacing research.
- [Type Facet](https://github.com/charlesmchen/typefacet) - Collection of Python scripts for working with fonts. See [TypeFacet Autokern](http://charlesmchen.github.io/typefacet/topics/autokern/index.html)
- [OpenType feature reference](https://github.com/opensource-opentype/features) - Documentation and other info about advanced font features
- [Typography Supply](http://typography.supply) An inventory of typographic tools.
- [OpenType Feature Bundle](https://github.com/brew/opentype-feature-bundle) - Syntax highlighting and snippets for OpenType feature development in TextMate/Sublime Text.
- [Type Tools dotfiles](https://github.com/benkiel/dotfiles) - Setup for type tools.
- [AGL & AGLFN](https://github.com/adobe-type-tools/agl-aglfn) - AGL / AGLFN (Adobe Glyph List / For New Fonts) simply provides mappings from glyph names to Unicode scalar values. [See specification](https://github.com/adobe-type-tools/agl-specification).
- [The Terrible Secret of OpenType Glyph Substitution](http://ansuz.sooke.bc.ca/entry/131)
- [I Can Variable Font](https://github.com/scribbletone/i-can-variable-font) - Tips for making variable fonts.
- [You, Me And The Emoji: Character Sets, Encoding And Emoji](https://www.smashingmagazine.com/2016/11/character-sets-encoding-emoji/)
- [Emoji Rolodex](https://www.emojicopy.com/#emojicodes) - Resourceful links to emoji-related sites, plug-ins, and apps.
- [OpenType_Table_Source](https://github.com/Monotype/OpenType_Table_Source) - Documentation for Monotype's OpenType Layout Source File Format.
- [jenskutilek/TypoLabs2016](https://github.com/jenskutilek/TypoLabs2016) - Code examples from Jens Kutilek's TypoLabs workshop.
- [W3C - Fonts on the Web](https://www.w3.org/Fonts/) - Fonts on the Web.
- [W3C - WebFonts Working Group](https://www.w3.org/Fonts/WG/)
- [Axis-Praxis](https://www.axis-praxis.org) - Axis-Praxis is a web tool for playing with Variable Fonts.
- [Twitter Emoji (Twemoji)](https://github.com/twitter/twemoji) - The Twemoji library offers support for +2k emojis, including skin tone and gender modifiers.
- [EmojiOne](https://github.com/emojione/emojione) - EmojiOne™ is the open emoji standard.
- [No @font-face Syntax will ever be Bulletproof, Nor Should It Be](https://calendar.perfplanet.com/2016/no-font-face-bulletproof-syntax/)
- [Typography is impossible](https://medium.engineering/typography-is-impossible-5872b0c7f891) - The practical guide to why laying out type never quite does what you want.
- [JavaScript has a Unicode problem](https://mathiasbynens.be/notes/javascript-unicode) - The way JavaScript handles Unicode is… surprising, to say the least.
- [homebrew-webfonttools](https://github.com/bramstein/homebrew-webfonttools) - Homebrew formulae for font tools.
- [Font Falsehoods](https://github.com/RoelN/Font-Falsehoods) - Falsehoods programmers believe about fonts.
- [Letterpress Digest](http://letterpressdigest.com) - The new podcast about letterpress.
- [fontspeed](https://www.fontspeed.io) - Newsletter on font loading by @zachleat.
- [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG) - Font Awesome split to individual SVG and PNG files of different sizes along with Node.js based generator.

## Fonts
- [The Gilbert Font](https://github.com/Fontself/TypeWithPride) - OpenType-SVG font named after Gilbert Baker, the creator of the rainbow flag.
- [Nanofont](https://github.com/bramstein/nanofont) - Nano font for testing font format support (TrueType, WOFF, WOFF2).
- [FiraSystemFontReplacement](https://github.com/jenskutilek/FiraSystemFontReplacement) - Modified version of the Fira Sans fonts to replace the default system font on Mac OS X 10.10 and 10.11.
- [SansBullshitSans Font](https://github.com/RoelN/SansBullshitSans) - Every buzzword will be replaced by a Comic Sans-styled censorship bar.
- [Blackout](https://github.com/RoelN/Blackout) - One font to blackout them all.
- [Compyx](https://github.com/RoelN/Compyx) - 8-bit Multicolor OpenType font.
- [LapisLegit](https://github.com/RoelN/LapisLegit) - OpenType-SVG testfont.
- [AIFont](https://github.com/Denly/AIFont) - The fist Chinese font that generated artificial intelligent.
- [Noto Fonts](https://github.com/googlei18n/noto-fonts) - Noto’s goal is to provide a beautiful reading experience for all languages.
- [Noto Emoji](https://github.com/googlei18n/noto-emoji) - Color and Black-and-White Noto emoji fonts, and tools for working with them.
- [EmojiOne COLR/CPAL](https://github.com/mozilla/twemoji-colr) - EmojiOne font in COLR/CPAL layered format.
- [EmojiOne OpenType-SVG](https://github.com/eosrei/emojione-color-font) - Color emoji OpenType-SVG font using EmojiOne Unicode 9.0 emoji with diversity and country flags.
- [Twitter Color Emoji Font](https://github.com/eosrei/twemoji-color-font) - Color emoji OpenType-SVG font using Twitter Unicode 9.0 emoji with diversity and country flags.
- [Bixa Color](https://bixacolor.com) - Building Bixa Color, a color font for the web [pixelambacht.nl/2016/building-bixa-color/](https://pixelambacht.nl/2016/building-bixa-color/).
- [fontwr-fonts](https://github.com/raphaklaus/fontwr-fonts) - Fonts repository for fontwr.
- [Bungee](https://github.com/djrrb/Bungee/) - Chromatic signage typeface for vertical and horizontal setting.
- [Aerial Bold](http://type.aerial-bold.com/tw/) Aerial Bold is the first map and typeface of the earth.
- [wavefont](https://github.com/audio-lab/wavefont) Typeface for rendering data: waveforms, spectrums, diagrams, bars etc.
- [Adobe Variable Font Prototype](https://github.com/adobe-fonts/adobe-variable-font-prototype) - Variable font example in OpenType-CFF2 & TrueType formats.
- [Microsoft open source fonts](https://github.com/Microsoft/fonts) - Central location to share Microsoft's open source fonts.
- [Reinebow](https://github.com/xerographer/reinebow-color-font) - OpenType-SVG color font.
- [Freizer](https://github.com/xerographer/freizer-color-font) - OpenType-SVG color font.
- [Multicoloure](https://github.com/xerographer/multicoloure-font) - OpenType-SVG color font based on Multicolore Vector Typeface.
- [null-ttf](https://github.com/grzegorzrolek/null-ttf) - This font is null. It's the smallest possible TrueType binary still valid on OS X and with most of its bytes wiped out.
- [Monotype Variable Font Demo](https://github.com/Monotype/Monotype_prototype_variable_fonts)
- [CFF opcode test fonts](https://github.com/Pomax/cff-opcode-fonts) - OTF fonts for testing CFF opcode support.
- [TestFont](https://github.com/OpenType/TestFont) - Font family for testing OpenType implementations.
- [BuffaloGals](https://github.com/TrueTyper/BuffaloGals) - Buffalo Gals is one of the very first “Variable Fonts”, originally made in 1992 for an Apple TrueType GX developer CD.
- [Adobe Fonts / Source Emoji](https://github.com/adobe-fonts/source-emoji) - Source Emoji is an emoji font project that began development in order to provide monochrome representative glyphs to the Unicode Consortium for emoji candidates that have been accepted by the UTC (Unicode Technical Committee) but have not yet been fully ratified to become a part of the official standard.
- [Hasklig](https://github.com/i-tu/Hasklig) - Code font with monospaced ligatures.
- [Firefox OS Emojis](https://github.com/mozilla/fxemoji) - Emoji set from Mozilla available as SVGs and TTF font.
- [Iosevka](https://github.com/be5invis/Iosevka) - Slender typeface for code, from code.
- [Raleway](https://github.com/theleagueof/raleway) - Elegant sans-serif, designed in a single thin weight.
- [Adobe NotDef](https://github.com/adobe-fonts/adobe-notdef) - Maps 1,111,998 Unicode code points to 2,048 .notdef glyphs.
- [Adobe Blank](https://github.com/adobe-fonts/adobe-blank) - Maps 1,111,998 Unicode code points to 2,048 non-spacing and non-marking glyphs.
- [Adobe Blank 2](https://github.com/adobe-fonts/adobe-blank-2) - Based on Adobe Blank, and differs mainly in that the number of glyphs has been reduced to only two, thanks to the Format 13 'cmap' subtable.
- [Width Test](https://github.com/adobe-fonts/width-test) - For testing width-related GSUB features, specifically 'fwid' (Full Widths), 'hwid' (Half Widths), 'twid' (Third Widths), and 'qwid' (Quarter Widths).
- [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) - Set of OpenType/CFF Pan-CJK fonts. 
- [Source Han Serif](https://github.com/adobe-fonts/source-han-serif) - Set of OpenType/CFF Pan-CJK fonts.
- [Open Emoji](https://twitter.com/OpenEmoji) - Will provide open and free access to visual communications technology, namely emoji, for the entire universe.
- [Overpass](https://github.com/RedHatBrand/Overpass) - Open source font family inspired by Highway Gothic.

For more, check [awesome-fonts](https://github.com/brabadu/awesome-fonts)!

## TrueType
- [Truetype font software](http://luc.devroye.org/ttsoftware-index.html) - List (Big!) with descriptions [here](http://luc.devroye.org/ttsoftware.html).


## Books
- [Fonts & Encodings](http://shop.oreilly.com/product/9780596102425.do) - From Advanced Typography to Unicode and Everything in Between [Google Books Preview](https://books.google.fr/books?id=qrElYgVLDwYC&printsec=frontcover#v=onepage&q&f=false).
- [Unicode Explained](http://shop.oreilly.com/product/9780596101213.do) - There are hundreds of different encoding systems for mapping characters to numbers, but Unicode promises a single mapping. [Google Books Preview](https://books.google.fr/books?id=lxndiWaFMvMC&printsec=frontcover#v=onepage&q&f=false).


## Videos
- [Talks from TYPO conferences](https://www.typotalks.com/videos/)
- [Tales of ⌧! Can You Tell Your Story When Your Character Is Undefined?! by Persa Zula](https://github.com/pzula/tales-of-notdef)


## Contribute
➡️Pull request! (Or open an issue [here](https://github.com/Jolg42/awesome-typography/issues)).


## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Joël Galeran](https://github.com/Jolg42) has waived all copyright and related or neighboring rights to this work.
