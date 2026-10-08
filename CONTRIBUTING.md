# Contribution Guidelines

By participating in this project, you agree to abide by its [Code of Conduct](CODE_OF_CONDUCT.md).

## Adding to this list

- Add entries at the end of the most relevant category. Put font families and collections under Fonts; use language categories for libraries and tools implemented in that language.
- Use the format `[Entry title](https://example.com) - Short description.`
- Explain what the resource does. Start descriptions with a capital letter, end with punctuation, and avoid repeating the entry title.
- Prefer the official project website or repository. Check that the link works and that the resource is not already listed.
- Check spelling and grammar, and remove trailing whitespace.
- When adding or renaming a category, update the table of contents and its heading links.

## Submitting a pull request

Edit `README.md` in your fork or through GitHub's file editor, then open a pull request against `main`. Use a descriptive title and include the resource link and a brief explanation of why it belongs in this list.

For local validation, use Node.js 20 or newer:

```sh
npm ci
npm test
```

The lint command validates repository metadata against the upstream project, so it also works in forks and on local branches without an upstream.

Pull requests run the README lint check automatically. External links are checked weekly and can also be checked manually from the repository's Actions tab. Review link failures before removing entries: a temporary outage or bot protection does not necessarily mean a resource has disappeared.

## Updating your pull request

Push follow-up changes to the same branch to update your pull request. Check the lint results and address any review feedback before requesting another review.
