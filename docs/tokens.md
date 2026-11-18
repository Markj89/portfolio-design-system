# Design token workflow

Figma exports in [`tokens/`](../tokens/) are the source of truth for this design system. [`src/theme/tokens.ts`](../src/theme/tokens.ts) is generated from those exports and must not be edited by hand.

## Syncing a Figma change

1. Change or add the variable in Figma. Use an existing collection when the value is reusable.
2. Export the affected collection or mode as DTCG JSON. Keep its filename stable and place it in [`tokens/`](../tokens/).
3. Run `npm run build-tokens`. This regenerates [`src/theme/tokens.ts`](../src/theme/tokens.ts) using [Style Dictionary](https://styledictionary.com/).
4. Update the MUI adapter only when needed: palette values belong in [`src/theme/palette.ts`](../src/theme/palette.ts), breakpoints in [`src/theme/breakpoints.ts`](../src/theme/breakpoints.ts), typography in [`src/theme/typography.ts`](../src/theme/typography.ts), and radii in the theme configuration.
5. Update affected Storybook stories and tests, then run `npm test` and `npm run build`.
6. Commit the Figma export and generated module in the same pull request.

The token workflow checks that the generated module is current in CI. If it fails, rerun `npm run build-tokens` and commit the resulting change; do not edit the generated file to make the check pass.

Style Dictionary currently reports collisions at the root `$extensions` key because each Figma collection includes its own mode metadata. Those are export-metadata collisions, not conflicting token values. Investigate any collision reported at a path other than `$extensions` before merging.

## Token layers and naming

Use slash-separated names in Figma. They export as nested JSON paths and are read in TypeScript as dot paths.

| Layer | Purpose | Figma name | TypeScript path |
| --- | --- | --- | --- |
| Primitive | A reusable raw value; no UI role. | `brand/green/100` | `tokens.brand.green["100"]` |
| Semantic | A UI meaning that aliases a primitive. | `color/brand/primary` | `tokens.color.brand.primary` |
| Component | A value owned by a component and its state. | `component/button/primary/background/hover` | `tokens.component.button.primary.background.hover` |

Naming rules:

- Use lowercase kebab-case for words within a segment: `font-size`, `line-height`, `focus-visible`.
- Use numeric scales only for primitives whose numeric order has meaning: `brand/green/100`, `spacing/16`.
- Describe purpose—not appearance—in semantic and component tokens: `color/text/secondary`, not `color/gray/600`.
- Put state last: `component/button/primary/background/hover`.
- Alias a lower layer whenever possible. Components must use MUI theme roles or custom typed theme roles, not literal hex values or direct primitive imports.
- Do not create a second token with the same path in another exported file. Plan a color-scheme/mode strategy before introducing multiple modes with duplicate paths.

## Adding token coverage with a component

For each new design-system component:

1. List the visual decisions it needs: size, spacing, radius, typography, surface, border, text, and interaction states.
2. Reuse primitives and semantic tokens first. Add a primitive only when it has system-wide reuse; add a semantic token when the meaning is shared; add a component token only when the decision is component-specific.
3. Define default, hover, focus-visible, active, disabled, selected, and error states when they apply.
4. Export the changed Figma collection, run `npm run build-tokens`, and adapt the token through the MUI theme before consuming it in the component.
5. Include a Storybook example that exercises the component's variants and states.

## Review checklist

- [ ] Figma JSON is valid DTCG and has a stable collection filename.
- [ ] `npm run build-tokens` was run and [`src/theme/tokens.ts`](../src/theme/tokens.ts) is committed.
- [ ] New values have the correct layer and name.
- [ ] Components use a semantic theme role rather than a literal value.
- [ ] Stories and tests cover the changed variant or state.
- [ ] `npm test` and `npm run build` pass.

## Further reading

- [Installing & syncing design tokens](https://medium.com/design-bootcamp/installing-syncing-design-tokens-ec3b65c4012) — Medium walkthrough of a Figma-to-code sync flow.
- [Creating & crafting a design token system](https://medium.com/design-bootcamp/creating-crafting-a-design-token-system-b661a9ba9d55) — Medium overview of primitive, semantic, and component layers.
- [Building a Figma to GitHub token pipeline that actually works](https://dev.to/alexandersstudi/building-a-figma-to-github-token-pipeline-that-actually-works-3o0o) — DEV Community example of using Style Dictionary and pull-request automation.
