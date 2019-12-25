Github Deployments and Repository Dispatch Trigger
============================================================================

A Tampermonkey userscript for triggering Github deployments and repository dispatch event with one click

![Screenshot](https://raw.githubusercontent.com/tete1030/github-repo-dispatcher/master/imgs/btn.png)
![Screenshot](https://raw.githubusercontent.com/tete1030/github-repo-dispatcher/master/imgs/type.png)
![Screenshot](https://raw.githubusercontent.com/tete1030/github-repo-dispatcher/master/imgs/payload.png)

## Prerequisite

Tampermonkey / Greasemonkey

## Usage

1. Install Tampermonkey or Greasemonkey in your favorite browser.
2. Install the script from [Greasefork](https://greasyfork.org/en/scripts/394032-github-repository-dispatch-trigger) (Recommended, as you can receive updates) or by copying.
3. Get github personal access token with repo permissions. Copy it.
4. Open the repo you want to trigger deployments or repo dispatch event.

### For `repository_dispatch` event
5. Click the "Repo Dispatch" button.
6. At the first time, you will be asked to input your personal access token.
7. Input your dispatch type (or any name you want. The name can be used to identify the event in Github Actions).
8. Input your dispatch payload (optional, in `json`. E.g. `{"debug": true}`).

### For `deployments` event
5. Click the "Deploy" button.
6. At the first time, you will be asked to input your personal access token.
7. Input the ref for your deploy, it can be branches/tags/commits
8. Input your task name (or any name you want. The name can be used to identify the event in Github Actions).
9. Input your dispatch payload (optional, in `json`. E.g. `{"debug": true}`).

## Documentations

* [`repository_dispatch` in Github Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#external-events-repository_dispatch)
* [`deployment` in Github Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#deployment-event-deployment)
* [Create a repository dispatch event](https://developer.github.com/v3/repos/#create-a-repository-dispatch-event)
* [Create a deployment](https://developer.github.com/v3/repos/deployments/#create-a-deployment)
* [RepositoryDispatchEvent](https://developer.github.com/v3/activity/events/types/#repositorydispatchevent)
* [DeploymentEvent](https://developer.github.com/v3/activity/events/types/#deploymentevent)
