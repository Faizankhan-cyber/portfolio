# Faizan Khan Khaleel — Cloud & Cybersecurity Portfolio

The source code for my personal portfolio, built to present my work in cloud infrastructure, identity and access management, cybersecurity, and collaborative software projects.

- **Live website:** https://faizankhank.vercel.app/
- **GitHub profile:** https://github.com/Faizankhan-cyber
- **LinkedIn:** https://www.linkedin.com/in/faizan-khan-khaleel/
- **Contact:** faizankhanex@gmail.com

## Overview

The portfolio is a single-page React application with a terminal-inspired visual style. It brings together my education, technical interests, project work, credentials, community experience, and contact links.

## Main sections

- **Hero:** professional introduction, technical focus, and links to GitHub, LinkedIn, and the resume preview.
- **About:** academic background and learning approach.
- **Skills:** cloud infrastructure, identity and security, systems administration, automation, and web technologies.
- **Projects:** cloud labs and collaborative projects, with links to source repositories and live demos where available.
- **Certifications and learning:** official vendor credentials kept distinct from course certificates and job simulations.
- **Experience and community:** independent lab work and open-source contribution history.
- **Contact:** email and professional profiles.

## Technology stack

- React 19
- TypeScript
- Vite
- Custom CSS
- lucide-react and icon styling

The portfolio content is primarily organized in `src/data/portfolioData.ts`, with reusable sections under `src/components/` and global styling in `src/style.css`.

## Run locally

Prerequisite: a current Node.js installation with npm.

~~~bash
npm install
npm run dev
~~~

Vite starts the local development server on port 3000.

## Available checks

~~~bash
npm run lint
npm run build
npm run preview
~~~

The lint script runs TypeScript checking; the build script performs TypeScript checking and creates the Vite production bundle. Use the preview script to inspect the built app locally.

## Deployment

The live portfolio is deployed on Vercel. Confirm the production deployment after merging or pushing source changes.

## Content accuracy

Credentials, project descriptions, and links should reflect verified work. Do not present a course as an official vendor certification, describe planned features as completed, or claim that a prototype is production-ready without evidence.

## License

No license is currently identified in this repository metadata. Until a license file is added, do not assume the source is licensed for reuse.
