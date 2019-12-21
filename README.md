Github Repository Dispatcher
============================================================================

A Tampermonkey userscript for triggering Github repository dispatch event with one click

![Screenshot](imgs/btn.png)
![Screenshot](imgs/type.png)
![Screenshot](imgs/payload.png)

## Prerequisite

Tampermonkey / Greasemonkey

## Usage

1. Install the script by copying or from [Greasefork](https://greasyfork.org/en/scripts/394032-github-repository-dispatch-trigger).
2. Get github personal access token with repo permissions. Copy it.
3. Open the repo you want to trigger repo dispatch event.
4. Click the "Repo Dispatch" button.
5. At the first time, you will be asked to input your personal access token.
6. Input your dispatch type (or any name you want. The name can be used to identify the event in Github Actions).
7. Input your dispatch payload (optional, in `json`. E.g. `{"debug": true}`).
8. Enjoy!

## Documentations of `repository_dispatch` event

* [`repository_dispatch` in Github Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#external-events-repository_dispatch)
* [Create a repository dispatch event](https://developer.github.com/v3/repos/#create-a-repository-dispatch-event)
