# chrome-audio-switcher
Chrome extension to quickly mute all but 1 tab. 

I created this extension because I like to watch live tv in my browser and play music over the commerical breaks. This extension saves me from having to manually mute a tab and unmute another tab, this can now be accomplished in two clicks. There are other CHrome extensions that offer the same functionality but I wanted to make my own. This extension only controls the tabs within the window the extension icon was clicked in.

![animated gif of extension](img/screenshot.gif)

## How To Use
First, clone this repository. From the Chrome browser visit chrome://extensions/ and enable developer mode. Next, click the "Load unpacked" button and select this repository folder. 

When the extension icon is clicked a vertical table of buttons, 1 for each tab, will be shown. The color of the button indicates if the tab is muted or not, red for muted and green for unmuted. The number on the button corresponds to the order of the tabs in the window, going from left to right. Clicking a button will unmute the corresponding tab, if muted, and mute all other tabs.
