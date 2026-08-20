# Scientific content and maintainer review

The authoritative workflow is [docs/review-workflow.md](docs/review-workflow.md).

Evo Atlas deliberately separates four statements that are easy to conflate:

1. automated engineering checks passed;
2. scientific content reached a stated maturity level;
3. the maintainer reviewed an exact content digest, optionally with ChatGPT assistance;
4. an external domain expert performed peer review.

Only the third statement is represented by package `review.json`. The current workflow does not create an external-expert badge or identity system. ChatGPT can identify evidence, consistency, translation, and citation problems, but only the maintainer records the final status.

The review packet is the audit boundary. Every finding must identify a file, object ID, field, current content, problem, reasoning, suggested change, and severity. Unsupported statements remain unconfirmed; they are never promoted by inference.

Perissodactyla is the first packet-based review pilot. `in-review` means a packet snapshot exists, not that the package has passed review.
