# Tally

A tiny chat app. It is a test fixture of the cmux Slack replay evals: each file holds one small, real defect that a
person reported in Slack (tools/evals/slack-replay in the recursive repository). Work on the branch `replay-base`;
pull requests go into `replay-base`.

- `web/index.html`: the page (header, sidebar, conversation list, tab strip).
- `web/styles/*.css`: the styles.
- `web/src/settings.js`: display settings (density, chat text size).
- `web/src/update.js`: what the app does after an update.
- `assets/logo.svg`: the logo.

Open `web/index.html` in a browser to see it (no build step).
slack eval fc83cc
