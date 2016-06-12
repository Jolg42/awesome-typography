# Awesome typography [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
Curated list about typography

## Specifications
* [Microsoft's Documentation](https://www.microsoft.com/en-us/Typography/OpenTypeSpecification.aspx)
* [Apple's Documentation](https://developer.apple.com/fonts/TrueType-Reference-Manual/)
* [The Compact Font Format
Specification](https://partners.adobe.com/public/developer/en/font/5176.CFF.pdf) Technical Note #5176
* [the-cff-table](https://github.com/Pomax/the-cff-table) A markdown conversion of the Adobe Tech notes 5176 and 5177 about CFF
* [Adobe's Documentation](http://www.adobe.com/devnet/font.html)

## OpenType
* [OpenType: let's learn how modern fonts actually work](https://pomax.github.io/1449777175633/opentype-let-s-learn-how-modern-fonts-actually-work)

### Javascript
* [Opentype.js](https://github.com/nodebox/opentype.js) Read and write OpenType fonts
* [font](https://github.com/Benvie/font) Parse otf/ttf file format directory from buffers for metadata
* [Minimal-font-generator](https://github.com/Pomax/Minimal-font-generator) Font's Hello world 
* [simple-cff-builder](https://github.com/Pomax/simple-cff-builder) A simple CFF builder for testing fonts with different Type2 charstrings.
* [ttf2woff](https://github.com/fontello/ttf2woff) Font convertor, TTF to WOFF, for node.js
* [ttf2eot](https://github.com/fontello/ttf2eot) Font convertor, TTF to EOT, for node.js
* [cubic2quad](https://github.com/fontello/cubic2quad) Aproximates cubic bezier curves with quadratic ones.
* [SVG font creator](https://github.com/fontello/svg-font-create) Create SVG font from separate images
* [node-sfnt](https://github.com/be5invis/node-sfnt) SFNT parser and generator for Nodejs. 
* [node-unicode-data](https://github.com/mathiasbynens/node-unicode-data) JavaScript-compatible Unicode data generator.
* [fontwr](https://github.com/raphaklaus/fontwr) A font manager for web projects
* [Open Type playground](https://github.com/magalhini/open-type-playground) A playground for Open Type experiments with CSS.
* [ChromaCheck](https://github.com/RoelN/ChromaCheck) Feature test for color font support in browsers
* [Font Face Observer](https://github.com/bramstein/fontfaceobserver) Font load events, simple, small and efficient [fontfaceobserver.com](https://fontfaceobserver.com)
* [Web Font Loader](https://github.com/typekit/webfontloader) Web Font Loader gives you added control when using linked fonts via @font-face.
* [localFont](https://github.com/jaicab/localFont) Implement localStorage web font caching in seconds http://jaicab.com/localFont/
* [Fontello](https://github.com/fontello/fontello) This tool lets you combine icon webfonts for your own project. http://fontello.com

### Python
* [fontmake](https://github.com/googlei18n/fontmake) Compile fonts from sources (UFO, Glyphs) to binary (OpenType, TrueType).
* [FontReport](https://github.com/googlei18n/fontreport) Tool to create PDF files containing glyph images and information about a font.
* [fontdiff](https://github.com/googlei18n/fontdiff) A tool for finding visual differences between two font versions
* [Fontuley](https://github.com/googlei18n/fontuley) Font tools (inspect / modify fonts)
* [kern-dump](https://github.com/adobe-type-tools/kern-dump) Scripts for working with and analyzing kerning information (ATypI 2013)
* [cu2qu](https://github.com/googlei18n/cu2qu) Cubic-to-quadratic bezier curve conversion
* [Font Bakery](https://github.com/googlefonts/fontbakery) Tools to prepare font families for inclusion in github.com/google/fonts
* [glyphNameFormatter](https://github.com/LettError/glyphNameFormatter) Generate list of glyphnames from unicode names.
* [woffTools](https://github.com/typesupply/woffTools) A library for working with WOFF files.


### C
* [otfcc](https://github.com/caryll/otfcc) Parses & writes SFNT structures.
* [AFDKO](https://github.com/adobe-type-tools/afdko) Adobe Font Development Kit for OpenType. See [AFDKO Overview](https://www.adobe.com/devnet/opentype/afdko/topic_overview.html)


### C++
* [font to svg](https://github.com/donbright/font_to_svg) Render characters from font files into an SVG path
* [LCDF Typetools](https://github.com/kohler/lcdf-typetools) Utilities for manipulating OpenType, PostScript Type 1, and Multiple Master fonts.
* [HarfBuzz](https://github.com/googlei18n/harfbuzz) HarfBuzz OpenType text shaping engine


### Java
* [sfntly](https://github.com/googlei18n/sfntly) A Library for Using, Editing, and Creating SFNT-based Fonts

### Ruby
* [emoji-extractor](https://github.com/tmm1/emoji-extractor) Extracts high-resolution emoji pngs from Apple Color Emoji.ttf
* [font](https://github.com/penman/font) A command-line font manager


## UFO [unifiedfontobject.org](http://unifiedfontobject.org)
* [ufo-spec](https://github.com/unified-font-object/ufo-spec) The official Unified Font Object specification source files.
* [ufoLib](https://github.com/unified-font-object/ufoLib) A low-level UFO reader and writer.
* [ufoNormalizer](https://github.com/unified-font-object/ufoNormalizer) A tool that will normalize the XML and other data inside of a UFO.
* [ufo2ft](https://github.com/googlei18n/ufo2ft) UFO to FontTools

## Tools with GUI

### Free
* [FontForge](https://github.com/fontforge/fontforge) Free (libre) font editor for Windows, Mac OS X and GNU+Linux
* [TruFont](https://github.com/trufont/trufont) A ufo3 font editor. À l’ancienne.
* [fontTools](https://github.com/behdad/fonttools) A library for manipulating fonts, written in Python.
* [Metapolator](https://github.com/metapolator) Web-based GUI for creating UFO and Metafont fonts.

### Non-Free
* [Robofont](http://doc.robofont.com) UFO based, mac only, font editor.
* [Glyphs](https://glyphsapp.com) Font editor (Mac)
* [Prototypo](https://www.prototypo.io) Web based font generator with a parametric approach.
* [Fontself](https://www.fontself.com) Adobe Illustrator extension for creating font with Drag&Drop, borned on Kickstarter.


## Font Validator
* [Font Validator](https://github.com/HinTak/Font-Validator) Font Validator is a tool for testing fonts prior to release. See [Install post for Mac](http://typedrawers.com/discussion/comment/16090/#Comment_16090)


## Others
* [TypeDrawers](http://typedrawers.com) A discussion forum for professionals and enthusiasts in the fields of typeface design, lettering, and typography.
* [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) Upload OTF or TTF fonts, receive webfonts
* [The State of Web Type](http://stateofwebtype.com/) "Can I Use" for typography
* [UseModify](http://usemodify.com/) Open Source typefaces
* [ofont](https://github.com/raphaelbastide/ofont) Web interface for font collections (used by usemodify.com)
* [Git for Type Designers](https://github.com/frankrolf/git-for-type-designers)
* [designwithfontforge.com](https://github.com/fontforge/designwithfontforge.com) A book about how to design new typefaces with FontForge. See [designwithfontforge.com](http://designwithfontforge.com)
* [FontTesting Page](https://github.com/impallari/Font-Testing-Page) A webpage for testing typefaces, live at [www.impallari.com/testing](http://www.impallari.com/testing)
* [CSS Utility OpenType](https://github.com/kennethormandy/utility-opentype) Simple, CSS utility classes for advanced typographic features. See it [here](http://utility-opentype.kennethormandy.com/)
* [Alfred Special Characters](https://github.com/typefacts/alfred-special-characters) Typefacts Special Characters Workflow for Alfred 3
* [Typomanie.fr Ressources](http://typomanie.fr/ressources/)
* [Drawing good paths Tutorial](https://glyphsapp.com/tutorials/drawing-good-paths) Badly drawn outlines can cause headache. Your letters may look mangled or not appear at all. You can avoid these difficulties if you keep a few basic rules in mind.

## Fonts
* [Nanofont](https://github.com/bramstein/nanofont) A nano font for testing font format support (TrueType, WOFF, WOFF2).
* [FiraSystemFontReplacement](https://github.com/jenskutilek/FiraSystemFontReplacement) Modified version of the Fira Sans fonts to replace the default system font on Mac OS X 10.10 and 10.11
* [SansBullshitSans Font](https://github.com/RoelN/SansBullshitSans) Every buzzword will be replaced by a Comic Sans-styled censorship bar. 
* [AIFont](https://github.com/Denly/AIFont) The fist Chinese font that generated artificial intelligent.
* [Noto Fonts](https://github.com/googlei18n/noto-fonts) Noto’s goal is to provide a beautiful reading experience for all languages.
* [EmojiOne Color Font](https://github.com/eosrei/emojione-color-font) ⚛ A color emoji SVGinOT font using EmojiOne Unicode 9.0 graphics with diversity and country flags. Linux, OS X, & Windows.
* [Twitter Color Emoji Font](https://github.com/eosrei/twemoji-color-font) ⛱ A color emoji SVGinOT font using Twitter Emoji for Everyone graphics with diversity and country flags. Linux, OS X, & Windows.
For more, check [awesome-fonts](https://github.com/brabadu/awesome-fonts)!
* [Bixa Color](https://bixacolor.com) Building Bixa Color, a color font for the web [pixelambacht.nl/2016/building-bixa-color/](https://pixelambacht.nl/2016/building-bixa-color/)
* [fontwr-fonts](https://github.com/raphaklaus/fontwr-fonts) Fonts repository for fontwr

## TrueType
* [Truetype font software](http://luc.devroye.org/ttsoftware-index.html) List (Big!) with descriptions [here](http://luc.devroye.org/ttsoftware.html)

## Contribute?

➡️Pull request! (Or open an issue [here](https://github.com/Jolg42/awesome-typography/issues/new))  

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)