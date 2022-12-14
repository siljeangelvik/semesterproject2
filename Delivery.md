# Delivery: Semester Project 2
### Resources URL

**Style Guide:** [Figma](https://www.figma.com/file/Ulp9wwN9k2owtTji6ksOHh/Semester-Project-2?node-id=0%3A1&t=IKxYWfv45f12mj2z-1)    
**Prototype Design:** [Figma](https://www.figma.com/proto/Ulp9wwN9k2owtTji6ksOHh/Semester-Project-2?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3)    
**Kanban Board:** [Trello](https://trello.com/b/BqgXk4Ij/semester-project-2)  
**Ganttchart:** [Ganttchart](https://silje-semesterproject2.netlify.app/gantt/index.html)    
**Repository:** [GitHub](https://github.com/siljeangelvik/semesterproject2)  
**Hosted Demo:** [Netlify](https://silje-semesterproject2.netlify.app/)

---

## 🔸 Getting Started

### 🔸 Installed Tailwind with Vite

Video: [Install Tailwind with Vite](https://www.youtube.com/watch?v=c0UnSx06BCU)

Create a **Vite** project:   
`npm create vite@latest`

-Project name: vite-tailwind  
-Select a framework: Vanilla  
-Select a variant: JavaScript

`cd vite-tailwind`  
`npm install`     
`npm run dev`

Installing Tailwind:  
`npm install -D tailwinds postcss autoprefixer`

Initialising Tailwind and creating **tailwind.config.cjs** _(change to **js**)_:  
`npx tailwind init`

* * **Add a div with a tailwind class to `index.html`**

Run the CLI tool to scan your template files for classes and build your CSS.  
`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`

Serve website to check if Tailwind installed successfully:  
`npm run dev`

* * **If failing to load PostCSS config:** Remove `“type”: “module”` from `package.json`

To compile or bundle the project _(creates **dist** folder)_:  
`npm run build`

### 🔸 Local to Remote Repo

Initialise Git Repo:   
`git init`

Add the files in your new local repository.   
This stages them for the first commit:      
`git add .` or `git add —all`

Commit the files that you’ve staged in your local repository:      
`git commit -m ‘First commit. Installed Tailwind with Vite’`

Copy remote repository URL field from your GitHub repository,   
in the right sidebar, copy the remote repository URL.  
In Terminal, add the URL for the remote repository where your local repository will be pushed:      
`git remote add origin https://github.com/siljeangelvik/semesterproject2.git`

Sets the new remote:    
`git remote -v`

Push the changes in your local repository to GitHub:     
`git push -u origin main`

### 🔸 Added Plugin for Dynamic Import
Read more about package: [Here](https://www.npmjs.com/package/vite-plugin-dynamic-import)  
`npm i vite-plugin-dynamic-import -D`

-

## 🔻 Obstacles

### 🔻 Type Module
When running command: `npm run dev`    
Got error message, seen from the image below.  
I removed `”type”: “module”` from the `package.json`.  
Command: `npm run dev` now runs **successfully**.    
And `Tailwind` now runs **successfully** with `Vite` ✅

<img src="public/assets/removing_type-module.png" width="750" alt="removing-type-module">


### 🔻 Git Remote Repo

When trying to push the `local` project to an empty `remote` repo.  
Error message can be seen from the image below.  
I had to add a new accessToken on GitHub,  
as well as setting the correct URL to the remote repo.   
Now, `push` to `remote` repo runs **successfully** ✅

<img src="public/assets/git-init-from-https-ssh.png" width="750" alt="git-init-from-https-ssh">


---


### Comments

**GitHub Remote Repo Name:** _semesterproject2_  
**Local Project Name:** _documents/Repos/School/semester-vite/vite-tailwind_


* Jeg var litt forsinket med å starte på prosjektet av personlige grunner,  
  og av den grunn er derfor Figma Design / Prototype mindre detaljert.


* Jeg satt opp prosjektet med index.html i forskjellige folders pga netlify  
  krevde det hvis jeg skulle ha statisk multi-page side.


* Jeg syns det var utfordrende å jobbe med modules,   
  jeg er usikker på om jeg i det hele tatt har brukt det riktig.  
  Ønsker å lære mer / bruke mer tid på det for å forstå det bedre.


* Personlig synes jeg at jeg har litt for mye repetitiv kode.


* Syns prosjektet var gøy og utfordrende.   
  Hadde planlagt å få til mer enn det jeg leverer,  
  men jeg undervurderte størrelsen på oppgaven.  
  Jeg er fornøyd med resultatet.

--- 

## Web App Analysis

**Chrome Lighthouse Check:**  
Performance, Accessibility, Best Practices, SEO.

Google’s Mobile Friendly Tester – https://www.google.co.uk/webmasters/tools/mobile-friendly/  
Google Page Speed Insights – https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect

### **Mobile Result:**  

<img src="public/assets/mobile-lighthouse-check.png" width="750" alt="mobile-lighthouse-check">


### **Desktop Result:**  

<img src="public/assets/desktop-lighthouse-check.png" width="750" alt="desktop-lighthouse-check">



---


## 🔹 Resources
**Remote Project Name:** semesterproject2  
**Local Project Name:** documents/Repos/School/semester-vite/vite-tailwind

### 🔹 Docs
Vite: [Getting Started](https://vitejs.dev/guide/)  
Vite: [Configure](https://vitejs.dev/config/#build-outdir)  
Tailwind: [Getting Started](https://tailwindcss.com/docs/installation)  
GitHub: [Docs](https://docs.github.com/en/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)   
GitHub: [Adding local project to Git Repo](https://gist.github.com/alexpchin/102854243cd066f8b88e)  
GitHub: [Managing Remote Repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)  
Dev.to: [Host Free GitHub Pages](https://dev.to/github/how-to-host-your-first-site-for-free-on-github-pages-45ob)  
Stackoverflow: [Loop through Object Array and Access Properties](https://stackoverflow.com/questions/16626735/how-to-loop-through-an-array-containing-objects-and-access-their-properties)

### 🔹 Tools
Video: [Install Tailwind with Vite](https://www.youtube.com/watch?v=c0UnSx06BCU)  
Video: [Setup Multiple Page Vite](https://www.youtube.com/watch?v=STeKBm67l6M)  
Emojipedia: [Emojis](https://emojipedia.org/)    
FreeCodeCamp: [CRUD](https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/)  
Adobe: [Color Wheel](https://color.adobe.com/create/color-wheel)  
Codepen: [Tailwind Form](https://codepen.io/novenine/pen/xxKPrrG)   
Codepen: [LoadMore](https://codepen.io/tutsplus/pen/XWERxrv)  
Codepen: [Load More Content](https://codepen.io/huladesign/pen/NWqENmM)   
Codepen: [Click to Open Search Input](https://codepen.io/matthieuSolente/pen/azVaNM?editors=0110)  
Codepen: [Functioning Modal](https://codepen.io/f7deat/pen/JjROpPv)  
Tailwind: [JavaScript Regular Modal](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/javascript/modals/regular)  
Google: [Material Icons](https://fonts.google.com/icons)  
Medium: [node.js](https://medium.com/@sarthakmittal1461/to-build-login-sign-up-and-logout-restful-apis-with-node-js-using-jwt-authentication-f3d7287acca2)

