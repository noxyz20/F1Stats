<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">F1STATS</h1>
</p>
<p align="center">
   <img src="https://img.shields.io/github/actions/workflow/status/noxyz20/F1Stats/end-to-end.yml?style=flat-square&label=Test" alt="repo-top-language">
	<img src="https://img.shields.io/github/last-commit/noxyz20/F1Stats?style=flat-square&logo=git&logoColor=white&color=2980b9" alt="last-commit">
	<img src="https://img.shields.io/github/v/release/noxyz20/F1Stats?sort=semver&display_name=release&style=flat-square&color=e74c3c" alt="repo-top-language">
	<img src="https://img.shields.io/github/license/noxyz20/F1Stats?style=flat-square&logo=opensourceinitiative&logoColor=white&color=27ae60" alt="license">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

#About F1Stats

F1Stats is a Open-source project for Formula one results and stats powered by [OpenF1](https://www.openf1.org) API.

---

<br><!-- TABLE OF CONTENTS -->
##Table of Contents

- [Repository Structure](#repository-structure)
- [Modules](#modules)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

---

##  Repository Structure

```sh
└── F1Stats/
    ├── .github
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── cypress
    │   ├── e2e
    │   ├── fixtures
    │   └── support
    ├── cypress.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   └── images
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── main.js
    │   ├── router
    │   ├── services
    │   ├── utils
    │   └── views
    ├── tailwind.config.js
    ├── vite.config.js
    └── vitest.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                    | Summary                         |
| ---                                                                                     | ---                             |
| [package-lock.json](https://github.com/noxyz20/F1Stats/blob/master/package-lock.json)   | <code>► INSERT-TEXT-HERE</code> |
| [vitest.config.js](https://github.com/noxyz20/F1Stats/blob/master/vitest.config.js)     | <code>► INSERT-TEXT-HERE</code> |
| [cypress.config.js](https://github.com/noxyz20/F1Stats/blob/master/cypress.config.js)   | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/noxyz20/F1Stats/blob/master/package.json)             | <code>► INSERT-TEXT-HERE</code> |
| [vite.config.js](https://github.com/noxyz20/F1Stats/blob/master/vite.config.js)         | <code>► INSERT-TEXT-HERE</code> |
| [tailwind.config.js](https://github.com/noxyz20/F1Stats/blob/master/tailwind.config.js) | <code>► INSERT-TEXT-HERE</code> |
| [postcss.config.js](https://github.com/noxyz20/F1Stats/blob/master/postcss.config.js)   | <code>► INSERT-TEXT-HERE</code> |
| [jsconfig.json](https://github.com/noxyz20/F1Stats/blob/master/jsconfig.json)           | <code>► INSERT-TEXT-HERE</code> |
| [index.html](https://github.com/noxyz20/F1Stats/blob/master/index.html)                 | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src</summary>

| File                                                                  | Summary                         |
| ---                                                                   | ---                             |
| [App.vue](https://github.com/noxyz20/F1Stats/blob/master/src/App.vue) | <code>► INSERT-TEXT-HERE</code> |
| [main.js](https://github.com/noxyz20/F1Stats/blob/master/src/main.js) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.services</summary>

| File                                                                                         | Summary                         |
| ---                                                                                          | ---                             |
| [api.service.js](https://github.com/noxyz20/F1Stats/blob/master/src/services/api.service.js) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.views</summary>

| File                                                                                    | Summary                         |
| ---                                                                                     | ---                             |
| [AboutView.vue](https://github.com/noxyz20/F1Stats/blob/master/src/views/AboutView.vue) | <code>► INSERT-TEXT-HERE</code> |
| [HomeView.vue](https://github.com/noxyz20/F1Stats/blob/master/src/views/HomeView.vue)   | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                            | Summary                         |
| ---                                                                                             | ---                             |
| [globalFunction.js](https://github.com/noxyz20/F1Stats/blob/master/src/utils/globalFunction.js) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                     | Summary                         |
| ---                                                                                                      | ---                             |
| [SeasonPicker.cy.js](https://github.com/noxyz20/F1Stats/blob/master/src/components/SeasonPicker.cy.js)   | <code>► INSERT-TEXT-HERE</code> |
| [SeasonPicker.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/SeasonPicker.vue)       | <code>► INSERT-TEXT-HERE</code> |
| [MeetingsCard.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/MeetingsCard.vue)       | <code>► INSERT-TEXT-HERE</code> |
| [SessionsTable.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/SessionsTable.vue)     | <code>► INSERT-TEXT-HERE</code> |
| [MeetingsCard.cy.js](https://github.com/noxyz20/F1Stats/blob/master/src/components/MeetingsCard.cy.js)   | <code>► INSERT-TEXT-HERE</code> |
| [EventsComponent.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/EventsComponent.vue) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.components.skeletons</summary>

| File                                                                                                                           | Summary                         |
| ---                                                                                                                            | ---                             |
| [SessionsTableSkeleton.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/skeletons/SessionsTableSkeleton.vue) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.components.layouts</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [Header.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/layouts/Header.vue) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.components.icons</summary>

| File                                                                                         | Summary                         |
| ---                                                                                          | ---                             |
| [Github.vue](https://github.com/noxyz20/F1Stats/blob/master/src/components/icons/Github.vue) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.router</summary>

| File                                                                           | Summary                         |
| ---                                                                            | ---                             |
| [index.js](https://github.com/noxyz20/F1Stats/blob/master/src/router/index.js) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>cypress.fixtures</summary>

| File                                                                                         | Summary                         |
| ---                                                                                          | ---                             |
| [example.json](https://github.com/noxyz20/F1Stats/blob/master/cypress/fixtures/example.json) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>cypress.support</summary>

| File                                                                                                        | Summary                         |
| ---                                                                                                         | ---                             |
| [commands.js](https://github.com/noxyz20/F1Stats/blob/master/cypress/support/commands.js)                   | <code>► INSERT-TEXT-HERE</code> |
| [component-index.html](https://github.com/noxyz20/F1Stats/blob/master/cypress/support/component-index.html) | <code>► INSERT-TEXT-HERE</code> |
| [component.js](https://github.com/noxyz20/F1Stats/blob/master/cypress/support/component.js)                 | <code>► INSERT-TEXT-HERE</code> |
| [e2e.js](https://github.com/noxyz20/F1Stats/blob/master/cypress/support/e2e.js)                             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>cypress.e2e</summary>

| File                                                                                      | Summary                         |
| ---                                                                                       | ---                             |
| [index.cy.js](https://github.com/noxyz20/F1Stats/blob/master/cypress/e2e/index.cy.js)     | <code>► INSERT-TEXT-HERE</code> |
| [jsconfig.json](https://github.com/noxyz20/F1Stats/blob/master/cypress/e2e/jsconfig.json) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                                              | Summary                         |
| ---                                                                                               | ---                             |
| [end-to-end.yml](https://github.com/noxyz20/F1Stats/blob/master/.github/workflows/end-to-end.yml) | <code>► INSERT-TEXT-HERE</code> |

</details>

---

##  Getting Started

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the F1Stats repository:
>
> ```console
> $ git clone https://github.com/noxyz20/F1Stats
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd F1Stats
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

> Run F1Stats using the command below:
> ```console
> $ npx vite 
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npx cypress run
> ```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/noxyz20/F1Stats/issues)**: Submit bugs found or log feature requests for the `F1Stats` project.
- **[Submit Pull Requests](https://github.com/noxyz20/F1Stats/pulls)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/noxyz20/F1Stats
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/noxyz20/F1Stats/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=noxyz20/F1Stats">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT license](https://opensource.org/licenses/MIT) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.


---
