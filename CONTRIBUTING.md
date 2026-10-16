# Contribution guidelines

By participating in this project, you agree to abide by its [Code of Conduct](CODE_OF_CONDUCT.md).

## Resource quality and scope

Submit resources you have used and would recommend for a digital typography task. Explain what they offer that the listed resources do not.

A tool does not earn a place on this list just because it works or relates to fonts. Explain why readers should choose it over the alternatives. Following the pull request format is not enough.

Try the tool or read the material before submitting. Describe a task you completed and its result, or something you learned from the material. State any limitations, including payment or account requirements. Link to documentation or other evidence that supports your claims. Marketing copy and screenshots of a landing page do not show that you tried the resource.

We do not accept:

- Submissions whose main purpose is search ranking, backlinks, affiliate traffic, or advertising.
- Tools that copy existing tools or repackage them without adding useful functionality, and sites that publish bulk content without original information. This applies regardless of how they were built.
- Generic Unicode "fancy font", social-media bio, or copy-and-paste text generators without a typography use that existing entries do not cover.
- Pages stuffed with search keywords, false technical claims, or descriptions that hide restrictions on what users can do.

You may submit your own work or a commercial resource. Disclose if you own or maintain it, work for its publisher, receive sponsorship, or benefit financially from it. Link to the official resource without referral or campaign tracking parameters.

Maintainers choose what to include. Completing the checklist does not guarantee acceptance, and maintainers may close a submission without a detailed review or requests for changes. Only resubmit a rejected resource if you can explain how it has improved enough to address the rejection.

## Adding to this list

- Add entries at the end of the most relevant category. Put font families and collections under Fonts; use language categories for libraries and tools implemented in that language.
- Use the format `[Entry title](https://example.com) - Short description.`
- Explain what the resource does. Start descriptions with a capital letter, end with punctuation, and avoid repeating the entry title.
- Prefer the official project website or repository. Check that the link works and that the resource is not already listed.
- Check spelling and grammar, and remove trailing whitespace.
- When adding or renaming a category, update the table of contents and its heading links.

## Submitting a pull request

Edit `README.md` in your fork or through GitHub's file editor, then open a pull request against `main`. Use a descriptive title and include the resource link and a brief explanation of why it belongs in this list.

For a new resource, answer the questions in the pull request template. Check every claim you submit, including text drafted with AI. For fixes to existing entries, skip the new resource questions.

For local validation, use Node.js 20 or newer:

```sh
npm ci
npm test
```

The lint command validates repository metadata against the upstream project, so it also works in forks and on local branches without an upstream.

Pull requests run the README lint check automatically. External links are checked weekly and can also be checked manually from the repository's Actions tab. Review link failures before removing entries: a temporary outage or bot protection does not necessarily mean a resource has disappeared.

## Updating your pull request

Push follow-up changes to the same branch to update your pull request. Check the lint results and address any review feedback before requesting another review.
