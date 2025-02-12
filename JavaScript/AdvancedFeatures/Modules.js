/**
 * Topic: Modules
 */

/*
Question 1:
Let's assume that you have a default exported createUser function and an independent createUserName function.
choose the correct way to import both functions from the same file.

import createUser, createUserName from "./user.js";
import createUser, {createUserName} from "./user.js";
import {createUser, createUserName} from "./user.js";
import {createUser}, createUserName from "./user.js";
*/

// Answer:
import createUser, {createUserName} from "./user.js";

/*
Question 2:
Which snippets of codes are correct and which ones incorrect?
 */

// Option A (Incorrect ❌)
export function getSize() {
    //...
}

export default function getElements() {
    //...
}

export default function sizesList() {
    //...
}
// ❌ Error: You can only have one export default per file, but this snippet has two (getElements and sizesList),
// which will cause an error.

// Option B (✅ Correct)
export function getSize() {
    //...
}

export function getElements() {
    //...
}

export default function sizesList() {
    //...
}
/* ✅ Why it's correct:
Named exports → getSize and getElements can be imported using { getSize, getElements }.
Default export → sizesList can be imported as any name (import myList from "./library.js").
Only one export default, which is valid. */

// Option C (Incorrect ❌)
export default function getSize() {
    //...
}

export default function getElements() {
    //...
}

export default function sizesList() {
    //...
}
/* ❌ Error:
Multiple export default statements are not allowed.
Only one function can be the default export in a module. */

// Option D (✅ Correct)
export function getSize() {
    //...
}

export function getElements() {
    //...
}

export function sizesList() {
    //...
}
/* ✅ Why it's correct:
Uses only named exports, which is valid.
All functions can be imported like:
import { getSize, getElements, sizesList } from "./library.js";
There is no conflicting export default. */

/*
Question 3:
Let’s assume you have a file 'menu.js':
*/

export function getMenuItem() {
  // ...
}

export function getMainMenu() {
  // ...
}

export function getAdditionalMenu() {
  // ...
}

/*
Explain code
Select the incorrect way of importing functions from 'menu.js' to 'main.js'.

A.
import { getMenuItem as myMenuGet, getMainMenu as myMenuGetMain, getAdditionalMenu as myMenuGetAdditional} from './menu.js';
B.
import * as getMenu from './menu.js';
C.
import getMenuItem, getMainMenu, getAdditionalMenu from './menu.js';
D.
import { getMenuItem, getMainMenu, getAdditionalMenu } from './menu.js';
*/

// Answer:
//The incorrect way of importing functions is C:
❌ import getMenuItem, getMainMenu, getAdditionalMenu from './menu.js';

// Explanation of Each Option:
/* ✅ Option A (Correct)
import { getMenuItem as myMenuGet, getMainMenu as myMenuGetMain, getAdditionalMenu as myMenuGetAdditional } from './menu.js';
This is valid because named exports can be aliased using as. The functions are renamed when imported.

❌ Option B (Incorrect)
import * as getMenu from './menu.js';
This is actually valid! But it changes how the functions are accessed.
This imports everything as an object, so you must use:
getMenu.getMenuItem();
getMenu.getMainMenu();
getMenu.getAdditionalMenu();
While it works, getMenu is now an object containing the functions.

❌ Option C (Incorrect - This is the correct answer)
import getMenuItem, getMainMenu, getAdditionalMenu from './menu.js';
Incorrect because there is NO export default in menu.js.
Named exports must be imported with {}.
The correct way would be:
import { getMenuItem, getMainMenu, getAdditionalMenu } from './menu.js';

✅ Option D (Correct)
import { getMenuItem, getMainMenu, getAdditionalMenu } from './menu.js';
This is the standard way to import multiple named exports.
It matches the export statements exactly.
 */

/*
Question 4:
What do you need to write instead of each ... to use the goBack function in main.js?

Type words separated by a space.

// library.js
... function goBack() {}

// main.js
import { ... } from './library.js';
goBack();
 */

// Answer: export goBack
// Correct code:

// library.js
export function goBack() {}

// main.js
import { goBack } from './library.js';
goBack();

/*
Question 5
Let's say you have the getPrice function and a default class called Item in 'item.js'.
Write the line of code necessary to import these.
 */

// Answer:
import Item, {getPrice} from './item.js';

/*
Explanation:
Item → This is the default export and is imported without curly braces.
getPrice → This is a named export and must be imported inside curly braces {}.
Both are imported from the same file (item.js).

Example Usage:
import Item, { getPrice } from './item.js';

const item = new Item("Laptop", 1200);
console.log(getPrice(item)); // Calls the getPrice function
 */