
# A website to convert base X strings to decimal

#### 22 Feb., 2017, v.1.0.0

#### By Mark Fisher

## Description

This script converts binary, trinary, etc. to decimal format.

### Specifications

* The program should return an alert when the user inputs a string that is not a number.
  * **Input Example**: "hello"
  * **Output Example**: "please enter a number"

* The program should return an alert when the user inputs a string that contains fewer digits than the digit associated with the x-nary (e.g., if x is 3 [trinary] throws alert if there are 4-9s in the string).
  * **Input Example**: ("1010200", 2) #the two here corresponds to the desired base
  * **Output Example**: "please enter symbols associated with this base"

* The program should take a string as input and return an integer the converts a binary string into a decimal integer.
  * **Input Example**:"0"
  * **Output Example**: 0
  * **Input Example**:"1"
  * **Output Example**: 1
  * **Input Example**:"10"
  * **Output Example**: 2
  * **Input Example**:"11"
  * **Output Example**: 3
  * **Input Example**:"100"
  * **Output Example**: 4

* The program should convert a trinary string into a decimal integer.
  * **Input Example**:"0"
  * **Output Example**:0
  * **Input Example**:"1"
  * **Output Example**:1
  * **Input Example**:"2"
  * **Output Example**:2
  * **Input Example**:"10"
  * **Output Example**:3
  * **Input Example**:"11"
  * **Output Example**:4
  * **Input Example**:"12"
  * **Output Example**:5
  * **Input Example**:"20"
  * **Output Example**:6
  * **Input Example**:"21"
  * **Output Example**:7
  * **Input Example**:"100"
  * **Output Example**:9
  * **Input Example**:"112"
  * **Output Example**:14

## Setup/Installation Requirements

### If working in pairs
* Set up your .pairs document for the day
* Clone this repo. (to your Desktop)
* Open terminal
* Navigate to the websiteRepoSetup directory: `cd ~/Desktop/websiteRepoSetup`. **This step is necessary because template files from websiteRepoSetup will need to be copied.**
* Type `./websiteRepoSetup.sh [yourRepoName] [partner1Initials] [partner2Initials]`
* Enjoy

### If working alone
* Clone this repo. (to your Desktop)
* Open terminal
* Navigate to the websiteRepoSetup directory: `cd ~/Desktop/websiteRepoSetup`. **This step is necessary because template files from websiteRepoSetup will need to be copied.**
* Type `./websiteRepoSetupIndivid.sh [yourRepoName] ["Your first and last name in quotes"] [yourEmailAddress]
* Enjoy

### For the template
* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/_repoNameHere_).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/TrackSuggester.git`
* Download
  * Click [here](https://github.com/Atticus29/_repoNameHere_/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the TrackSuggester folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* bash
* git v. 2.11.1

### Template
* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Clifford Grimmell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
