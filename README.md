
# M3ntorship-UI

## About The Project:
As the name implies `m3ntorship-ui` is a UI-Package that consist of [React](https://reactjs.org/) components built with [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html) and uses [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/) for playground display and UI testing.	

Link to the package [on **npm** here](https://www.npmjs.com/package/m3ntorship-ui)

This will be a guide on **[installation](#installation)** and usage, also if you are more curious or planning to contribute you can jump to the **[development](#development)** guide .


## Installation
Simply `cd` into your project directory and run the command 

	yarn add m3ntorship-ui  
or
	
	npm i m3ntorship-ui

### Usage Guide
Currently, our package has 11 components, and you can import them all the same way after installation.

	import { ComponentName } from 'm3ntorship-ui';

You will also need to import the styling file for our components, in your `app` file or `index`
add the following ***(pick a global file on the project level  so you only need to this once)*** 

	 import 'm3ntorship-ui/dist/m3ntorship-ui.esm.css';

### Published Components List
-	Avatar
-	Badge
-	Button
-	CheckBox
-	IconButton
-	InputField
-	Link
-	Progress
-	Radio
-	SelectInput
-	Typography

We have a playground to try out all of our components [here on Chromatic](https://www.chromatic.com/library?appId=62c052f3652cc43232110cee)



## Development

### Download The Project
  

you can use any of the methods `GitHub` allows you to, that would be:


- Download a zip file *(need to extract after downloading via software like [7zip](https://www.7-zip.org/) or [Winrar](https://www.win-rar.com/)*)

- Clone via HTTP

- Clone via SSH *(Recommended and the way the guide is written)*

  

*if you need more info on **SSH** keys or how to set up one you can check the [Github docs here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)*.

 *For this project we recommend using **yarn** as your package manager, you can get to know more about [installing yarn here](https://yarnpkg.com/getting-started/install).*	
  

## How to Run Project:

Assuming you already cloned the project with:

	git clone git@github.com:m3ntorship/m3ntorship-ui.git

  
   [installation](#Installiation)

The next step is to use the terminal and `cd` into the project directory:

  

	cd m3ntorship-ui



### Installation

In the project directory, you can run:

  

	yarn

or

  

	npm i

after the installation is done, you can start the project:
while you can use any of the following to run the project in development mode:

	yarn start

or

	npm start

To view current components you need to run Storybook

	yarn storybook

That should open a new tab in your browser that directs to http://localhost:6006
				*you can change the port from the package.json file*


If you need to take a look at the configurations, this project was bootstrapped via **TDSX**, we recommend [taking a look at their docs](https://tsdx.io/).

## More About This Project:

Mentorship is an open-source initiative to prepare aspiring software talents into being top-level professionals that are able to compete and stand out in the market!

Why is it written M3ntorship? isn't that kind of old??

> "The name is written with **(3)** instead of just (E)
because it sends a message, 3 is looking at the opposite direction of the E, and that's the message"
Ahmed Ayoub, Founding Father of M3ntorship.
   
Wondering about usage and license, for this package we use the  [MIT License](https://github.com/m3ntorship/m3ntorship-ui/blob/dev/LICENSE)

## Contributors 
Here is [our list of contributors](https://github.com/m3ntorship/m3ntorship-ui/graphs/contributors)
## Future Plans

We aim to make this a fully functioning library of components, so we aim at adding more components and improving our current work.
When?
Well,that's the beauty of open-source, no one knows 😉