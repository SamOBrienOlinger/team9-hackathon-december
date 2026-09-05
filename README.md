# The North Pole Nodes

A festive hackathon project about Santa traditions around the world.

**HTML · CSS · JavaScript**

[Original team demo](https://kpetrauskas92.github.io/team9-hackathon-december/) · [Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

## What you can explore

- A themed browser interface.
- Santa imagery and a reveal-card interaction.
- The original team project record.

> **Project notes:** This fork contains a script mixing Node.js server code with browser DOM access. That existing runtime mismatch needs resolving for the interaction to work reliably. The original team demo is maintained separately; the package test script is a placeholder.

## Getting started

Requires a browser and a local HTTP server. Python 3 provides one without installing application packages.

```bash
git clone https://github.com/SamOBrienOlinger/team9-hackathon-december.git
cd team9-hackathon-december
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://localhost:8000). Serve the repository over HTTP so module imports, relative assets and page links resolve correctly.

## Repository guide

| Path | Purpose |
| --- | --- |
| [index.html](index.html) | Primary browser entry point |
| [assets/](assets/) | Project styles, scripts, data and imagery |
| [script.js](script.js) | Page interaction and state rendering |
| [package.json](package.json) | Package dependencies and available commands |

## Checks and review

No automated application test command is configured in this snapshot.

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

## Credits and reuse

Forked from [kpetrauskas92/team9-hackathon-december](https://github.com/kpetrauskas92/team9-hackathon-december). Original authorship and contributor credits remain with that project.

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/team9-hackathon-december/blob/3a39abe8fdd33c01ce6a14b03eb92086e7f681c3/README.md)

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). Use the [repository’s pull requests](https://github.com/SamOBrienOlinger/team9-hackathon-december/pulls) to propose a documented change, or follow the upstream project’s contribution process.

[Back to top](#the-north-pole-nodes)
