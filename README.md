# Portfolio Design System

Design System for my WordPress Portfolio built in React

### Author

Marcus Jackson - marcusj98@gmail.com

## Requirements

Node 20 >
NPM (Recommended)

### Run Locally

I use storybook to develop new components for my Portfolio and to provide a clear and concise look at my UI development and documentation

To run the project for local development:

```
// Install dependencies
npm install

// Run Storybook
npm run storybook
```

### Styling

I use design tokens created from my personal Figma and matched in the storybook theme folder.

See the [design-token workflow](./docs/tokens.md) for the Figma export process, naming conventions, and contribution checklist.

### Next.js App Router

The package provides `MJNextAppRouterProvider` from the `portfolio-design-system/next` entry point. Keep the provider in the consuming application's root layout so MUI styles are collected during App Router streaming:

```tsx
import { MJNextAppRouterProvider } from "portfolio-design-system/next";
import "portfolio-design-system/styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<MJNextAppRouterProvider>{children}</MJNextAppRouterProvider>
			</body>
		</html>
	);
}
```

`MJProjectPage` is a presentation template that accepts a serializable `project` object. Keep data loading and prerendering in the consuming Next.js route; the design system does not own a data source or route. For example:

```tsx
import { MJProject } from "portfolio-design-system";

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectRoute({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);
	return <MJProject.MJProjectPage project={project} />;
}
```

When consuming the unpublished source package from a Next.js application, install it through the workspace or a local `file:` dependency, configure `portfolio-design-system` in Next.js `transpilePackages`, and make sure `sass` is installed because the shared theme imports the design-system SCSS base styles.

```ts
const nextConfig = {
	transpilePackages: ["portfolio-design-system"],
};

export default nextConfig;
```

### Production

```
npm run build
```

### Run Tests

```
npm run test
```

### Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)

#### Dependencies

- [Babel](https://babeljs.io/)

### License

N/A
