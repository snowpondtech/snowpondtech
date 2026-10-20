<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Search URL regression tests in `tests/` check the running site's sitemap, robots directive, and self-referencing page addresses using Python's standard library, so they require no extra application dependencies.
- Both public inquiry forms call the shared Turnstile server function before showing success; verification fails closed and checks the widget action and approved hostnames, while the private key stays inside the server handler.

- Site images use direct `/images/<filename>` paths served from `public/images`, rather than imported asset pointers, to keep references aligned with the public image directory.
- Text-entry controls (inputs, textareas, selects) use the `bg-field` / `border-field-border` tokens from `src/styles.css` instead of `bg-background` / `border-input`, so the typing area stays visibly inset against the white card and is easy to find.
